"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

const NAV_LINKS = [
  { name: "Products", href: "#products" },
  { name: "Services", href: "#services" },
  { name: "Ecosystem", href: "#ecosystem" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm ${
        scrolled ? "py-2.5" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Logo size="md" />

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-slate-200 bg-slate-50 shadow-sm">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-medium text-slate-700 hover:text-teal-600 hover:bg-slate-200/60 rounded-full transition-all duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Actions: Theme Toggle + Gradient CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <ThemeToggle />

            <Link
              href="#contact"
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden rounded-full font-medium transition-all duration-300 group shadow-lg shadow-teal-500/20 hover:shadow-teal-500/35 active:scale-95"
            >
              <span className="w-full h-full bg-gradient-to-r from-teal-500 via-cyan-500 to-purple-600 group-hover:from-teal-600 group-hover:via-cyan-600 group-hover:to-purple-700 absolute inset-0 rounded-full transition-all" />
              <span className="relative px-5 py-2 transition-all ease-out bg-teal-600/90 rounded-full group-hover:bg-transparent text-white text-sm font-semibold flex items-center gap-1.5">
                <span>Get Started</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 sm:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 hover:bg-slate-100 focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="sm:hidden px-4 pt-2 pb-6 mt-2 bg-white backdrop-blur-2xl border-b border-slate-200 shadow-xl"
          >
            <div className="flex flex-col gap-2 pt-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 text-base font-medium text-slate-800 hover:bg-slate-100 rounded-xl transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-3">
                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-teal-500 via-cyan-500 to-purple-600 text-white font-semibold text-center shadow-md shadow-teal-500/25"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Get Started — Contact FlowRadix</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
