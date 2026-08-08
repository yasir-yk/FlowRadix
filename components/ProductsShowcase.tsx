"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ExternalLink,
  MessageSquare,
  ShoppingCart,
  RefreshCw,
  Zap,
  CheckCircle2,
  Cpu,
  Layers,
  ArrowRight,
  ShieldCheck,
  Bell,
  Code2,
  Sparkles,
} from "lucide-react";

export function ProductsShowcase() {
  return (
    <section id="products" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-600 dark:text-teal-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proprietary Ecosystem</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-5">
            Flagship Software &{" "}
            <span className="bg-gradient-to-r from-teal-500 via-cyan-500 to-purple-600 bg-clip-text text-transparent">
              Engineered Product Suite
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Battle-tested platforms built to automate conversational commerce and bridge enterprise e-commerce systems with zero-latency synchronization.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Card 1: ChatRadix (Flagship WhatsApp/Meta Automation) - 7 cols */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-between rounded-3xl p-6 sm:p-10 backdrop-blur-md bg-white/90 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl hover:border-teal-500/50 transition-all duration-300 relative group overflow-hidden"
          >
            {/* Top Accent Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-teal-500 via-cyan-400 to-emerald-500" />

            <div>
              {/* Product Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-teal-500 to-emerald-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/20">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">ChatRadix</h3>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                        FLAGSHIP PRODUCT
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">chatradix.com</p>
                  </div>
                </div>

                {/* Direct Link Button */}
                <a
                  href="https://chatradix.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-teal-500/10 dark:bg-teal-500/20 text-teal-700 dark:text-teal-300 hover:bg-teal-500 hover:text-white dark:hover:bg-teal-500 font-semibold text-xs transition-all duration-200 shadow-sm group/btn"
                >
                  <span>Visit ChatRadix</span>
                  <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>
              </div>

              {/* Core Description */}
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                The ultimate conversational commerce engine. Seamlessly connects your <strong>Shopify</strong> store to <strong>WhatsApp Cloud API</strong> & <strong>Meta Messenger</strong> for instant order fulfillment alerts, automated abandoned cart recovery, and two-way CRM messaging.
              </p>

              {/* Key Features Bullet List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  "Automated WhatsApp & Meta Order Confirmation",
                  "Smart Abandoned Cart Recovery (Up to 34% Re-engagement)",
                  "Real-Time Shopify CRM & Inventory Bidirectional Sync",
                  "Official Meta Business API Approved Templates",
                  "Instant Shipping & Tracking Updates via WhatsApp",
                  "Zero Code Integration with Shopify App Store Bridge",
                ].map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">{feat}</span>
                  </div>
                ))}
              </div>

              {/* Interactive Mock Preview Box */}
              <div className="rounded-2xl p-4 sm:p-5 bg-slate-100/90 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800/80 text-xs font-mono mb-6">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>ChatRadix Live Pipeline</span>
                  </div>
                  <span className="text-[10px]">Shopify ⇄ WhatsApp API</span>
                </div>

                <div className="pt-3 space-y-2 text-slate-700 dark:text-slate-300">
                  <div className="flex items-center justify-between bg-white dark:bg-slate-900/90 p-2 rounded-lg border border-slate-200/60 dark:border-slate-800">
                    <div className="flex items-center gap-2">
                      <ShoppingCart className="w-3.5 h-3.5 text-teal-500" />
                      <span>Webhook Received: Order #10842 (Shopify)</span>
                    </div>
                    <span className="text-[10px] text-emerald-500 font-bold">200 OK (38ms)</span>
                  </div>
                  <div className="flex items-center justify-between bg-white dark:bg-slate-900/90 p-2 rounded-lg border border-slate-200/60 dark:border-slate-800">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-3.5 h-3.5 text-green-500" />
                      <span>Dispatched WhatsApp Template: &apos;order_confirmed&apos;</span>
                    </div>
                    <span className="text-[10px] text-cyan-400 font-bold">Delivered</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct CTA Link */}
            <div className="pt-2">
              <a
                href="https://chatradix.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white font-bold text-sm shadow-lg shadow-teal-500/25 transition-all group/btn"
              >
                <span>Launch ChatRadix.com</span>
                <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>
            </div>
          </motion.div>

          {/* Card 2: Custom Framework Plugins & Connectors - 5 cols */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col justify-between rounded-3xl p-6 sm:p-10 backdrop-blur-md bg-white/90 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl hover:border-purple-500/50 transition-all duration-300 relative group overflow-hidden"
          >
            {/* Top Accent Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500" />

            <div>
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-purple-500/20">
                  <Code2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Plugin Suite</h3>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-purple-500/15 text-purple-600 dark:text-purple-400 border border-purple-500/30">
                      BESPOKE CONNECTORS
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">WordPress • WooCommerce • Laravel</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                High-performance extensions engineered for mission-critical e-commerce operations. We bridge legacy databases with modern headless frontends and third-party APIs.
              </p>

              {/* Capabilities */}
              <div className="space-y-3 mb-8">
                {[
                  {
                    title: "WooCommerce High-Scale Sync",
                    desc: "Custom inventory connectors handling 100k+ SKU updates per hour.",
                  },
                  {
                    title: "Laravel Headless Commerce Bridges",
                    desc: "Ultra-fast REST & GraphQL microservices with Redis caching.",
                  },
                  {
                    title: "WordPress Enterprise Custom Plugins",
                    desc: "Bespoke security, payment gateways, and custom workflow automations.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800"
                  >
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <Zap className="w-3.5 h-3.5 text-purple-500" />
                      <span>{item.title}</span>
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-2">
              <Link
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold text-sm shadow-lg shadow-purple-500/25 transition-all group/btn"
              >
                <span>Request Custom Plugin Build</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
