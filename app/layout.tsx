import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8FAFC" },
    { media: "(prefers-color-scheme: dark)", color: "#0F172A" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://flowradix.com"),
  title: {
    default: "FlowRadix — Engineered Solutions for Modern E-Commerce & Web Platforms",
    template: "%s | FlowRadix",
  },
  description:
    "We build scalable plugins, custom applications, and automated workflows across Shopify, WordPress, Laravel, and Meta APIs. Home of ChatRadix.",
  keywords: [
    "FlowRadix",
    "ChatRadix",
    "Shopify Apps",
    "WordPress Plugins",
    "WooCommerce Customization",
    "Laravel Enterprise Backend",
    "Meta Business API",
    "WhatsApp Automation",
    "GraphQL Optimization",
    "E-Commerce Automation",
    "Custom Web Applications",
  ],
  authors: [{ name: "FlowRadix Engineering", url: "https://flowradix.com" }],
  creator: "FlowRadix",
  publisher: "FlowRadix",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://flowradix.com",
    siteName: "FlowRadix",
    title: "FlowRadix — Engineered Solutions for Modern E-Commerce & Web Platforms",
    description:
      "Scalable plugins, custom applications, and automated workflows across Shopify, WordPress, Laravel, and Meta APIs.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FlowRadix — Scalable E-Commerce & Web Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FlowRadix — Engineered Solutions for Modern E-Commerce & Web Platforms",
    description:
      "Scalable plugins, custom applications, and automated workflows across Shopify, WordPress, Laravel, and Meta APIs.",
    creator: "@flowradix",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <head>
        <link rel="canonical" href="https://flowradix.com" />
      </head>
      <body className="min-h-screen font-sans bg-slate-50 dark:bg-[#0F172A] text-slate-900 dark:text-slate-100 antialiased selection:bg-teal-500 selection:text-white transition-colors duration-300">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
