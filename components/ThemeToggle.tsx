"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={`w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-800/50 animate-pulse ${className}`}
        aria-hidden="true"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`relative group p-2.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm hover:shadow-md hover:border-teal-500/50 dark:hover:border-teal-400/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500/40 ${className}`}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Activate Light Mode" : "Activate Dark Mode"}
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-teal-500/20 via-cyan-400/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="moon"
            initial={{ rotate: -90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 90, scale: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="relative flex items-center justify-center text-cyan-400"
          >
            <Moon className="w-4 h-4 transition-transform group-hover:-rotate-12 duration-300" />
            <Sparkles className="w-2 h-2 text-purple-400 absolute -top-1 -right-1 animate-pulse" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ rotate: 90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: -90, scale: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="relative flex items-center justify-center text-amber-500"
          >
            <Sun className="w-4 h-4 transition-transform group-hover:rotate-45 duration-300" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
