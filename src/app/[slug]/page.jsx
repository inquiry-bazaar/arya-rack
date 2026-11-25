import { notFound } from "next/navigation";
import ProductDetail from "@/components/ProductDetail";
import { catalogue, categoryList } from "@/Data/products";
import Category from "@/components/Category";

export const dynamicParams = false;

export function generateStaticParams() {
  return [...catalogue.map((p) => ({ slug: p.slug })), ...categoryList.map((c) => ({ slug: c.slug }))];
}

const find = (slug) => ({
  product: catalogue.find((p) => p.slug === slug),
  category: categoryList.find((c) => c.slug === slug),
});

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const { product, category } = find(slug);
  if (product) {
    return {
      title: `${product.title} | Arya Industry, New Delhi`,
      description: `${product.desc} Manufactured by Arya Industry, New Delhi. Custom sizes available.`,
    };
  }
  if (category) {
    return {
      title: `${category.name} | Arya Industry, New Delhi`,
      description: `${category.count} products in ${category.name} by Arya Industry, New Delhi.`,
    };
  }
  return {};
}

export default async function SlugPage({ params }) {
  const { slug } = await params;
  const { product, category } = find(slug);
  if (product) return <ProductDetail product={product} />;
  if (category) return <Category category={category} />;
  notFound();
}