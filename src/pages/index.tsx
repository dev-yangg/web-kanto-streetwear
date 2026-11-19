import React from "react";
import type { HeadFC } from "gatsby";
import AppLayout from "../layouts/AppLayout";
import Hero from "../components/home/Hero";

export default function Homepage() {
  return (
    <AppLayout>
      <main>
        <Hero />
      </main>
    </AppLayout>
  );
}

export const Head: HeadFC = () => <title>Home | Kantō</title>;
