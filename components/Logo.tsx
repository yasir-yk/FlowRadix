import React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export function Logo({ className = "", size = "md" }: LogoProps) {
  const heightClasses = {
    sm: "h-7",
    md: "h-9 sm:h-10",
    lg: "h-11 sm:h-12",
    xl: "h-14 sm:h-16",
  };

  return (
    <Link
      href="/"
      className={`group inline-flex items-center transition-all duration-300 ${className}`}
      aria-label="FlowRadix Home"
    >
      <div className="relative flex items-center justify-center">
        {/* Subtle ambient glow backdrop */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-teal-500/20 via-cyan-400/20 to-purple-600/20 opacity-30 blur-md group-hover:opacity-80 transition-opacity duration-500 pointer-events-none" />

        {/* Full FlowRadix Brand Logo Image */}
        <img
          src="./logo.png"
          alt="FlowRadix"
          className={`relative ${heightClasses[size]} w-auto max-w-full object-contain transform transition-transform duration-500 group-hover:scale-105 drop-shadow-sm`}
          onError={(e) => {
            // Path fallback for GitHub Pages basePath vs root dev
            const target = e.currentTarget;
            if (target.src.endsWith("/logo.png")) {
              target.src = "/flowradix/logo.png";
            }
          }}
        />
      </div>
    </Link>
  );
}


