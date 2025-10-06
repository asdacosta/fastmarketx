import { Category } from "@/models/Category";

export async function getCategoryPath(categoryId: string) {
  const path: string[] = [];
  let current = await Category.findById(categoryId);

  while (current) {
    path.unshift(current.name);
    current = current.parent ? await Category.findById(current.parent) : null;
  }

  return path; // e.g., ['Electronics', 'Phones', 'iPhones']
}
