import React, { useEffect, useState } from "react";
import { useProducts } from "../../hooks/useProducts";
import { Link } from "gatsby";
import { ArrowRight } from "lucide-react";
import { Product } from "../../types/product";
import FeaturedCard from "./FeaturedCard";

const LIMIT = 3;

export default function FeaturedLatest() {
  const latest = useProducts().slice(0, LIMIT);

  console.log(latest);

  return (
    <section className="py-14">
      <div className="content-boundary">
        <header className="flex items-center justify-between mb-3">
          <h2 className="uppercase font-semibold tracking-tighter text-small">
            Latest Drop
          </h2>
          <Link
            to="/products"
            className="flex gap-x-1 items-center text-small group">
            <span className="group-hover:translate-x-0.5 transition-transform duration-100 ease-in-out">
              View All Drops
            </span>{" "}
            <ArrowRight className="size-[1.15em] group-hover:translate-x-1 transition-transform duration-150 ease-in-out" />
          </Link>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {latest.map((p) => (
            <FeaturedCard
              key={p.slug}
              imageUrl={p.image}
              imageAlt={p.imageAlt}
              name={p.name}
              isAvailable={p.stock > 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
