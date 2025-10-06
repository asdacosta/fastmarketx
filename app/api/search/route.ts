// app/api/search/route.ts
import { NextRequest, NextResponse } from "next/server";
import { algoliasearch } from "algoliasearch";

const client = algoliasearch(
  process.env.ALGOLIA_APP_ID!,
  process.env.ALGOLIA_ADMIN_KEY!
);

type Hit = Record<string, any>;

const CATEGORY_KEYS = ["Products", "Meals", "Services"];

/**
 * Normalize categoryName to one of the canonical keys or "Other"
 */
function normalizeCategory(cat?: string) {
  if (!cat) return "Other";
  const c = String(cat).trim().toLowerCase();
  if (c.includes("product")) return "Products";
  if (c.includes("meal") || c.includes("food") || c.includes("dish"))
    return "Meals";
  if (c.includes("service")) return "Services";
  return "Other";
}

/**
 * Group hits by canonical category and limit each to `perCategoryLimit`
 */
function groupHitsByCategory(hits: Hit[], perCategoryLimit = 3) {
  const map: Record<string, Hit[]> = {};
  CATEGORY_KEYS.concat(["Other"]).forEach((k) => (map[k] = []));
  for (const h of hits) {
    const cat = normalizeCategory(h.categoryName);
    if (!map[cat]) map[cat] = [];
    if (map[cat].length < perCategoryLimit) map[cat].push(h);
  }
  // flattened in the order: Products, Meals, Services, Other
  const flattened = CATEGORY_KEYS.concat(["Other"]).flatMap(
    (k) => map[k] || []
  );
  return { grouped: map, flattened };
}

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q")?.trim() || "";
  const mode = url.searchParams.get("mode") || ""; // "", "popular", "new", "speedy", "lowcost"
  const limit = parseInt(url.searchParams.get("limit") || "30", 10);
  const pageQ = parseInt(url.searchParams.get("page") || "1", 10);
  const page = Math.max(0, pageQ - 1);

  try {
    // Build searchParams
    const baseSearchParams: Record<string, any> = {
      query: q || "",
      hitsPerPage: Math.max(limit, 30),
      page,
      highlightPreTag: "<mark>",
      highlightPostTag: "</mark>",
      attributesToHighlight: ["name", "description", "categoryName"],
    };

    // If user typed a query, make autocomplete friendly
    if (q) {
      baseSearchParams.queryType = "prefixAll";
    }

    // Mode customizations — these assume you will tag records properly in Algolia.
    // If you want strict behavior, add the attributes on your records (isNew, isSpeedyDeal, price).
    if (mode === "new") {
      // Prefer newly added items — if you have createdAt, configure a replica with ranking on createdAt.
      // As fallback we still call the index and rely on its ranking.
    } else if (mode === "popular") {
      // If you have `popularity` or `sales` attribute you can favor those via index ranking.
    } else if (mode === "lowcost") {
      // If you have a numeric price attribute you might set numericFilters or use a custom replica.
      // Example: baseSearchParams.numericFilters = ['price<=50']; // optional
    } else if (mode === "speedy") {
      // If you mark fast deals with isSpeedyDeal:true, we can filter with facetFilters
      // baseSearchParams.facetFilters = [['isSpeedyDeal:true']];
    }

    const { hits, nbHits } = await client.searchSingleIndex({
      indexName: "fastmarketX",
      searchParams: baseSearchParams,
    });

    // If mode provided, group and limit per category to 3 items each (server-side)
    if (mode) {
      const { grouped, flattened } = groupHitsByCategory(hits as Hit[], 3);
      return NextResponse.json({
        mode,
        products: hits,
        total: nbHits,
        grouped,
        flattened,
      });
    }

    // Normal search (query present) — return raw hits (client handles highlighting)
    return NextResponse.json({ products: hits, total: nbHits });
  } catch (err) {
    console.error("Algolia search error:", err);
    return NextResponse.json({ error: "Search failed" }, { status: 500 });
  }
}
