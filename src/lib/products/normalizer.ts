import type { Product } from "../../types/product";

type MdxNode = Queries.UseProductsQuery["allMdx"]["nodes"][number];

export const normalizeProduct = (node: MdxNode): Product | null => {
  const f = node.frontmatter;
  const images = (f?.images ?? []).flatMap((img) => {
    const data = img?.src?.childImageSharp?.gatsbyImageData;
    return data && img?.alt ? [{ image: data, alt: img.alt }] : [];
  });

  if (!f?.slug || !f.name || !f.date || images.length === 0) {
    console.warn(
      `[normalizeProduct] dropped "${f?.slug ?? "unknown"}": missing required field or image`,
    );
    return null;
  } // required fields

  return {
    slug: f.slug,
    name: f.name,
    date: f.date,
    stock: f.stock ?? 0,
    tags: (f.tags ?? []).filter((t): t is string => !!t),
    buyUrl: f.buyUrl ?? "",
    images,
    description: f.seo?.description ?? "",
  };
};
