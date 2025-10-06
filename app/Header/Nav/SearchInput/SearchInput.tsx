"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Typed from "typed.js";
import styles from "./SearchInput.module.css";
import { ArrowUpLeft, Trash2 } from "lucide-react";

type Hit = {
  objectID: string;
  name?: string;
  imageUrl?: string;
  categoryName?: string;
  description?: string;
  _highlightResult?: Record<string, any>;
  _formatted?: Record<string, any>;
};

const BOXES = [
  { key: "popular", title: "Popular" },
  { key: "new", title: "New" },
  { key: "speedy", title: "Speedy Deals" },
  { key: "lowcost", title: "Low Cost" },
];

const CATEGORIES = ["Products", "Meals", "Services"];

type GroupedBox = {
  Products: Hit[];
  Meals: Hit[];
  Services: Hit[];
  other?: Hit[];
  flattened?: Hit[];
};

const FILTERS: Array<"All" | "Products" | "Meals" | "Services"> = [
  "All",
  "Products",
  "Meals",
  "Services",
];

// color map for the underline indicator
const filterColors: Record<"All" | "Products" | "Meals" | "Services", string> =
  {
    All: "rgba(75, 85, 99, 0.12)", // subtle neutral when All is active
    Products: "rgba(49, 123, 220, 1)",
    Meals: "rgba(229, 126, 29, 1)",
    Services: "rgba(43, 224, 169, 1)",
  };

