import { CATEGORIES, raw, slugify } from "./product-source.mjs";

export const categories = CATEGORIES.map((category) => category.title);

export const catalogue = raw.map((p) => ({ ...p, slug: slugify(p.title) }));

export const categoryList = categories.map((name) => {
  const items = raw.filter((p) => p.category === name);
  return {
    name,
    slug: slugify(name).replace(/-and-/g, "-"),
    count: items.length,
    image: items[0]?.image,
  };
});