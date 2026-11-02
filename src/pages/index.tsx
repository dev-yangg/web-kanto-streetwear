import React from "react";
import type { HeadFC } from "gatsby";
import AppLayout from "../layouts/AppLayout";

export default function Homepage() {
  return (
    <AppLayout>
      <main>
        <div className="content-boundary"></div>
      </main>
    </AppLayout>
  );
}

export const Head: HeadFC = () => <title>Home Page</title>;
