// eslint-disable-next-line @typescript-eslint/no-explicit-any
import { getSlug } from "../Welcome/CardsBox/SubCategories/SubCategories";
import { categoriesData } from "./categoriesData";

export const findCategoryData = (
  category: string,
  mainCategory: "Products" | "Meals" | "Services" = "Products",
  data = categoriesData[mainCategory]
): string[] => {
  if (!data) return [];

  for (const key in data) {
    if (getSlug(key) === getSlug(category)) {
      const subCategories = data[key];
      if (Array.isArray(subCategories)) {
        return subCategories;
      }
      return Object.keys(subCategories || {});
    }

    // If it's an object, search recursively
    if (typeof data[key] === "object" && data[key] !== null) {
      const subData = findCategoryData(
        category,
        mainCategory,
        data[key] as any
      );
      if (subData.length > 0) {
        return subData;
      }
    }
  }

  return [];
};
