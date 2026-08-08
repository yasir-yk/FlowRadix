"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  Globe,
  Server,
  MessageSquare,
  Share2,
  Database,
  Code2,
  Layers,
  Cpu,
  Boxes,
  Zap,
  Terminal,
} from "lucide-react";

const ECOSYSTEM_ITEMS = [
  { name: "Shopify", category: "E-Commerce", icon: ShoppingBag, color: "text-emerald-500", border: "border-emerald-500/30" },
  { name: "WordPress", category: "CMS & Plugins", icon: Globe, color: "text-cyan-500", border: "border-cyan-500/30" },
  { name: "Laravel", category: "Backend Framework", icon: Server, color: "text-rose-500", border: "border-rose-500/30" },
  { name: "Meta APIs", category: "Social & Ads API", icon: Share2, color: "text-blue-500", border: "border-blue-500/30" },
  { name: "WhatsApp", category: "Cloud API", icon: MessageSquare, color: "text-green-500", border: "border-green-500/30" },
  { name: "PostgreSQL", category: "Database Core", icon: Database, color: "text-indigo-400", border: "border-indigo-500/30" },
  { name: "React", category: "Frontend Engine", icon: Code2, color: "text-cyan-400", border: "border-cyan-400/30" },
  { name: "Next.js", category: "Full-Stack Web", icon: Layers, color: "text-slate-800 dark:text-white", border: "border-slate-500/30" },
  { name: "Tailwind CSS", category: "Design System", icon: Zap, color: "text-teal-400", border: "border-teal-400/30" },
  { name: "Redis", category: "Cache & Queues", icon: Cpu, color: "text-red-500", border: "border-red-500/30" },
  { name: "Docker", category: "Containers", icon: Boxes, color: "text-blue-400", border: "border-blue-400/30" },
  { name: "TypeScript", category: "Type Safety", icon: Terminal, color: "text-blue-500", border: "border-blue-500/30" },
];

export function EcosystemMarquee() {
  return (
    <section id="ecosystem" className="py-20 sm:py-28 relative overflow-hidden bg-slate-100/50 dark:bg-slate-950/40 border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
          <Layers className="w-3.5 h-3.5" />
          <span>Universal Interoperability</span>
        </div>
        <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
          Enterprise Integration Ecosystem
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Seamlessly connected across the modern commerce and API infrastructure. No silos, no friction.
        </p>
      </div>

      {/* Row 1: Forward Marquee */}
      <div className="relative w-full overflow-hidden flex whitespace-nowrap py-3">
        {/* Left and Right Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-slate-100 dark:from-[#0F172A] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-slate-100 dark:from-[#0F172A] to-transparent z-10 pointer-events-none" />

        <div className="flex gap-4 sm:gap-6 animate-marquee flex-shrink-0">
          {ECOSYSTEM_ITEMS.concat(ECOSYSTEM_ITEMS).map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={`marquee-1-${idx}`}
                className={`flex items-center gap-3 px-5 py-3 rounded-2xl bg-white dark:bg-slate-900/90 border ${item.border} shadow-sm hover:shadow-md backdrop-blur-md transition-all duration-300 hover:scale-105`}
              >
                <div className={`${item.color} flex items-center justify-center`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-bold text-slate-900 dark:text-white">{item.name}</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">{item.category}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Row 2: Reverse Marquee */}
      <div className="relative w-full overflow-hidden flex whitespace-nowrap py-3 mt-3">
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-slate-100 dark:from-[#0F172A] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-slate-100 dark:from-[#0F172A] to-transparent z-10 pointer-events-none" />

        <div className="flex gap-4 sm:gap-6 animate-marquee-reverse flex-shrink-0">
          {[...ECOSYSTEM_ITEMS.slice(6), ...ECOSYSTEM_ITEMS.slice(0, 6)]
            .concat([...ECOSYSTEM_ITEMS.slice(6), ...ECOSYSTEM_ITEMS.slice(0, 6)])
            .map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={`marquee-2-${idx}`}
                  className={`flex items-center gap-3 px-5 py-3 rounded-2xl bg-white dark:bg-slate-900/90 border ${item.border} shadow-sm hover:shadow-md backdrop-blur-md transition-all duration-300 hover:scale-105`}
                >
                  <div className={`${item.color} flex items-center justify-center`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-bold text-slate-900 dark:text-white">{item.name}</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">{item.category}</div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
