import React from "react";
import type { HeadFC } from "gatsby";
import Hero from "../components/home/Hero";
import BrandStatement from "../components/home/BrandStatement";

export default function Homepage() {
  return (
    <main>
      <Hero />
      <BrandStatement />
    </main>
  );
}

export const Head: HeadFC = () => <title>Home | Kantō</title>;
