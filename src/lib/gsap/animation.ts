// lib/gsap/animation.ts
import { gsap } from "./config";

type Target = gsap.TweenTarget;
type Position = gsap.Position;
type Vars = gsap.TweenVars;

interface Options {
  tl?: gsap.core.Timeline;
  position?: Position;
  vars?: Vars;
}

export function fadeUp(target: Target, { tl, position, vars }: Options = {}) {
  return (tl ?? gsap).fromTo(
    target,
    { autoAlpha: 0, y: 10 },
    { autoAlpha: 1, y: 0, duration: 0.6, ease: "power4.out", ...vars },
    position,
  );
}

export function revealSplitText(
  chars: Target,
  { tl, position, vars }: Options = {},
) {
  return (tl ?? gsap).from(
    chars,
    {
      yPercent: 110,
      duration: 0.8,
      stagger: 0.03,
      ease: "power4.out",
      ...vars,
    },
    position,
  );
}

// SplitText (of gsap) renders divs to contain split text by default. I use spans for the split text so I need to override the inline default behavior of it
export function prepSplit(self: SplitText) {
  gsap.set(self.words, { display: "inline-block" });
  gsap.set(self.chars, { display: "inline-block" });
  gsap.set(self.lines, { display: "block" });
  gsap.set(self.masks, { display: "block" });
}
