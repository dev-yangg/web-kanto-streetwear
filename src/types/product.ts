import { IGatsbyImageData } from "gatsby-plugin-image";

export type Product = {
  slug: string;
  name: string;
  date: string;
  stock: number;
  tags: string[];
  buyUrl: string;
  images: { image: IGatsbyImageData; alt: string }[];
  description: string;
};
