import { useStaticQuery, graphql } from "gatsby";
import { useMemo } from "react";
import { normalizeProduct } from "../lib/products/normalizer";
import { Product } from "../types/product";

export const useProducts = () => {
  const data = useStaticQuery<Queries.UseProductsQuery>(graphql`
  query UseProducts {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          buyUrl
          date
          imageAlt
          name
          seo {
            description
          }
          slug
          stock
          tags
          image {
            childImageSharp {
              gatsbyImageData(formats: AUTO, width: 600)
            }
          }
        }
      }
    }
  }
`);

  return useMemo(
    () =>
      data.allMdx.nodes
        .map(normalizeProduct)
        .filter((p): p is Product => p !== null),
    [data],
  );
};
