import { Link } from "gatsby";
import { ArrowUpRight } from "lucide-react";
import React from "react";
import { cn } from "../lib/tw-merge-config";

interface Props {
  path: string;
  label: string;
  className?: string;
  labelClassName?: string;
  iconClassName?: string;
}
export default function RightArrowCTA({
  path,
  label,
  className,
  labelClassName,
  iconClassName,
}: Props) {
  return (
    <Link to={path} className={cn("inline-flex items-center", className)}>
      <span className={cn("", labelClassName)}>{label}</span>
      <ArrowUpRight
        className={cn("size-[1.5em] stroke-2 ml-2", iconClassName)}
      />
    </Link>
  );
}
