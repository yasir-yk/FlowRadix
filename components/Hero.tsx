"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Zap,
  ShieldCheck,
  Cpu,
  Layers,
  ShoppingBag,
  Globe,
  Server,
  MessageSquare,
  Share2,
} from "lucide-react";
import { Logo } from "./Logo";

const FLOATING_BADGES = [
  {
    name: "Shopify",
    role: "Polaris & GraphQL Apps",
    icon: ShoppingBag,
    color: "from-emerald-400 to-teal-500",
    shadow: "shadow-emerald-500/20",
    pos: "top-2 left-2 sm:-top-4 sm:-left-6",
    delay: 0.1,
  },
  {
    name: "WhatsApp",
    role: "Cloud API Automation",
    icon: MessageSquare,
    color: "from-green-400 to-emerald-600",
    shadow: "shadow-green-500/20",
    pos: "top-4 right-2 sm:-top-2 sm:-right-8",
    delay: 0.2,
  },
  {
    name: "Laravel",
    role: "High-Throughput Backends",
    icon: Server,
    color: "from-red-400 to-rose-600",
    shadow: "shadow-rose-500/20",
    pos: "bottom-16 -left-2 sm:bottom-12 sm:-left-10",
    delay: 0.3,
  },
  {
    name: "Meta APIs",
    role: "Webhooks & Ad Sync",
    icon: Share2,
    color: "from-blue-400 to-indigo-600",
    shadow: "shadow-blue-500/20",
    pos: "bottom-20 -right-2 sm:bottom-14 sm:-right-8",
    delay: 0.4,
  },
  {
    name: "WordPress",
    role: "Custom Plugin Engines",
    icon: Globe,
    color: "from-cyan-400 to-blue-500",
    shadow: "shadow-cyan-500/20",
    pos: "-bottom-6 left-1/2 -translate-x-1/2",
    delay: 0.5,
  },
];

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-grid-pattern">
      {/* Background ambient gradient orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[500px] bg-gradient-to-tr from-teal-500/15 via-cyan-500/10 to-purple-600/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Top Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300 text-xs sm:text-sm font-semibold mb-8 backdrop-blur-md shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-teal-500 animate-spin-slow" />
            <span>Next-Generation Architecture & Full-Stack Automation</span>
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-ping" />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6 text-balance"
          >
            Engineered Solutions for Modern{" "}
            <span className="bg-gradient-to-r from-teal-500 via-cyan-500 to-purple-600 bg-clip-text text-transparent">
              E-Commerce & Web Platforms.
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-normal leading-relaxed mb-10 max-w-3xl mx-auto text-balance"
          >
            We build scalable plugins, custom applications, and automated workflows across{" "}
            <strong className="text-slate-900 dark:text-white font-semibold">Shopify</strong>,{" "}
            <strong className="text-slate-900 dark:text-white font-semibold">WordPress</strong>,{" "}
            <strong className="text-slate-900 dark:text-white font-semibold">Laravel</strong>, and{" "}
            <strong className="text-slate-900 dark:text-white font-semibold">Meta APIs</strong>.
          </motion.p>

          {/* Dual CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-16"
          >
            {/* Primary Gradient Button */}
            <Link
              href="#products"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-teal-500 via-cyan-500 to-purple-600 hover:from-teal-600 hover:via-cyan-600 hover:to-purple-700 text-white font-bold text-base shadow-xl shadow-teal-500/25 hover:shadow-teal-500/40 hover:-translate-y-0.5 transition-all duration-200 group"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            {/* Secondary Outlined Button */}
            <Link
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border-2 border-slate-300 dark:border-slate-700 hover:border-teal-500 dark:hover:border-teal-400 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md text-slate-800 dark:text-slate-200 hover:text-teal-600 dark:hover:text-cyan-300 font-semibold text-base shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Get In Touch</span>
              <Zap className="w-4 h-4 text-amber-500" />
            </Link>
          </motion.div>

          {/* Live Trust Metrics */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto pt-4 border-t border-slate-200/60 dark:border-slate-800/60"
          >
            <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">99.99%</span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Uptime Guarantee</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
                &lt;85ms
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">API Latency</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">10M+</span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Monthly Webhooks</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
                24/7
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Engineering SLA</span>
            </div>
          </motion.div>
        </div>

        {/* Visual Graphic: Animated Interactive Glass Card with FlowRadix Loop & Floating Badges */}
        <div className="mt-16 sm:mt-24 max-w-4xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative rounded-3xl p-6 sm:p-12 backdrop-blur-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-2xl shadow-teal-500/10 dark:shadow-purple-950/30 overflow-visible"
          >
            {/* Ambient inner gradient ring */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-teal-500/5 via-cyan-500/5 to-purple-500/5 pointer-events-none" />

            {/* Central FlowRadix Hub */}
            <div className="flex flex-col items-center justify-center text-center py-10 sm:py-16 relative z-10">
              <div className="relative mb-6">
                {/* Orbit rings */}
                <div className="absolute -inset-10 rounded-full border border-dashed border-teal-500/20 dark:border-cyan-500/20 animate-spin-slow pointer-events-none" />
                <div className="absolute -inset-20 rounded-full border border-slate-200/50 dark:border-slate-800/50 pointer-events-none hidden sm:block" />

                {/* Central Brand Emblem */}
                <div className="relative p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-950/80 border border-slate-200 dark:border-slate-700/80 shadow-2xl backdrop-blur-xl">
                  <Logo size="xl" showText={false} />
                </div>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                FlowRadix Central Automation Core
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md">
                Continuous bidirectional data flow bridging e-commerce storefronts, cloud databases, and meta messaging networks.
              </p>

              {/* Status Ticker */}
              <div className="mt-5 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>All Microservices & Webhook Dispatchers Operational</span>
              </div>
            </div>

            {/* Floating Platform Badges */}
            {FLOATING_BADGES.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <motion.div
                  key={badge.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: badge.delay }}
                  className={`absolute ${badge.pos} z-20`}
                >
                  <div
                    className={`flex items-center gap-3 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-2xl backdrop-blur-xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-700/80 shadow-lg ${badge.shadow} hover:scale-105 transition-all duration-300 cursor-default`}
                  >
                    <div
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr ${badge.color} flex items-center justify-center text-white shadow-sm flex-shrink-0`}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                        <span>{badge.name}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                      </div>
                      <div className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">
                        {badge.role}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
