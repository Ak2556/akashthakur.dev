'use client';

import { motion } from 'framer-motion';
import ScrollRevealCard from '@/components/ui/ScrollRevealCard';
import { useEffect, useState } from 'react';

const headingSentence = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const headingWord = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function About() {
  const cards = [
    {
      title: '⚙️ Stack & Tools',
      content:
        'Next.js 15, TailwindCSS, TypeScript, FastAPI, Docker, MongoDB, ChromaDB, OpenAI API, Redis.',
    },
    {
      title: '🚀 Focused Projects',
      content:
        'Nava-AI (AI Co-founder), Akash.dev (portfolio), and a 60-project code challenge for elite tech prep.',
    },
    {
      title: '🧠 Philosophy',
      content:
        'Design like Apple, build like Vercel, scale like Superhuman. Terminal-first, quality-obsessed.',
    },
    {
      title: '🎯 Mission',
      content:
        'To create hireable, scalable, AI-powered software that speaks for itself — and land $100k+ roles while doing it.',
    },
  ];

  // ✅ Typewriter effect state
  const [typedText, setTypedText] = useState('');
  const fullText =
    'I’m a full stack SaaS developer obsessed with premium software, beautiful UI/UX, and AI integration. Every project I touch is designed to be fast, intelligent, and recruiter-proof.';

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 35); // speed of typing (adjust for faster/slower)

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative overflow-hidden min-h-screen">
      {/* Parallax Background Layer */}
      <div
        className="absolute top-0 left-0 w-full h-[150vh] bg-fixed bg-cover bg-center opacity-20 z-0"
        style={{ backgroundImage: "url('/images/about-bg.jpg')" }}
      />

      {/* Foreground Content */}
      <div className="relative z-10 px-6 py-24 max-w-4xl mx-auto text-white">
        {/* Staggered Drop-In Heading */}
        <motion.div
          className="text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight flex flex-wrap"
          variants={headingSentence}
          initial="hidden"
          animate="visible"
        >
          {'Hello, I’m Akash'.split(' ').map((word, index) => (
            <motion.span
              key={index}
              className="inline-block mr-3"
              variants={headingWord}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>

        {/* Typewriter-style paragraph */}
        <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-12 max-w-2xl whitespace-pre-line">
          {typedText}
          <span className="animate-pulse text-primary">|</span>
        </p>

        {/* Scroll Reveal Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <ScrollRevealCard
              key={i}
              title={card.title}
              content={card.content}
              delay={i * 0.1}
            />
          ))}
        </div>
      </div>
    </main>
  );
}