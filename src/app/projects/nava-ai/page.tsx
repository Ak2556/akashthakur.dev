'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { SiGithub } from 'react-icons/si';
import { FaChevronDown } from 'react-icons/fa';

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.8, delayChildren: 0.4 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 30, damping: 24, duration: 1.1 }
  }
};

export default function NavaAIPage() {
  const heroRef = useRef(null);

  return (
    <motion.main
      className="relative min-h-screen px-6 py-20 bg-black text-white flex flex-col items-center overflow-x-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {/* Hero Glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.98 }}
        transition={{ duration: 2.4, ease: 'easeInOut' }}
      >
        <motion.div
          className="absolute left-1/2 top-0 -translate-x-1/2 w-[75vw] h-[60vh] rounded-full"
          style={{
            background: 'radial-gradient(circle at 50% 20%,rgba(0,190,255,0.12),rgba(0,0,0,0.99) 90%)',
            filter: 'blur(60px)'
          }}
          initial={{ scale: 1.22, opacity: 0.19 }}
          animate={{ scale: 1, opacity: 0.62 }}
          transition={{ duration: 3.1, delay: 0.6, type: 'spring' }}
        />
      </motion.div>

      {/* Cinematic Hero */}
      <header className="relative text-center max-w-3xl z-10" ref={heroRef}>
        <motion.h1
          className="text-[clamp(2.9rem,7vw,5rem)] font-extrabold mb-4 drop-shadow-[0_6px_32px_rgba(0,190,255,0.12)]"
          variants={itemVariants}
          whileHover={{
            textShadow: "0px 0px 64px #3cf3ff, 0px 0px 34px #0ff",
            color: "#3cf3ff"
          }}
          transition={{ type: 'spring', stiffness: 120, damping: 12 }}
        >
          NAVA‑AI
        </motion.h1>
        <motion.h2
          className="text-2xl md:text-3xl text-cyan-200 font-semibold mb-7"
          variants={itemVariants}
        >
          The next evolution of AI SaaS: Memory. Speed. True usability.
        </motion.h2>
        <motion.p
          className="text-xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed font-medium"
          variants={itemVariants}
        >
          <span className="text-cyan-300 font-bold">NAVA-AI</span> is your AI digital co-founder—built to empower solopreneurs, founders, and engineers to do more with less noise and *more results*. <br /><br />
          Not just a chatbot: a launchpad for idea validation, memory, and automated weekly AI dashboards. Powered by FastAPI, OpenRouter, and next-level UX.
        </motion.p>
        {/* Callout */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 1.1 }}
        >
          <span className="inline-block px-4 py-2 rounded-lg bg-cyan-600/80 text-white font-semibold tracking-wide text-lg shadow-lg animate-pulse border border-cyan-400/30">
            “Build smarter. Launch faster. Never lose context again.”
          </span>
        </motion.div>
        {/* Down Arrow */}
        <motion.div
          className="mt-10 flex justify-center"
          variants={itemVariants}
        >
          <motion.button
            aria-label="Scroll for details"
            className="rounded-full p-3 bg-white/10 hover:bg-cyan-500/40 transition"
            whileHover={{
              y: -10,
              boxShadow: "0 0 24px #3cf3ff"
            }}
            animate={{
              y: [0, 12, 0],
              boxShadow: ["0 0 0px #3cf3ff", "0 0 24px #3cf3ff", "0 0 0px #3cf3ff"]
            }}
            transition={{ duration: 2.2, repeat: Infinity }}
            onClick={() => {
              const section = document.getElementById('details');
              section?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <FaChevronDown className="h-7 w-7 text-cyan-200" />
          </motion.button>
        </motion.div>
      </header>

      {/* Divider */}
      <motion.div
        className="w-full max-w-2xl h-[2px] bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent my-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.6, delay: 1.6, ease: 'easeInOut' }}
      />

      {/* Details */}
      <motion.section
        id="details"
        className="max-w-2xl text-left space-y-14 mb-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Tech Stack */}
        <motion.div
          className="flex flex-wrap gap-3"
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {['FastAPI', 'OpenRouter', 'Next.js', 'ChromaDB', 'TypeScript'].map((tag) => (
            <motion.span
              key={tag}
              className="bg-cyan-700/40 text-white text-sm px-3 py-1 rounded-full border border-cyan-300/30 font-bold shadow-md"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.37 + Math.random() * 0.13, duration: 0.9 }}
            >
              #{tag}
            </motion.span>
          ))}
        </motion.div>

        {/* Why NAVA-AI Exists */}
        <motion.div variants={itemVariants}>
          <motion.h3
            className="text-2xl font-bold mb-3 text-cyan-300"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 1.2, type: 'spring' }}
          >
            Why NAVA-AI?
          </motion.h3>
          <motion.p className="text-white/90 mb-4 text-lg">
            Too many AI tools talk. NAVA-AI remembers.<br/>
            <b>Forget shallow chatbots.</b> This is an always-on, memory-aware AI—tailored for your actual workflow.<br/>
            I built NAVA-AI for everyone who wants to move faster than their competition, use AI as a real *co-founder*, and never lose context, ideas, or momentum again.
            <br />
            <span className="text-cyan-400">If you want real results, you want memory. If you want to ship, you want NAVA-AI.</span>
          </motion.p>
        </motion.div>

        {/* What Sets NAVA-AI Apart */}
        <motion.div variants={itemVariants}>
          <motion.h3
            className="text-2xl font-bold mb-3 text-cyan-200"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 1.1, type: 'spring' }}
          >
            What Sets NAVA-AI Apart
          </motion.h3>
          <motion.ul className="list-inside text-white/80 space-y-2">
            <motion.li>
              <span className="mr-1">🧠</span>
              <b>Real Memory:</b> Remembers your context, goals, and ideas—session after session.
            </motion.li>
            <motion.li>
              <span className="mr-1">⚡</span>
              <b>Blazing FastAPI:</b> Python backend, battle-tested infra, ready for scale.
            </motion.li>
            <motion.li>
              <span className="mr-1">🔐</span>
              <b>Private & Secure:</b> Your data, your logic—no data mining.
            </motion.li>
            <motion.li>
              <span className="mr-1">🎯</span>
              <b>Persona Switching:</b> Different AI “modes” for different jobs—coming soon.
            </motion.li>
            <motion.li>
              <span className="mr-1">🚀</span>
              <b>Public Code.</b> Audit, fork, and contribute.
            </motion.li>
          </motion.ul>
        </motion.div>

        {/* Challenge Line */}
        <motion.div
          className="rounded-xl bg-cyan-950/70 border border-cyan-500/30 p-6 my-8 shadow-xl text-center"
          initial={{ opacity: 0, scale: 0.8, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 1.2, type: 'spring' }}
        >
          <span className="text-cyan-300 font-semibold text-lg">
            Think your workflow can’t get any faster?  
            <span className="text-white/80 block">NAVA-AI is about to prove you wrong.</span>
          </span>
        </motion.div>
      </motion.section>

      {/* --- FINAL ULTRA ENGAGING CTA SECTION --- */}
      <motion.div
        className="flex flex-col items-center gap-10 my-20"
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.1, type: "spring", delay: 0.2 }}
      >
        {/* Animated Sparkles */}
        <motion.div
          className="flex justify-center items-center mb-4"
          initial={{ scale: 0.8, opacity: 0.2 }}
          animate={{ scale: [0.8, 1.2, 1], opacity: [0.2, 1, 0.85], rotate: [0, 12, -10, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, repeatType: "mirror", delay: 0.6 }}
        >
          <span className="text-4xl">✨🤖✨</span>
        </motion.div>

        {/* GitHub Only CTA */}
        <motion.div
          className="bg-gradient-to-r from-cyan-900 via-cyan-950 to-cyan-900 rounded-2xl px-8 py-8 shadow-xl max-w-2xl border-2 border-cyan-400/20 text-center"
          initial={{ scale: 0.92, opacity: 0.7 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, type: "spring" }}
        >
          <div className="text-2xl font-bold mb-2 text-cyan-200 animate-pulse">
            Ready to build with real AI?  
          </div>
          <div className="text-lg text-white/90 mb-7">
            For founders, indie devs, and teams who want to move at AI speed.  
            <span className="block mt-2 text-cyan-200 font-semibold">
              <a href="mailto:youremail@example.com" className="underline hover:text-cyan-100 transition">Let’s build something legendary.</a>
            </span>
          </div>
          <div className="flex items-center justify-center mt-2">
            <motion.a
              href="https://github.com/ak2556/nava-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 text-lg font-semibold rounded-xl shadow-lg bg-gradient-to-br from-white to-cyan-100 text-black border border-black/10 hover:scale-105 hover:shadow-xl transition-all duration-200"
              whileHover={{ scale: 1.09, boxShadow: "0 0 36px #9cf8" }}
              whileTap={{ scale: 0.96 }}
            >
              <SiGithub className="h-6 w-6 mr-2" />
              Star on GitHub
            </motion.a>
          </div>
          {/* FOMO: Coming soon live demo */}
          <motion.div
            className="mt-4 text-base text-cyan-300 flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.5 }}
          >
            <span className="italic">Live demo coming soon. Watch this space.</span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Cinematic glass orb */}
      <motion.div
        className="fixed bottom-10 left-10 w-20 h-20 rounded-full bg-gradient-to-br from-cyan-400/40 via-white/10 to-black/60 blur-2xl opacity-40 pointer-events-none"
        animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Top-right glass dot */}
      <motion.div
        className="fixed top-8 right-16 w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-300/30 to-white/10 blur-xl opacity-30 pointer-events-none"
        animate={{ x: [0, -12, 0], y: [0, 10, 0] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.main>
  );
}