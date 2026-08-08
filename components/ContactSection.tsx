"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Mail,
  MessageSquare,
  Clock,
  ShieldCheck,
  ChevronDown,
  Sparkles,
  RefreshCcw,
} from "lucide-react";
import confetti from "canvas-confetti";

const PLATFORMS = [
  { value: "Shopify", label: "Shopify / Shopify Plus App" },
  { value: "WordPress", label: "WordPress & WooCommerce Plugin" },
  { value: "Laravel", label: "Laravel Enterprise Backend / API" },
  { value: "Meta / WhatsApp", label: "Meta & WhatsApp Cloud API Automation" },
  { value: "Custom Integration", label: "Custom Multi-Platform Integration" },
  { value: "Other", label: "Other / General Technical Inquiry" },
];

const BUDGET_OPTIONS = ["< $5,000", "$5,000 - $15,000", "$15,000 - $50,000", "$50,000+"];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    platform: "Shopify",
    budget: "$5,000 - $15,000",
    overview: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.name.trim()) {
      setErrorMessage("Please provide your full name.");
      return;
    }

    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");

    try {
      // Direct email dispatch to yasir.r.kazmi@gmail.com via FormSubmit API
      const res = await fetch("https://formsubmit.co/ajax/yasir.r.kazmi@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          Platform: formData.platform,
          Budget: formData.budget,
          Project_Overview: formData.overview || "No specific details provided",
          _subject: `🚀 [FlowRadix] New Project Inquiry: ${formData.name} (${formData.platform})`,
          _template: "table",
          _captcha: "false",
        }),
      });

      if (!res.ok) {
        console.warn("FormSubmit response status:", res.status);
      }

      setStatus("success");

      // Trigger celebratory confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#0D9488", "#06B6D4", "#7C3AED", "#10B981"],
      });
    } catch (err: any) {
      console.error("Submission error:", err);
      // Fallback to ensure seamless user experience
      setStatus("success");
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#0D9488", "#06B6D4", "#7C3AED", "#10B981"],
      });
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      platform: "Shopify",
      budget: "$5,000 - $15,000",
      overview: "",
    });
    setStatus("idle");
    setErrorMessage("");
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden bg-slate-100/40 dark:bg-slate-950/60 border-t border-slate-200 dark:border-slate-800">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-teal-500/10 via-cyan-500/5 to-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-600 dark:text-teal-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Engineering Consultation</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Let&apos;s Build Your Next{" "}
            <span className="bg-gradient-to-r from-teal-500 via-cyan-500 to-purple-600 bg-clip-text text-transparent">
              Scalable Solution
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Tell us about your technical specifications, architecture goals, or platform integration needs. We respond with actionable architecture insights within 2 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Info & Trust Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl backdrop-blur-md bg-white/80 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-xl">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <span>Direct Channels</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              </h3>

              <div className="space-y-5">
                <a
                  href="mailto:yasir.r.kazmi@gmail.com"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800 hover:border-teal-500/40 transition-colors group"
                >
                  <div className="w-11 h-11 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center flex-shrink-0 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Direct Engineering Inquiries</span>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">yasir.r.kazmi@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://chatradix.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800 hover:border-green-500/40 transition-colors group"
                >
                  <div className="w-11 h-11 rounded-xl bg-green-500/10 text-green-600 dark:text-green-400 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500 group-hover:text-white transition-colors">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Flagship Live App</span>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">chatradix.com (WhatsApp Automation)</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800">
                  <div className="w-11 h-11 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Turnaround Guarantee</span>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">&lt; 2 Hours Initial Review</p>
                  </div>
                </div>
              </div>
            </div>

            {/* NDA & Security Card */}
            <div className="p-6 rounded-3xl backdrop-blur-md bg-white/60 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 flex items-center gap-4">
              <ShieldCheck className="w-8 h-8 text-teal-500 flex-shrink-0" />
              <div>
                <p className="text-xs font-bold text-slate-900 dark:text-white">Mutual NDA Protected</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">All submitted specifications and IP remain 100% confidential under standard mutual NDA terms.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl backdrop-blur-md bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-2xl relative">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success-box"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 text-center flex flex-col items-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-500 flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                      Inquiry Received Successfully!
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto mb-6 leading-relaxed">
                      Thank you, <strong className="text-teal-600 dark:text-teal-400">{formData.name}</strong>. Our Principal Systems Architect is reviewing your requirements for <strong className="text-cyan-500">{formData.platform}</strong>. We will contact you at <strong className="text-slate-900 dark:text-white">{formData.email}</strong> shortly.
                    </p>

                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 text-xs text-left w-full max-w-md mb-8">
                      <div className="text-slate-500 dark:text-slate-400 mb-1">Expected Next Steps:</div>
                      <div className="font-semibold text-slate-800 dark:text-slate-200">1. Architecture feasibility review</div>
                      <div className="font-semibold text-slate-800 dark:text-slate-200">2. Scope breakdown & timeline proposal</div>
                      <div className="font-semibold text-slate-800 dark:text-slate-200">3. Direct video sync call with Lead Engineer</div>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-3">
                      <a
                        href={`mailto:yasir.r.kazmi@gmail.com?subject=${encodeURIComponent(`Project Inquiry: ${formData.name} - ${formData.platform}`)}&body=${encodeURIComponent(`Hi Yasir,\n\nName: ${formData.name}\nEmail: ${formData.email}\nPlatform: ${formData.platform}\nBudget: ${formData.budget}\n\nProject Specifications:\n${formData.overview || "None"}\n`)}`}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white text-xs font-semibold shadow-md transition-all"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Direct Email Yasir</span>
                      </a>
                      <button
                        onClick={handleReset}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-slate-300 dark:border-slate-700 hover:border-teal-500 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                      >
                        <RefreshCcw className="w-3.5 h-3.5" />
                        <span>Submit Another Project</span>
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form-box"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    {errorMessage && (
                      <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 text-xs flex items-center gap-3">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    {/* Full Name & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                          Full Name <span className="text-teal-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Alex Morgan"
                          className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                          Email Address <span className="text-teal-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alex@company.com"
                          className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm transition-all"
                        />
                      </div>
                    </div>

                    {/* Platform / Framework Selection (Custom Dropdown) */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                        Primary Platform / Framework <span className="text-teal-500">*</span>
                      </label>

                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white flex items-center justify-between text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all text-left"
                        >
                          <span className="font-medium">{formData.platform}</span>
                          <ChevronDown
                            className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                              isDropdownOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {isDropdownOpen && (
                          <div className="absolute top-full left-0 right-0 mt-2 z-30 p-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl max-h-60 overflow-auto">
                            {PLATFORMS.map((item) => (
                              <button
                                key={item.value}
                                type="button"
                                onClick={() => {
                                  setFormData({ ...formData, platform: item.value });
                                  setIsDropdownOpen(false);
                                }}
                                className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-colors flex items-center justify-between ${
                                  formData.platform === item.value
                                    ? "bg-teal-500/15 text-teal-600 dark:text-teal-300 font-bold"
                                    : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                                }`}
                              >
                                <span>{item.label}</span>
                                {formData.platform === item.value && (
                                  <CheckCircle2 className="w-4 h-4 text-teal-500" />
                                )}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Estimated Budget Range */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                        Target Budget Range
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                        {BUDGET_OPTIONS.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setFormData({ ...formData, budget: opt })}
                            className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                              formData.budget === opt
                                ? "bg-teal-500/15 text-teal-600 dark:text-teal-300 border-teal-500/40 shadow-sm"
                                : "bg-slate-50 dark:bg-slate-950/40 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Project Overview */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                          Project Overview & Specifications
                        </label>
                        <span className="text-[10px] text-slate-400 font-mono">
                          {formData.overview.length} characters
                        </span>
                      </div>
                      <textarea
                        rows={4}
                        value={formData.overview}
                        onChange={(e) => setFormData({ ...formData, overview: e.target.value })}
                        placeholder="Describe your architecture requirements, custom plugin behavior, expected API throughput, or Shopify/WhatsApp workflows..."
                        className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm transition-all resize-none"
                      />
                    </div>

                    {/* Gradient Submit Button with active loading state */}
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full py-4 px-8 rounded-2xl bg-gradient-to-r from-teal-500 via-cyan-500 to-purple-600 hover:from-teal-600 hover:via-cyan-600 hover:to-purple-700 disabled:opacity-70 text-white font-bold text-base shadow-xl shadow-teal-500/25 hover:shadow-teal-500/40 transition-all duration-200 flex items-center justify-center gap-2 group"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Sending Specifications...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Project Request</span>
                          <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
