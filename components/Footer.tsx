"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Github, Twitter, Linkedin, MessageSquare, ExternalLink, Shield, Code, Heart } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/80 pt-16 pb-12 text-slate-600 dark:text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Col 1 & 2: Brand & Company Summary */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="md" />
            <p className="text-sm leading-relaxed max-w-sm text-slate-600 dark:text-slate-400">
              FlowRadix engineers high-scale e-commerce plugins, headless architectures, and automated Meta/WhatsApp conversational pipelines for modern global brands.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="FlowRadix GitHub"
                className="w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-teal-500 hover:border-teal-500/40 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="FlowRadix Twitter/X"
                className="w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-cyan-400 hover:border-cyan-400/40 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="FlowRadix LinkedIn"
                className="w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-blue-500 hover:border-blue-500/40 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://chatradix.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ChatRadix WhatsApp System"
                className="w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-green-500 hover:border-green-500/40 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="#products" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  Flagship Products
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  Engineering Services
                </Link>
              </li>
              <li>
                <Link href="#ecosystem" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  Integration Ecosystem
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  Technical Standard
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  Request Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Product Ecosystem */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider mb-4">
              Product Ecosystem
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://chatradix.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-teal-600 dark:text-teal-400 font-semibold hover:underline"
                >
                  <span>ChatRadix (Live)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <span className="text-slate-500 dark:text-slate-500">Shopify Polaris Bridge</span>
              </li>
              <li>
                <span className="text-slate-500 dark:text-slate-500">WooCommerce High-Scale Sync</span>
              </li>
              <li>
                <span className="text-slate-500 dark:text-slate-500">Laravel GraphQL Engine</span>
              </li>
              <li>
                <span className="text-slate-500 dark:text-slate-500">Meta Webhook Ingestor</span>
              </li>
            </ul>
          </div>

          {/* Col 5: Security & Status */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider mb-4">
              System Telemetry
            </h4>
            <div className="space-y-3">
              <div className="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs">
                <div className="flex items-center gap-2 text-emerald-500 font-bold mb-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Systems Normal</span>
                </div>
                <div className="text-slate-500 dark:text-slate-400 text-[11px]">Webhook Latency: 42ms avg</div>
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-teal-500" />
                <span>HMAC Encrypted Ingestion</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} FlowRadix (flowradix.com). All rights reserved. Engineered with precision.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:border-teal-500 hover:text-teal-500 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
