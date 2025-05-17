'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
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

export default function EmpireAPIPage() {
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
        animate={{ opacity: 0.92 }}
        transition={{ duration: 2.2, ease: 'easeInOut' }}
      >
        <motion.div
          className="absolute left-1/2 top-0 -translate-x-1/2 w-[60vw] h-[50vh] rounded-full"
          style={{
            background: 'radial-gradient(circle at 50% 20%,rgba(70,150,255,0.19),rgba(0,0,0,0.92) 90%)',
            filter: 'blur(36px)'
          }}
          initial={{ scale: 1.1, opacity: 0.22 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 3.1, delay: 0.4, type: 'spring' }}
        />
      </motion.div>

      {/* Header */}
      <header className="relative text-center max-w-3xl z-10" ref={heroRef}>
        <motion.h1
          className="text-[clamp(2.7rem,6vw,4.5rem)] font-extrabold mb-3 drop-shadow-[0_6px_32px_rgba(70,150,255,0.15)]"
          variants={itemVariants}
          whileHover={{
            textShadow: "0px 0px 44px #46aaff, 0px 0px 20px #fff",
            color: "#46aaff"
          }}
          transition={{ type: 'spring', stiffness: 120, damping: 12 }}
        >
          Empire_API
        </motion.h1>
        <motion.h2
          className="text-2xl md:text-3xl text-blue-200 font-semibold mb-6"
          variants={itemVariants}
        >
          Build <span className="text-blue-400">real</span> products. Ship faster. Sleep better.
        </motion.h2>
        <motion.p
          className="text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed font-medium"
          variants={itemVariants}
        >
          <b>Empire API</b> isn’t just “another backend starter.” It’s a founder’s secret weapon—built for solo devs and small teams who want to turn ideas into <span className="text-blue-300">revenue</span>, not rewrite authentication or debugging middleware for the 12th time.
          <br /><br />
          <span className="text-blue-400 font-semibold">Get instant JWT auth, robust MongoDB models, and a battle-tested Node/Express skeleton. Every line exists to speed up your next launch—or help you scale what you’ve already built.</span>
        </motion.p>
        {/* Callout */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 1.1 }}
        >
          <span className="inline-block px-4 py-2 rounded-lg bg-blue-500/80 text-white font-semibold tracking-wide text-lg shadow-lg animate-pulse">
            One command. One clone. One <span className="underline decoration-2">weekend</span> to MVP.
          </span>
        </motion.div>
        {/* Down Arrow */}
        <motion.div
          className="mt-10 flex justify-center"
          variants={itemVariants}
        >
          <motion.button
            aria-label="Scroll for details"
            className="rounded-full p-3 bg-white/10 hover:bg-blue-500/40 transition"
            whileHover={{
              y: -10,
              boxShadow: "0 0 24px #46aaff"
            }}
            animate={{
              y: [0, 12, 0],
              boxShadow: ["0 0 0px #46aaff", "0 0 24px #46aaff", "0 0 0px #46aaff"]
            }}
            transition={{ duration: 2.2, repeat: Infinity }}
            onClick={() => {
              const section = document.getElementById('details');
              section?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <FaChevronDown className="h-7 w-7 text-white/70" />
          </motion.button>
        </motion.div>
      </header>

      {/* Divider */}
      <motion.div
        className="w-full max-w-2xl h-[2px] bg-gradient-to-r from-transparent via-blue-300/20 to-transparent my-16"
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
          {['Node.js', 'Express', 'MongoDB', 'JWT'].map((tag) => (
            <motion.span
              key={tag}
              className="bg-blue-700/40 text-white text-sm px-3 py-1 rounded-full border border-blue-300/30 font-bold shadow-md"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.44 + Math.random() * 0.2, duration: 0.9 }}
            >
              #{tag}
            </motion.span>
          ))}
        </motion.div>

        {/* Why Empire API */}
        <motion.div variants={itemVariants}>
          <motion.h3
            className="text-2xl font-bold mb-3 text-blue-300"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 1.2, type: 'spring' }}
          >
            Why Empire API Will Change Your Shipping Speed Forever
          </motion.h3>
          <motion.p className="text-white/90 mb-4 text-lg">
            <b>No more “backend starter” déjà vu.</b> Empire API is tuned for clarity and flow, not just code reuse. <br />
            <span className="text-blue-400">Plug it in. Tweak. Launch. Iterate. Sleep.</span>
          </motion.p>
          <motion.ul className="list-disc list-inside text-white/80 space-y-2">
            <motion.li>🚀 <b>Accelerate idea-to-launch</b> with ready-to-go boilerplate and zero bloat.</motion.li>
            <motion.li>🔒 <b>Professional-grade JWT auth</b>—your users and data are safe from day one.</motion.li>
            <motion.li>🧹 <b>Zero “magic.”</b> What you see is what you get (and can debug!).</motion.li>
            <motion.li>💡 <b>Clone, ship, and outpace competitors</b>—even as a solo founder.</motion.li>
          </motion.ul>
        </motion.div>

        {/* Feature Set (Color and Icons) */}
        <motion.div variants={itemVariants}>
          <motion.h3
            className="text-2xl font-bold mb-3 text-blue-300"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 1.2, type: 'spring' }}
          >
            What You Get (And Why You&apos;ll Love It)
          </motion.h3>
          <motion.ul className="list-inside text-white/80 space-y-2">
            <motion.li>
              <span className="mr-1">⚡</span>
              <b>Plug-and-play API:</b> Works with any modern frontend—React, Next.js, Vue, mobile.
            </motion.li>
            <motion.li>
              <span className="mr-1">🔑</span>
              <b>JWT Authentication:</b> Auth, registration, password reset. It’s all there, secure and fast.
            </motion.li>
            <motion.li>
              <span className="mr-1">📦</span>
              <b>MongoDB Models:</b> Extend in seconds, optimized for analytics and growth.
            </motion.li>
            <motion.li>
              <span className="mr-1">🛡️</span>
              <b>Security-First:</b> Rate limiting, helmet, and more out of the box.
            </motion.li>
            <motion.li>
              <span className="mr-1">🌍</span>
              <b>Deploy anywhere:</b> Vercel, Render, self-host, Docker—it’s your choice.
            </motion.li>
            <motion.li>
              <span className="mr-1">🎯</span>
              <b>Developer Focused:</b> No bloat, just readable, extendable, comment-rich code.
            </motion.li>
          </motion.ul>
        </motion.div>

        {/* Challenge Line */}
        <motion.div
          className="rounded-xl bg-blue-950/70 border border-blue-500/30 p-6 my-8 shadow-xl text-center"
          initial={{ opacity: 0, scale: 0.8, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 1.2, type: 'spring' }}
        >
          <span className="text-blue-300 font-semibold text-lg">
            Think you can ship an MVP faster? Try Empire API.<br />
            <span className="text-white/80">We’ll wait.</span>
          </span>
        </motion.div>

        {/* Use Cases */}
        <motion.div variants={itemVariants}>
          <motion.h3
            className="text-2xl font-bold mb-3 text-blue-300"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 1.2, type: 'spring' }}
          >
            Where Empire API Thrives
          </motion.h3>
          <motion.ul className="list-disc list-inside text-white/80 space-y-2">
            <motion.li>
              🚀 SaaS MVPs—validate new ideas in record time.
            </motion.li>
            <motion.li>
              👥 Startup tools—build HR, CRM, or dashboards for your team.
            </motion.li>
            <motion.li>
              📱 Mobile backend—secure auth for your next mobile project.
            </motion.li>
            <motion.li>
              💡 Coding hackathons—win by skipping “setup hell.”
            </motion.li>
            <motion.li>
              🧠 Learning—understand the patterns top devs use for scalable backends.
            </motion.li>
          </motion.ul>
        </motion.div>

        {/* Insider Tip */}
        <motion.div
          className="mt-8 rounded-lg bg-blue-600/20 px-4 py-3 text-blue-200 font-semibold shadow-lg border border-blue-300/30 text-center"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1.2 }}
        >
          <span className="italic">
            <span className="font-extrabold text-blue-300">Insider tip:</span>  
            Clone Empire API for your next client project and spend the time you save on <span className="underline">features</span>, not fixing broken user sessions!
          </span>
        </motion.div>
      </motion.section>

      {/* --- ULTRA ENGAGING FINAL CALLOUT SECTION --- */}
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
          animate={{ scale: [0.8, 1.2, 1], opacity: [0.2, 1, 0.85], rotate: [0, 15, -15, 0] }}
          transition={{ duration: 2.6, repeat: Infinity, repeatType: "mirror", delay: 0.5 }}
        >
          <span className="text-4xl">✨🚀✨</span>
        </motion.div>

        {/* Direct Founder CTA */}
        <motion.div
          className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 rounded-2xl px-8 py-8 shadow-xl max-w-2xl border-2 border-blue-400/40 text-center"
          initial={{ scale: 0.92, opacity: 0.7 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, type: "spring" }}
        >
          <div className="text-2xl font-bold mb-2 text-blue-200 animate-pulse">
            🚀 Ready to build faster? Let’s connect.
          </div>
          <div className="text-lg text-white/90 mb-5">
            Empire API isn’t just code. It’s a springboard for <i>your</i> next product.<br />
            <span className="block mt-2 text-blue-300 font-semibold">
              Star the repo, clone it, or <a href="mailto:youremail@example.com" className="underline hover:text-blue-100 transition">DM me</a> for collab ideas.
            </span>
          </div>
          <motion.a
            href="https://github.com/ak2556/empire-api"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 text-lg bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-bold shadow-md transition-all duration-300 mt-2"
            whileHover={{ scale: 1.06, boxShadow: "0 0 32px #60a5fa88" }}
          >
            <svg className="h-6 w-6 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297a12 12 0 00-3.797 23.416c.6.111.82-.261.82-.577 0-.285-.01-1.04-.016-2.04-3.338.725-4.042-1.611-4.042-1.611-.547-1.389-1.334-1.759-1.334-1.759-1.09-.746.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.071 1.834 2.81 1.304 3.495.997.107-.776.418-1.305.76-1.606-2.665-.305-5.466-1.332-5.466-5.931 0-1.309.469-2.381 1.236-3.221-.125-.305-.535-1.527.116-3.182 0 0 1.008-.322 3.301 1.23A11.49 11.49 0 0112 6.844c1.021.005 2.048.138 3.008.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.655.243 2.877.12 3.182.77.84 1.235 1.912 1.235 3.221 0 4.61-2.804 5.624-5.475 5.921.43.371.814 1.104.814 2.228 0 1.609-.014 2.908-.014 3.306 0 .319.218.694.825.576A12.004 12.004 0 0012 .297"></path></svg>
            Star on GitHub
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Cinematic glass orb */}
      <motion.div
        className="fixed bottom-10 left-10 w-20 h-20 rounded-full bg-gradient-to-br from-blue-400/30 via-white/10 to-black/60 blur-2xl opacity-40 pointer-events-none"
        animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Top-right glass dot */}
      <motion.div
        className="fixed top-8 right-16 w-8 h-8 rounded-full bg-gradient-to-tr from-blue-300/30 to-white/10 blur-xl opacity-30 pointer-events-none"
        animate={{ x: [0, -12, 0], y: [0, 10, 0] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.main>
  );
}