import type { Product } from "../../types/product";

type MdxNode = Queries.UseProductsQuery["allMdx"]["nodes"][number];

export const normalizeProduct = (node: MdxNode): Product | null => {
  const f = node.frontmatter;
  const image = f?.image?.childImageSharp?.gatsbyImageData;
  if (!f?.slug || !f.name || !f.date || !image) return null; // required fields

  return {
    slug: f.slug,
    name: f.name,
    date: f.date,
    stock: f.stock ?? 0,
    tags: (f.tags ?? []).filter((t): t is string => !!t),
    buyUrl: f.buyUrl ?? "",
    image,
    imageAlt: f.imageAlt ?? f.name,
    description: f.seo?.description ?? "",
  };
};
