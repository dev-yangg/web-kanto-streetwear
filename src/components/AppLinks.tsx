import React from "react";
import { Link } from "gatsby";
import { cn } from "../lib/tw-merge-config";

const appLinks = [
  { label: "Collections", path: "/collections" },
  { label: "Lookbook", path: "/lookbook" },
  { label: "Stories", path: "/stories" },
  { label: "About", path: "/about" },
  { label: "Stockists", path: "/stockists" },
  { label: "Shop", path: "/shop" },
];

const linkStyles = {
  tilted: "-skew-4 rotate-4",
  hoverTilt: [
    "skew-0 hover:-skew-4",
    "rotate-0 hover:rotate-4",
    "transition-transform duration-300",
  ].join(" "),
  animatedUnderline: [
    "py-0.5 hover:-translate-y-0.25 hover:text-accent transition-[color_transform] duration-300 ease-out after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.75 after:bg-accent after:scale-x-0 after:origin-bottom-right after:translate-y-0.75 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100 after:rounded-full",
  ].join(" "),
} as const;

export type LinkVariants = keyof typeof linkStyles;

interface Props {
  className?: string;
  linkVariants?: LinkVariants[];
  roundedIndicator?: boolean;
}

export default function AppLinks({ className, linkVariants }: Props) {
  return (
    <ul className={cn(className)}>
      {appLinks.map((link) => (
        <li key={link.label} className={"group"}>
          <Link
            data-label={link.label}
            to={link.path}
            className={cn(
              "relative inline-block",

              linkVariants?.map((variant) => linkStyles[variant]),
            )}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
