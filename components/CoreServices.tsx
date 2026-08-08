"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  Globe,
  Server,
  MessageSquare,
  Sparkles,
  ArrowRight,
  Database,
  Shield,
  Layers,
  Zap,
  Mail,
  Workflow,
} from "lucide-react";

const SERVICES = [
  {
    id: "shopify",
    title: "Shopify App Development",
    subtitle: "Custom Apps & Polaris Architecture",
    description:
      "Full-cycle development of public and custom Shopify applications. We leverage Shopify Polaris UI, Admin GraphQL APIs, Checkout Extensions, and real-time webhook sync.",
    icon: ShoppingBag,
    color: "from-emerald-400 to-teal-600",
    badge: "Shopify Partner Standard",
    features: [
      "Shopify Polaris & React UI extensions",
      "Bulk GraphQL Query & Mutation optimization",
      "Checkout UI & Customer Account extensions",
      "Bidirectional Webhook ingestion pipelines",
    ],
  },
  {
    id: "wordpress",
    title: "WordPress & WooCommerce",
    subtitle: "Custom Plugins & Database Tuning",
    description:
      "Bespoke WordPress plugins and high-scale WooCommerce architectures. Optimized for sub-second query execution, zero bloat, and automated inventory pipelines.",
    icon: Globe,
    color: "from-cyan-400 to-blue-600",
    badge: "Enterprise WP Engineering",
    features: [
      "Custom Plugin development from scratch",
      "MySQL index & query performance tuning",
      "Automated WooCommerce order workflows",
      "Headless WP with Next.js frontends",
    ],
  },
  {
    id: "laravel",
    title: "Laravel Enterprise Solutions",
    subtitle: "REST / GraphQL & Headless Backends",
    description:
      "Scalable backend architectures built with Laravel. High-throughput REST and GraphQL APIs, multi-tenant databases, microservices, and asynchronous queue workers.",
    icon: Server,
    color: "from-red-400 to-rose-600",
    badge: "High-Throughput Backends",
    features: [
      "RESTful & GraphQL API construction",
      "Robust Redis queues & background jobs",
      "Multi-tenant SaaS database architecture",
      "Dockerized microservices & CI/CD pipelines",
    ],
  },
  {
    id: "messaging",
    title: "Messaging & Automation APIs",
    subtitle: "Meta, WhatsApp & Transactional Email",
    description:
      "Direct integration with Meta Business API, WhatsApp Cloud API, and enterprise transactional email providers (Resend, Mailtrap, SendGrid) for automated customer journeys.",
    icon: MessageSquare,
    color: "from-purple-400 to-indigo-600",
    badge: "Conversational Automation",
    features: [
      "Official WhatsApp Cloud API templates",
      "Meta Webhook ingestion & verification",
      "High-deliverability transactional emails",
      "Automated multi-channel broadcast triggers",
    ],
  },
];

export function CoreServices() {
  return (
    <section id="services" className="py-24 sm:py-32 relative">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-radial-glow pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-600 dark:text-teal-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Workflow className="w-3.5 h-3.5" />
            <span>Engineering Capabilities</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-5">
            Core Specialized{" "}
            <span className="bg-gradient-to-r from-teal-500 via-cyan-500 to-purple-600 bg-clip-text text-transparent">
              Development Services
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            From low-level database tuning to real-time conversational messaging, we build software that handles massive scale without breaking a sweat.
          </p>
        </div>

        {/* 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-3xl p-8 backdrop-blur-md bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl hover:border-teal-500/50 dark:hover:border-teal-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${service.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-1.5 group-hover:text-teal-600 dark:group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-teal-600 dark:text-cyan-400 mb-4">
                    {service.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2.5 mb-8">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <Zap className="w-3.5 h-3.5 text-teal-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer CTA */}
                <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/80">
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white group-hover:text-teal-500 dark:group-hover:text-cyan-400 transition-colors"
                  >
                    <span>Request Service Specifications</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