export default function SearchInput() {
  const [value, setValue] = useState("");
  const [debounced, setDebounced] = useState("");
  const [focused, setFocused] = useState(false);

  // boxHits: key => grouped object returned from server
  const [boxHits, setBoxHits] = useState<Record<string, GroupedBox>>({});
  const [searchHits, setSearchHits] = useState<Hit[]>([]);
  const [recent, setRecent] = useState<string[]>([]);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const typedRef = useRef<HTMLInputElement | null>(null);
  const containerRef = useRef<HTMLElement | null>(null);

  const [filter, setFilter] = useState<
    "All" | "Products" | "Meals" | "Services"
  >("All");

  // close dropdown when clicking/touching outside the search area or pressing Escape
  useEffect(() => {
    if (!focused) return;

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node | null;
      if (!containerRef.current) return;
      if (!target || !containerRef.current.contains(target)) {
        setFocused(false);
      }
    };

    const onKeydown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setFocused(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    document.addEventListener("keydown", onKeydown);

    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      document.removeEventListener("keydown", onKeydown);
    };
  }, [focused]);

  // typed.js placeholder
  useEffect(() => {
    if (!typedRef.current) return;
    const typed = new Typed(typedRef.current, {
      strings: [
        "iphone",
        "rice and chicken",
        "Search products, services, or meals ^1500",
      ],
      attr: "placeholder",
      loop: true,
      typeSpeed: 30,
      backSpeed: 15,
      startDelay: 900,
      backDelay: 2000,
    });
    return () => typed.destroy();
  }, []);

  // debounce
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), 300);
    return () => clearTimeout(t);
  }, [value]);

  // recent from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem("fm_recent_searches");
      if (raw) setRecent(JSON.parse(raw));
    } catch {
      /* ignore */
    }
  }, []);

  // fetch grouped boxes when focused & empty
  useEffect(() => {
    let cancelled = false;
    async function fetchBoxes() {
      try {
        const modeMap: Record<string, string> = {
          popular: "popular",
          new: "new",
          speedy: "speedy",
          lowcost: "lowcost",
        };
        const calls = BOXES.map((b) =>
          fetch(`/api/search?mode=${modeMap[b.key]}&limit=30`).then((r) =>
            r.json()
          )
        );
        const results = await Promise.all(calls);
        if (cancelled) return;
        const map: Record<string, GroupedBox> = {};
        BOXES.forEach((b, i) => {
          const json = results[i];
          // server returns grouped or flattened; prefer grouped
          map[b.key] = {
            Products: (json.grouped?.Products || []).slice(0, 3),
            Meals: (json.grouped?.Meals || []).slice(0, 3),
            Services: (json.grouped?.Services || []).slice(0, 3),
            other: json.grouped?.Other || [],
            flattened: json.flattened || [],
          };
        });
        setBoxHits(map);
      } catch (err) {
        console.error("Failed to fetch boxes", err);
      }
    }

    if (focused && !debounced.trim()) {
      fetchBoxes();
    } else {
      setBoxHits({});
    }

    return () => {
      cancelled = true;
    };
  }, [focused, debounced]);

  // search when user types
  useEffect(() => {
    let cancelled = false;
    async function fetchSearch() {
      try {
        const res = await fetch(
          `/api/search?q=${encodeURIComponent(debounced)}&limit=20&page=1`
        );
        const json = await res.json();
        if (!cancelled) setSearchHits(json.products || []);
      } catch (err) {
        console.error("Search fetch failed:", err);
        if (!cancelled) setSearchHits([]);
      }
    }
    if (debounced.trim()) fetchSearch();
    else setSearchHits([]);
    return () => {
      cancelled = true;
    };
  }, [debounced]);

  // push recent
  const pushRecent = (q: string) => {
    if (!q) return;
    const next = [q, ...recent.filter((r) => r !== q)].slice(0, 6);
    setRecent(next);
    try {
      localStorage.setItem("fm_recent_searches", JSON.stringify(next));
    } catch {}
  };

  // select hit
  const handleSelectHit = (hit: Hit) => {
    setValue(hit.name ?? "");
    setFocused(false);
    pushRecent(hit.name ?? "");
    // navigate to product page if desired
  };

  const handleRecentClick = (term: string) => {
    setValue(term);
    setDebounced(term);
    pushRecent(term);
  };

  const recentTop4 = () => recent.slice(0, 4);

  // animation variants for staggering
  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.01,
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 700, damping: 28 },
    },
    exit: { opacity: 0, y: 6, transition: { duration: 0.1 } },
  };

  // helper to decide whether a hit should be shown under the active filter
  const shouldShowHit = (hit: Hit) => {
    if (filter === "All") return true;
    const cat = (hit.categoryName || "").toLowerCase();
    const target = filter.toLowerCase(); // "products" | "meals" | "services"
    // be forgiving: check exact, includes, or singular/plural variations
    return (
      cat === target ||
      cat.includes(target) ||
      cat.includes(target.slice(0, -1)) ||
      target.includes(cat)
    );
  };

  // Card component (image + category only)
  const Card = ({
    hit,
    onClick,
    isInBox = false,
  }: {
    hit: Hit;
    onClick: (h: Hit) => void;
    isInBox?: boolean;
  }) => (
    <button
      type="button"
      className={`${styles.card} ${styles[hit.categoryName ?? ""]}`}
      onMouseDown={(e) => {
        e.preventDefault();
        onClick(hit);
      }}
      title={hit.name}
    >
      <div className={styles.cardThumb}>
        {hit.imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={hit.imageUrl}
            alt={hit.name ?? "item"}
            className={styles.cardImg}
          />
        ) : (
          <div className={styles.cardPlaceholder} aria-hidden />
        )}
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardName} aria-hidden>
          {hit.name}
        </div>
        <div className={styles.cardCategory}>
          {!isInBox && (hit.categoryName ?? "General")}
        </div>
      </div>
      <ArrowUpLeft color="gray" size={16} />
    </button>
  );

  return (
    <section ref={containerRef} className={styles.searchInput}>
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          pushRecent(value);
          setDebounced(value);
        }}
      >
        <svg
          className={styles.searchIcon}
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
        </svg>

        <input
          ref={(el) => {
            inputRef.current = el;
            typedRef.current = el;
          }}
          className={styles.input}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          placeholder="Search products, meals or services"
          aria-label="Search products, meals or services"
          autoComplete="off"
        />

        <button type="submit" className={styles.submitBtn} aria-label="Search">
          Search
        </button>
      </form>

      <AnimatePresence>
        {focused && (
          <motion.div
            className={styles.dropdownWrap}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
          >
            {debounced.trim() ? (
              <motion.div
                className={styles.singleBox}
                initial={{ scale: 0.99, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.99, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                {/* FILTER BAR: All / Products / Meals / Services */}
                {/* FILTER BAR: moving underline (layoutId) */}
                {/* FILTER BAR — moving colored background + tiny dot */}
                <div
                  className={styles.filterRow}
                  role="tablist"
                  aria-label="Filter results"
                >
                  {FILTERS.map((f) => {
                    const isActive = filter === f;
                    const bgColor = filterColors[f];

                    return (
                      <motion.button
                        key={f}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => setFilter(f)}
                        className={`${styles.filterBtn} ${
                          isActive ? styles.activeFilter : ""
                        }`}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.975 }}
                        transition={{
                          type: "spring",
                          stiffness: 360,
                          damping: 28,
                        }}
                        // ensure text color contrast on colored backgrounds (white text for colored filters)
                        style={{
                          color:
                            isActive && f !== "All" ? "#ffffff" : undefined,
                        }}
                      >
                        {/* Animated background (moves between buttons via layoutId) */}
                        {isActive && (
                          <motion.div
                            layoutId="filter-indicator"
                            className={styles.filterIndicator}
                            style={{ backgroundColor: bgColor }}
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 28,
                            }}
                            aria-hidden
                          />
                        )}

                        {/* content: tiny colored dot + label */}
                        <span className={styles.filterContent}>
                          <span
                            className={styles.filterDot}
                            style={{
                              backgroundColor: bgColor,
                              boxShadow: isActive
                                ? `0 6px 18px ${bgColor.replace(
                                    /rgba?\((.+)\)/,
                                    "rgba($1, 0.18)"
                                  )} `
                                : "none",
                            }}
                            aria-hidden
                          />
                          <span className={styles.filterLabel}>{f}</span>
                        </span>
                      </motion.button>
                    );
                  })}
                </div>

                {/* Recent 2x2 grid (4 items) */}
                <div className={styles.sectionRow}>
                  <div className={styles.sectionTitle}>Recent</div>
                  <Trash2
                    onClick={() => {
                      localStorage.removeItem("fm_recent_searches");
                      setRecent([]);
                    }}
                    cursor={"pointer"}
                    color="rgb(204, 77, 68)"
                    size={16}
                  />
                </div>

                <div className={styles.recentGrid}>
                  {recentTop4().length === 0 ? (
                    <div className={styles.empty}>No recent searches</div>
                  ) : (
                    recentTop4().map((r) => (
                      <button
                        key={r}
                        className={styles.recentCell}
                        onMouseDown={(e) => {
                          e.preventDefault();
                          handleRecentClick(r);
                        }}
                      >
                        <span className={styles.recentIcon} aria-hidden>
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 7v6l4 2"
                              stroke="currentColor"
                              strokeWidth="1.4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <circle
                              cx="12"
                              cy="12"
                              r="9"
                              stroke="currentColor"
                              strokeWidth="1.4"
                            />
                          </svg>
                        </span>
                        <span className={styles.recentText}>{r}</span>
                      </button>
                    ))
                  )}
                </div>

                {/* Search header */}
                <div className={styles.sectionRow}>
                  <div className={styles.sectionTitle}>Search</div>
                  <div className={styles.sectionSubtitle}>{debounced}</div>
                </div>

                {/* results list — now animated + staggered */}
                {/* results list — filtered, animated by filter key for an odd 3D entrance */}
                <motion.div
                  key={filter} // remount/animate when filter changes
                  initial={{ rotateX: 12, opacity: 0, y: 8 }}
                  animate={{ rotateX: 0, opacity: 1, y: 0 }}
                  exit={{ rotateX: -8, opacity: 0, y: 6 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 30,
                    mass: 0.6,
                  }}
                  className={styles.resultsList}
                  // keep the stagger variants if you still want them:
                  variants={listVariants}
                >
                  {searchHits.filter(shouldShowHit).length === 0 ? (
                    <div className={styles.empty}>No results</div>
                  ) : (
                    searchHits.filter(shouldShowHit).map((hit) => (
                      <motion.div
                        key={hit.objectID}
                        className={styles.resultRow}
                        variants={itemVariant}
                        layout
                      >
                        <Card hit={hit} onClick={handleSelectHit} />
                      </motion.div>
                    ))
                  )}
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                className={styles.gridBoxes}
                initial={{ scale: 0.995, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.995, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                {BOXES.map((box) => {
                  const grouped = boxHits[box.key] || {
                    Products: [],
                    Meals: [],
                    Services: [],
                    other: [],
                    flattened: [],
                  };
                  return (
                    <motion.section
                      key={box.key}
                      className={styles.boxCard}
                      initial={{ y: 6, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 6, opacity: 0 }}
                      transition={{ duration: 0.18, delay: 0.02 }}
                    >
                      <div className={styles.boxHeader}>
                        {{
                          Popular: (
                            <svg viewBox="0 0 448 512">
                              <path d="M160 80c0-26.5 21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 352c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-352zM0 272c0-26.5 21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 160c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48L0 272zM368 96l32 0c26.5 0 48 21.5 48 48l0 288c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48z" />
                            </svg>
                          ),
                          New: (
                            <svg viewBox="0 0 448 512">
                              <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
                            </svg>
                          ),
                          "Speedy Deals": (
                            <svg viewBox="0 0 384 512">
                              <path d="M0 256L28.5 28c2-16 15.6-28 31.8-28H228.9c15 0 27.1 12.1 27.1 27.1c0 3.2-.6 6.5-1.7 9.5L208 160H347.3c20.2 0 36.7 16.4 36.7 36.7c0 7.4-2.2 14.6-6.4 20.7l-192.2 281c-5.9 8.6-15.6 13.7-25.9 13.7h-2.9c-15.7 0-28.5-12.8-28.5-28.5c0-2.3 .3-4.6 .9-6.9L176 288H32c-17.7 0-32-14.3-32-32z" />
                            </svg>
                          ),
                          "Low Cost": (
                            <svg viewBox="0 0 512 512">
                              <path d="M345 39.1L472.8 168.4c52.4 53 52.4 138.2 0 191.2L360.8 472.9c-9.3 9.4-24.5 9.5-33.9 .2s-9.5-24.5-.2-33.9L438.6 325.9c33.9-34.3 33.9-89.4 0-123.7L310.9 72.9c-9.3-9.4-9.2-24.6 .2-33.9s24.6-9.2 33.9 .2zM0 229.5L0 80C0 53.5 21.5 32 48 32l149.5 0c17 0 33.3 6.7 45.3 18.7l168 168c25 25 25 65.5 0 90.5L277.3 442.7c-25 25-65.5 25-90.5 0l-168-168C6.7 262.7 0 246.5 0 229.5zM144 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
                            </svg>
                          ),
                        }[box.title] ?? null}
                        <div className={styles.boxTitle}>{box.title}</div>
                      </div>

                      {/* single vertical scroll container for the whole box */}
                      <div className={styles.boxScroll}>
                        {CATEGORIES.map((cat) => {
                          const items = grouped[cat as keyof GroupedBox] || [];
                          return (
                            <div key={cat} className={styles.boxSection}>
                              <div
                                className={`${styles.boxSectionTitle} ${styles[cat]}`}
                              >
                                {cat}
                              </div>

                              {/* animated items list */}
                              <motion.div
                                className={styles.boxItems}
                                variants={listVariants}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                              >
                                {items.length === 0 ? (
                                  <div className={styles.emptySmall}>—</div>
                                ) : (
                                  items.map((hit) => (
                                    <motion.div
                                      key={hit.objectID}
                                      className={styles.boxItem}
                                      variants={itemVariant}
                                      layout
                                    >
                                      <Card
                                        hit={hit}
                                        onClick={handleSelectHit}
                                        isInBox={true}
                                      />
                                    </motion.div>
                                  ))
                                )}
                                <button className={styles.showMore}>
                                  More
                                </button>
                              </motion.div>
                            </div>
                          );
                        })}
                      </div>
                    </motion.section>
                  );
                })}
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
