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
      <div className={`relative flex items-center justify-center ${iconSizes[size]}`}>
        {/* Glow backdrop on hover */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-teal-500 via-cyan-400 to-purple-600 opacity-20 blur-md group-hover:opacity-60 transition-opacity duration-500" />
        
        {/* FlowRadix Continuous Infinity Loop SVG */}
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative w-full h-full transform transition-transform duration-500 group-hover:scale-105"
        >
          <defs>
            <linearGradient id="flowGradientPrimary" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0D9488" />
              <stop offset="45%" stopColor="#06B6D4" />
              <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>
            <linearGradient id="flowGradientSecondary" x1="44" y1="4" x2="4" y2="44" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#7C3AED" />
              <stop offset="55%" stopColor="#06B6D4" />
              <stop offset="100%" stopColor="#0D9488" />
            </linearGradient>
            <filter id="glowEffect" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Continuous Infinity Loop representing Flow & Radix */}
          <path
            d="M14.5 15C10.3579 15 7 18.3579 7 22.5C7 26.6421 10.3579 30 14.5 30C19.5 30 23.5 24 24 23.5C24.5 24 28.5 30 33.5 30C37.6421 30 41 26.6421 41 22.5C41 18.3579 37.6421 15 33.5 15C28.5 15 24.5 21 24 21.5C23.5 21 19.5 15 14.5 15Z"
            stroke="url(#flowGradientPrimary)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* Inner Radix Node Point */}
          <circle cx="24" cy="22.5" r="2.5" fill="url(#flowGradientSecondary)" />
          <circle cx="14.5" cy="22.5" r="2" fill="#0D9488" />
          <circle cx="33.5" cy="22.5" r="2" fill="#7C3AED" />
        </svg>
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
