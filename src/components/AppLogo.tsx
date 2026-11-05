import React from "react";

export default function AppLogo() {
  return (
    <div className="w-24 p-1">
      <svg
        className="logo-reveal w-full h-full fill-none group"
        viewBox="0 0 295 73"
        xmlns="http://www.w3.org/2000/svg">
        <path
          pathLength={1}
          d="M5 17V73M5 48L50 21.3001M22 37.9134L50 69.6947"
          className="stroke-foreground stroke-10 group-hover:stroke-12 transition-all duration-100 ease-in-out"
        />
        <path
          pathLength={1}
          d="M62.1741 70.6673L89.2517 19.3328L116.329 70.6673M69.8052 56.2H108.698"
          strokeMiterlimit="1.6"
          className="stroke-foreground stroke-10 group-hover:stroke-12 transition-all duration-100 ease-in-out"
        />
        <path
          pathLength={1}
          d="M130.752 17V73M130.752 20.2625L173.352 69.7375M173.352 17V73"
          className="stroke-foreground stroke-10 group-hover:stroke-12 transition-all duration-100 ease-in-out"
        />
        <path
          pathLength={1}
          d="M182.352 22H232.352M207.352 22V73"
          className="stroke-foreground stroke-10 group-hover:stroke-12 transition-all duration-100 ease-in-out"
        />
        <ellipse
          pathLength={1}
          cx="264.852"
          cy="45"
          rx="24.5"
          ry="23"
          className="stroke-foreground stroke-10 group-hover:stroke-12 transition-all duration-100 ease-in-out"
        />
        <path
          pathLength={1}
          d="M240.652 5H284.652"
          className="stroke-foreground stroke-10 group-hover:stroke-12 transition-all duration-100 ease-in-out"
        />
      </svg>
    </div>
  );
}
