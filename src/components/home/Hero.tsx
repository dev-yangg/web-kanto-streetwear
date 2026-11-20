import { StaticImage } from "gatsby-plugin-image";
import React, { useRef } from "react";
import RightArrowCTA from "../RightArrowCTA";
import { gsap, useGSAP, SplitText } from "../../lib/gsap/config";

export default function Hero() {
  const heroSection = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(heroSection);

      SplitText.create("h1", {
        type: "lines, words, chars",
        mask: "lines",
        tag: "span",
        autoSplit: true,
        onSplit(self) {
          gsap.set(self.words, { display: "inline-block" });
          gsap.set(self.chars, { display: "inline-block" });
          gsap.set(self.lines, { display: "block" });
          gsap.set(self.masks, { display: "block" });
          gsap.set("h1", { autoAlpha: 1 });

          gsap.set(self.words, { display: "inline-block" });
          gsap.set(self.chars, { display: "inline-block" });
          gsap.set(self.lines, { display: "block" });
          gsap.set(self.masks, { display: "block" });

          const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

          tl.set(q("h1"), { autoAlpha: 1 })
            .fromTo(
              q("[data-animated=eyebrow]"),
              { autoAlpha: 0, y: 10 },
              { autoAlpha: 1, y: 0, duration: 0.6 },
              0,
            )
            .from(
              self.chars,
              { yPercent: 110, duration: 0.8, stagger: 0.03 },
              0.2,
            )
            .fromTo(
              q("[data-animated=cta]"),
              { autoAlpha: 0, y: 10 },
              { autoAlpha: 1, y: 0, duration: 0.65 },
              ">-1", // starts 0.15s before the heading finishes
            );

          return tl;
        },
      });
    },
    { scope: heroSection },
  );

  return (
    <section
      ref={heroSection}
      className="grid grid-cols-1 md:bleed-grid-max min-h-[60dvh] isolate">
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
          <p className="inline-block text-accent font-semibold text-small overflow-y-clip">
            <span className="inline-block" data-animated="eyebrow">
              NEW DROP/01
            </span>
          </p>
          <h1 className="invisible text-background text-heading-1 font-m-plus leading-none font-bold mt-2 mb-8 tracking-tighter w-[min(440px,100%)] md:w-[min(550px,100%)]">
            BUILT FOR THE CITY
          </h1>
          <div data-animated="cta" className="overflow-y-clip">
            <RightArrowCTA
              path="/"
              label="VIEW THE DROP"
              className="bg-accent pl-7 pr-5 py-4 font-bold text-tiny hover:-translate-y-0.5 hover:translate-x-0.75 transition-transform duration-75 ease-in-sine group"
              labelClassName="transition-transform duration-75 ease-in-sine group-hover:translate-x-0.15"
              iconClassName="transition-transform duration-75 ease-in-sine group-hover:translate-x-0.75 group-hover:-translate-y-0.25"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
