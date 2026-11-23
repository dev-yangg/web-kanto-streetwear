import { IGatsbyImageData } from "gatsby-plugin-image";

export type Product = {
  slug: string;
  name: string;
  date: string;
  stock: number;
  tags: string[];
  buyUrl: string;
  image: IGatsbyImageData;
  imageAlt: string;
  description: string;
};
