'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function EmpireAPIPage() {
  const fullIntro =
    'A backend boilerplate for solo developers building serious SaaS — built with JWT, RBAC, Stripe billing, and clean MongoDB integration.';
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullIntro.slice(0, i));
      i++;
      if (i > fullIntro.length) clearInterval(interval);
    }, 45);
    return () => clearInterval(interval);
  }, []);

  const titleRef = useRef(null);
  const introRef = useRef(null);
  const techRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);

  const isTitleVisible = useInView(titleRef, { once: true, margin: '-20%' });
  const isIntroVisible = useInView(introRef, { once: true, margin: '-20%' });
  const isTechVisible = useInView(techRef, { once: true, margin: '-20%' });
  const isDescVisible = useInView(descRef, { once: true, margin: '-20%' });
  const isCTAVisible = useInView(ctaRef, { once: true, margin: '-20%' });

  const transition = { duration: 2.5, ease: [0.22, 1, 0.36, 1] };

  return (
    <main className="min-h-screen px-6 py-28 md:py-36 text-white bg-black overflow-x-hidden">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Title */}
        <motion.h1
          ref={titleRef}
          className="text-4xl md:text-6xl font-extrabold tracking-tight leading-snug"
          initial={{ opacity: 0, y: 60 }}
          animate={isTitleVisible ? { opacity: 1, y: 0 } : {}}
          transition={transition}
        >
          🔐 Empire_API
        </motion.h1>

        {/* Typewriter Intro */}
        <motion.h2
          ref={introRef}
          className="text-xl md:text-2xl text-white/70 max-w-3xl whitespace-pre-wrap min-h-[4rem]"
          initial={{ opacity: 0, y: 60 }}
          animate={isIntroVisible ? { opacity: 1, y: 0 } : {}}
          transition={transition}
        >
          {typedText}
          <span className="text-primary animate-pulse">|</span>
        </motion.h2>

        {/* Tech Stack */}
        <motion.div
          ref={techRef}
          className="flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 60 }}
          animate={isTechVisible ? { opacity: 1, y: 0 } : {}}
          transition={transition}
        >
          {['Node.js', 'Express', 'MongoDB', 'Stripe', 'JWT'].map((tag) => (
            <span
              key={tag}
              className="bg-white/10 text-white text-sm px-3 py-1 rounded-full border border-white/20 backdrop-blur-sm"
            >
              #{tag}
            </span>
          ))}
        </motion.div>

        {/* Project Description */}
        <motion.p
          ref={descRef}
          className="text-white/80 leading-relaxed max-w-3xl text-lg"
          initial={{ opacity: 0, y: 60 }}
          animate={isDescVisible ? { opacity: 1, y: 0 } : {}}
          transition={transition}
        >
          Empire_API is a lean but capable backend starter kit for SaaS products. Built solo, it handles core infrastructure like JWT-based authentication, role-level access (RBAC), Stripe billing, and clean MongoDB integration.

          While basic today, it’s architected for future teams — with clear route structures, scalable auth logic, and billing flows that can plug into any frontend. From MVPs to investor demos, Empire_API is the kind of backend that doesn’t get in your way — it quietly runs the show.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          ref={ctaRef}
          className="flex gap-4 mt-10"
          initial={{ opacity: 0, y: 60 }}
          animate={isCTAVisible ? { opacity: 1, y: 0 } : {}}
          transition={transition}
        >
          <a
            href="https://github.com/ak2556/empire-api"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-white text-black font-semibold hover:bg-white/80 transition-all duration-300"
          >
            View GitHub
          </a>
          <a
            href="https://empire-api.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full border border-white text-white hover:bg-white/10 transition-all duration-300"
          >
            Live Demo
          </a>
          <a
            href="https://hub.docker.com/u/ak2556"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-400 transition-all duration-300"
          >
            Docker Image
          </a>
        </motion.div>
      </div>
    </main>
  );
}