import React from "react";
import type { HeadFC } from "gatsby";
import Hero from "../components/home/Hero";
import BrandStatement from "../components/home/BrandStatement";
import FeaturedLatest from "../components/home/FeaturedLatest";

export default function Homepage() {
  return (
    <main>
      <Hero />
      <BrandStatement />
      <FeaturedLatest />
    </main>
  );
}

export const Head: HeadFC = () => <title>Home | Kantō</title>;
