import React, { useRef } from "react";
import { gsap, SplitText, useGSAP, ScrollTrigger } from "../../lib/gsap/config";
import { fadeUp, prepSplit, revealSplitText } from "../../lib/gsap/animation";

export default function BrandStatement() {
  const container = useRef<HTMLElement | null>(null);
  useGSAP(
    () => {
      const q = gsap.utils.selector(container);
      const statement = "[data-animated=statement]";
      const mission = "[data-animated=mission]";

      // master timeline, paused until both splits are ready
      const tl = gsap.timeline({ paused: true });
      fadeUp(q("[data-animated=eyebrow]"), {
        tl,
        position: 0,
        vars: { duration: 1.25 },
      });

      const ready = new Set<string>();
      let inView = false;
      let played = false;

      const playTl = () => {
        if (played || !inView || ready.size < 2) return;
        played = true;
        gsap.delayedCall(0.075, () => tl.play()); // delay the animation a bit
      };

      const markReady = (name: string) => {
        ready.add(name);
        playTl();
      };

      ScrollTrigger.create({
        trigger: container.current,
        start: "top 88%",
        once: true,
        onEnter: () => {
          inView = true;
          playTl();
        },
      });

      SplitText.create(statement, {
        type: "lines",
        mask: "lines",
        tag: "span",
        autoSplit: true,
        onSplit(self) {
          prepSplit(self);
          gsap.set(statement, { autoAlpha: 1 });

          const child = gsap.timeline();
          revealSplitText(self.lines, {
            tl: child,
            vars: { duration: 0.7, stagger: 0.1 },
          });
          tl.add(child, 0.2);

          markReady("statement");
          return child;
        },
      });

      SplitText.create(mission, {
        type: "lines",
        tag: "span",
        mask: "lines",
        autoSplit: true,
        onSplit(self) {
          prepSplit(self);
          gsap.set(mission, { autoAlpha: 1 });

          const child = gsap.timeline();
          revealSplitText(self.lines, { tl: child, vars: { stagger: 0.02 } });
          tl.add(child, 0.65);

          markReady("mission");
          return child;
        },
      });
    },
    { scope: container },
  );
  return (
    <section ref={container}>
      <div className="content-boundary grid grid-cols-1 md:grid-cols-4 py-7 md:py-12 gap-y-6 md:gap-y-0 md:gap-x-8">
        <div className="md:col-span-3 flex flex-col gap-y-1 md:pr-14">
          <p className="text-small font-semibold uppercase overflow-hidden">
            <span data-animated="eyebrow" className="inline-block">
              Our Brand
            </span>
          </p>
          <h2
            data-animated="statement"
            className="invisible font-m-plus text-heading-4 md:text-heading-3 font-extrabold leading-tight">
            KANTŌ IS A SMALL INDEPENDENT STREETWEAR LABEL BUILT BY CREATIVES,
            FOR THE STREETS.
          </h2>
        </div>
        <p
          data-animated="mission"
          className="invisible text-small leading-tight md:self-center md:col-start-4">
          WE CREATE PIECES THAT REFLECT THE ENERGY, CULTURE, AND PEOPLE THAT
          MOVE OUR WORLD.
        </p>
      </div>
    </section>
  );
}
