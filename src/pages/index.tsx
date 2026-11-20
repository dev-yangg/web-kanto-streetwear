import React from "react";
import type { HeadFC } from "gatsby";
import AppLayout from "../layouts/AppLayout";
import Hero from "../components/home/Hero";
import BrandStatement from "../components/home/BrandStatement";

export default function Homepage() {
  return (
    <AppLayout>
      <main>
        <Hero />
        <BrandStatement />
      </main>
    </AppLayout>
  );
}

export const Head: HeadFC = () => <title>Home | Kantō</title>;
