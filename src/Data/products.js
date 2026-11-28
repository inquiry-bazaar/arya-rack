import { CATEGORIES, raw, slugify } from "./product-source.mjs";

export const categories = CATEGORIES.map((category) => category.title);

const productSlugs = new Set(raw.map((p) => slugify(p.title)));

export const catalogue = raw.map((p) => ({
  ...p,
  slug: slugify(p.title),
  ...(p.relatedProducts && {
    relatedProducts: p.relatedProducts.filter((product) =>
      productSlugs.has(product.slug)
    ),
  }),
}));

export const categoryList = categories.map((name) => {
  const items = raw.filter((p) => p.category === name);
  return {
    name,
    slug: slugify(name).replace(/-and-/g, "-"),
    count: items.length,
    image: items[0]?.image,
  };
});