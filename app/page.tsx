import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProductsShowcase } from "@/components/ProductsShowcase";
import { CoreServices } from "@/components/CoreServices";
import { EcosystemMarquee } from "@/components/EcosystemMarquee";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden">
      {/* Sticky Glassmorphic Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section with Framer Motion Glass Card & Floating Badges */}
        <Hero />

        {/* Products Showcase: ChatRadix (chatradix.com) + Custom Plugin Suite */}
        <ProductsShowcase />

        {/* Core Specialized Services Grid */}
        <CoreServices />

        {/* Integration Ecosystem Infinite Marquee */}
        <EcosystemMarquee />

        {/* Technical Architecture & Standards */}
        <WhyChooseUs />

        {/* "GET IN TOUCH" Lead Generation & Interactive Form */}
        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
