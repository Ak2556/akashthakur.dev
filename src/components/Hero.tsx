'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

function useTypewriter(text: string, delay = 80) {
  const [typed, setTyped] = useState('');
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTyped(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, delay);
    return () => clearInterval(interval);
  }, [text, delay]);
  return typed;
}

const trailerPhrases = ['FULL STACK', 'TERMINAL-FIRST', 'SaaS MINDSET'];

export default function Hero() {
  const heroTitle = useTypewriter('Akash Thakur', 120);
  const heroSub = useTypewriter(
    'I’m Akash Thakur — a full stack developer blending terminal-first precision with cinematic design.\nWith a passion for AI, automation, and impactful SaaS, I build experiences that move fast, feel alive, and scale effortlessly.',
    40
  );

  const [index, setIndex] = useState(0);
  useEffect(() => {
    const loop = setInterval(() => {
      setIndex((prev) => (prev + 1) % trailerPhrases.length);
    }, 3000);
    return () => clearInterval(loop);
  }, []);

  const { scrollY } = useScroll();
  const yAvatar = useTransform(scrollY, [0, 300], [0, 30]);
  const scaleAvatar = useTransform(scrollY, [0, 300], [1, 1.1]);

  return (
    <section className="max-w-5xl mx-auto text-center space-y-10 relative">
      <h1
        className="relative text-5xl md:text-7xl font-black tracking-tight leading-tight min-h-[5rem] text-white hover:before:opacity-100 before:transition-opacity before:duration-1000 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:opacity-0 before:blur-sm before:content-['']"
      >
        {heroTitle}
      </h1>

      {/* Cinematic Rotating Trailer Line */}
      <div className="h-[2rem] relative">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            className="uppercase tracking-[0.3em] text-sm md:text-lg text-white/50 font-medium absolute left-0 right-0"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.8 }}
          >
            {trailerPhrases[index]}
          </motion.p>
        </AnimatePresence>
      </div>

      <motion.h2
        className="text-lg md:text-2xl text-white/70 whitespace-pre-wrap min-h-[7rem]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.5 }}
      >
        {heroSub}
      </motion.h2>

      <motion.div
        className="flex justify-center"
        style={{ y: yAvatar, scale: scaleAvatar }}
      >
        <motion.div
          className="rounded-full overflow-hidden border-4 border-white/20 shadow-2xl w-40 h-40 md:w-56 md:h-56"
          whileHover={{ scale: 1.05, rotate: 1 }}
          transition={{ type: 'spring', stiffness: 100, damping: 10 }}
        >
          <Image
            src="/images/akash.jpg"
            alt="Akash Thakur"
            width={300}
            height={300}
            className="object-cover w-full h-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}