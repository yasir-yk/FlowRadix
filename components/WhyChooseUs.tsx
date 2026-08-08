"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Cpu,
  Layers,
  Sparkles,
  Lock,
  GitBranch,
  Terminal,
  Activity,
} from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: Zap,
    title: "Sub-100ms Execution Time",
    description:
      "All API connectors and webhooks are optimized with asynchronous processing, connection pooling, and multi-region edge caches.",
  },
  {
    icon: Lock,
    title: "Military-Grade Security & HMAC",
    description:
      "Every webhook payload from Shopify, WooCommerce, and Meta is cryptographically verified with zero leakage tolerance.",
  },
  {
    icon: GitBranch,
    title: "Idempotent Webhook Pipelines",
    description:
      "Never process duplicate order events. Our distributed deduplication layer guarantees exactly-once transaction handling.",
  },
  {
    icon: Terminal,
    title: "Clean, Typed Architecture",
    description:
      "Strict TypeScript and modular Laravel service patterns mean readable codebases that your internal teams can maintain effortlessly.",
  },
  {
    icon: Activity,
    title: "Real-Time Telemetry & Health",
    description:
      "24/7 automated monitoring across all API endpoints with instant failover and automated alert dispatch.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise SLA & Direct Support",
    description:
      "Direct Slack/Discord access to senior systems engineers. No tiers, no waiting on ticket queues.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-700 dark:text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The FlowRadix Standard</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-5">
            Engineering Precision for{" "}
            <span className="bg-gradient-to-r from-teal-500 via-cyan-500 to-purple-600 bg-clip-text text-transparent">
              Mission-Critical Infrastructure
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            We don&apos;t build fragile glue-code. We engineer hardened systems designed to scale seamlessly under extreme traffic surges.
          </p>
        </div>

        {/* 6-Item Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {HIGHLIGHTS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-6 sm:p-8 rounded-3xl backdrop-blur-md bg-white/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl hover:border-teal-500/40 dark:hover:border-teal-400/40 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-teal-500/20 via-cyan-500/20 to-purple-600/20 border border-teal-500/30 flex items-center justify-center text-teal-600 dark:text-cyan-400 mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
