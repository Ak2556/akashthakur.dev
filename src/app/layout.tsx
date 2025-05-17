import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/global/Navbar';
import Footer from '@/components/Footer';
import { ReactNode } from 'react';

// --- Font setup
const inter = Inter({ subsets: ['latin'] });

// --- Metadata for SEO
export const metadata: Metadata = {
  title: 'Akash Thakur | Portfolio',
  description: 'Full Stack Developer. Terminal-first. Cinematic Design. SaaS Builder.',
  keywords: [
    "Akash Thakur",
    "Full Stack Developer",
    "SaaS",
    "Portfolio",
    "React",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "AI Developer",
    "India"
  ],
  openGraph: {
    title: 'Akash Thakur | Portfolio',
    description: 'Cinematic, terminal-first SaaS portfolio built for impact.',
    url: 'https://akashthakur.dev',
    type: 'website',
  },
  twitter: {
    card: "summary_large_image",
    title: "Akash Thakur | Portfolio",
    description: "Full Stack Developer. Terminal-first. Cinematic Design. SaaS Builder.",
  }
};

// --- SVG Cinematic Background ---
function SVGBackground() {
  return (
    <svg
      aria-hidden="true"
      className="fixed inset-0 w-full h-full z-0 pointer-events-none select-none"
      style={{ opacity: 0.12 }}
    >
      <defs>
        <radialGradient id="bg1" cx="50%" cy="50%" r="80%" fx="45%" fy="48%">
          <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.38" />
          <stop offset="100%" stopColor="#000" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="800" cy="400" r="480" fill="url(#bg1)" />
      <circle cx="250" cy="120" r="110" fill="#2563eb" opacity="0.13" />
      <circle cx="1200" cy="650" r="90" fill="#64748b" opacity="0.09" />
    </svg>
  );
}

// --- Layout Component ---
export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Skip-to-content for accessibility */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} bg-black text-white antialiased relative`}>
        <a
          href="#main-content"
          className="absolute left-2 top-2 z-50 px-4 py-2 bg-blue-900 text-white rounded transition transform -translate-y-16 focus:translate-y-0 focus:outline-none focus:ring"
          tabIndex={0}
        >
          Skip to content
        </a>
        <SVGBackground />
        <Navbar />
        <main
          id="main-content"
          className="min-h-screen flex flex-col justify-between relative z-10"
          tabIndex={-1}
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}