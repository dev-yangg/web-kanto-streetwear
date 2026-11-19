import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import RightArrowCTA from "../RightArrowCTA";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:bleed-grid-max min-h-[60dvh] isolate">
      <StaticImage
        src="../../images/products/signature-bomber-jacket.webp"
        alt="Signature Bomber Jacket"
        loading="eager"
        placeholder="blurred"
        quality={90}
        className="w-full h-full col-start-1 xl:col-start-2 col-end-4 xl:col-end-3 row-start-1 -z-10"
        imgClassName="object-[60%_50%] md:object-cover"
      />
      <div className="self-center row-start-1 col-start-1 md:col-start-2 md:col-end-3 grid content-boundary grid-cols-1 md:grid-cols-2">
        <div>
          <p className="text-accent font-semibold text-small">NEW DROP/01</p>
          <h1 className="text-background text-heading-1 font-m-plus leading-none font-bold mt-2 mb-8 tracking-tighter w-[min(440px,100%)] md:w-[min(500px,100%)]">
            BUILT FOR THE CITY
          </h1>
          <RightArrowCTA
            path="/"
            label="VIEW THE DROP"
            className="bg-accent pl-7 pr-5 py-4 font-bold text-small hover:-translate-y-0.5 hover:translate-x-0.75 transition-transform duration-75 ease-in-sine group"
            labelClassName="transition-transform duration-75 ease-in-sine group-hover:translate-x-0.15"
            iconClassName="transition-transform duration-75 ease-in-sine group-hover:translate-x-0.75 group-hover:-translate-y-0.25"
          />
        </div>
      </div>
    </section>
  );
}
