import React from "react";
import { Link } from "gatsby";
import AppNav from "./AppNav";
import AppLogo from "./AppLogo";

export default function AppHeader() {
  return (
    <header>
      <div className="content-boundary flex items-center justify-between py-2">
        <Link to="/">
          <AppLogo />
        </Link>
        <AppNav />
      </div>
    </header>
  );
}
