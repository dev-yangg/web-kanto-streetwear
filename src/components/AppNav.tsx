import React from "react";
import { Link } from "gatsby";

const appLinks = [
  { label: "Collections", path: "/collections" },
  { label: "Lookbook", path: "/lookbook" },
  { label: "Stories", path: "/stories" },
  { label: "About", path: "/about" },
  { label: "Stockists", path: "/stockists" },
  { label: "Shop", path: "/shop" },
];

export default function AppNav() {
  return (
    <nav>
      <ul className="flex items-center gap-x-4">
        {appLinks.map((link) => (
          <li key={link.label}>
            <Link to={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
