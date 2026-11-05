import React from "react";
import { Link } from "gatsby";
import AppLinks from "./AppLinks";
import AppLogo from "./AppLogo";

export default function AppHeader() {
  return (
    <header>
      <div className="content-boundary flex items-center justify-between py-4">
        <Link to="/">
          <AppLogo />
        </Link>
        <nav className="hidden md:block">
          <AppLinks
            className="flex items-center gap-x-8 font-bold"
            linkVariants={["tilted", "animatedUnderline"]}
            roundedIndicator
          />
        </nav>
      </div>
    </header>
  );
}
