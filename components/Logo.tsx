import React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
}

export function Logo({ className = "", showText = true, size = "md" }: LogoProps) {
  const iconSizes = {
    sm: "w-7 h-7",
    md: "w-9 h-9",
    lg: "w-11 h-11",
    xl: "w-14 h-14",
  };

  const pixelDimensions = {
    sm: 28,
    md: 36,
    lg: 44,
    xl: 56,
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
    xl: "text-3xl",
  };

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 font-display font-bold tracking-tight transition-all duration-300 ${className}`}
      aria-label="FlowRadix Home"
    >
      <div className={`relative flex items-center justify-center flex-shrink-0 ${iconSizes[size]}`}>
        {/* Glow backdrop on hover */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-teal-500 via-cyan-400 to-purple-600 opacity-20 blur-md group-hover:opacity-70 transition-opacity duration-500 pointer-events-none" />

        {/* Custom FlowRadix Brand Logo */}
        <img
          src="./logo.png"
          alt="FlowRadix Logo"
          width={pixelDimensions[size]}
          height={pixelDimensions[size]}
          className="relative w-full h-full object-contain rounded-xl transform transition-transform duration-500 group-hover:scale-110 drop-shadow-sm"
          onError={(e) => {
            // Absolute path fallback for GitHub Pages basePath vs root dev
            const target = e.currentTarget;
            if (target.src.endsWith("/logo.png")) {
              target.src = "/flowradix/logo.png";
            }
          }}
        />
      </div>

      {showText && (
        <div className="flex items-baseline">
          <span className={`${textSizes[size]} text-slate-900 dark:text-white font-extrabold tracking-tight`}>
            Flow
          </span>
          <span className={`${textSizes[size]} bg-gradient-to-r from-teal-500 via-cyan-500 to-purple-600 bg-clip-text text-transparent font-extrabold`}>
            Radix
          </span>
          <span className="ml-1 w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        </div>
      )}
    </Link>
  );
}

