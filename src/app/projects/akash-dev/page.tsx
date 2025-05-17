'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { SiGithub, SiVercel } from 'react-icons/si';
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

export default function AkashDevPage() {
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
        animate={{ opacity: 0.97 }}
        transition={{ duration: 2.4, ease: 'easeInOut' }}
      >
        <motion.div
          className="absolute left-1/2 top-0 -translate-x-1/2 w-[70vw] h-[60vh] rounded-full"
          style={{
            background: 'radial-gradient(circle at 50% 20%,rgba(250,250,250,0.17),rgba(0,0,0,0.95) 90%)',
            filter: 'blur(54px)'
          }}
          initial={{ scale: 1.18, opacity: 0.25 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 3.1, delay: 0.6, type: 'spring' }}
        />
      </motion.div>

      {/* Cinematic Hero */}
      <header className="relative text-center max-w-3xl z-10" ref={heroRef}>
        <motion.h1
          className="text-[clamp(2.7rem,6vw,4.5rem)] font-extrabold mb-4 drop-shadow-[0_6px_32px_rgba(250,250,250,0.12)]"
          variants={itemVariants}
          whileHover={{
            textShadow: "0px 0px 64px #fff, 0px 0px 30px #eee",
            color: "#fff"
          }}
          transition={{ type: 'spring', stiffness: 120, damping: 12 }}
        >
          akash.dev
        </motion.h1>
        <motion.h2
          className="text-2xl md:text-3xl text-white/90 font-semibold mb-7"
          variants={itemVariants}
        >
          The flagship. Built for impact. Designed to impress.
        </motion.h2>
        <motion.p
          className="text-xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed font-medium"
          variants={itemVariants}
        >
          <span className="text-white font-bold">akash.dev</span> isn’t a portfolio.<br/>
          It’s my digital signature—engineered to feel like a product reveal, not a resume.<br /><br />
          Everything here is crafted to turn passive viewers into future collaborators, clients, or teammates.  
          <span className="text-blue-400 font-semibold">From the first scroll to the last pixel, I want you to feel the energy, vision, and ambition I bring to every build.</span>
        </motion.p>
        {/* Callout */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 1.1 }}
        >
          <span className="inline-block px-4 py-2 rounded-lg bg-white/10 text-white font-semibold tracking-wide text-lg shadow-lg animate-pulse border border-white/30">
            “Don’t just browse. Experience it.”
          </span>
        </motion.div>
        {/* Down Arrow */}
        <motion.div
          className="mt-10 flex justify-center"
          variants={itemVariants}
        >
          <motion.button
            aria-label="Scroll for details"
            className="rounded-full p-3 bg-white/10 hover:bg-white/30 transition"
            whileHover={{
              y: -10,
              boxShadow: "0 0 24px #fafafa"
            }}
            animate={{
              y: [0, 12, 0],
              boxShadow: ["0 0 0px #fafafa", "0 0 24px #fafafa", "0 0 0px #fafafa"]
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
        className="w-full max-w-2xl h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent my-16"
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
          {['Next.js', 'TailwindCSS', 'Framer Motion', 'TypeScript', 'Vercel'].map((tag) => (
            <motion.span
              key={tag}
              className="bg-white/10 text-white text-sm px-3 py-1 rounded-full border border-white/25 font-bold shadow"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.33 + Math.random() * 0.15, duration: 0.9 }}
            >
              #{tag}
            </motion.span>
          ))}
        </motion.div>

        {/* Why I Built This */}
        <motion.div variants={itemVariants}>
          <motion.h3
            className="text-2xl font-bold mb-3 text-white/80"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 1.2, type: 'spring' }}
          >
            Why Build akash.dev?
          </motion.h3>
          <motion.p className="text-white/90 mb-4 text-lg">
            I was tired of seeing generic portfolios. I wanted to create something that would make founders say, “We need this guy on our team.”  
            Every detail is intentional—from animated hero sections to seamless page transitions.  
            <span className="text-blue-400 block mt-2">This is a living portfolio—come back in a month, and you’ll find something new, better, bolder.</span>
          </motion.p>
        </motion.div>

        {/* What Makes This Portfolio Different */}
        <motion.div variants={itemVariants}>
          <motion.h3
            className="text-2xl font-bold mb-3 text-white/80"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 1.1, type: 'spring' }}
          >
            What Sets akash.dev Apart
          </motion.h3>
          <motion.ul className="list-inside text-white/80 space-y-2">
            <motion.li>
              <span className="mr-1">🚀</span>
              <b>Instantly Engaging:</b> Cinematic animations, crafted with Framer Motion. 
            </motion.li>
            <motion.li>
              <span className="mr-1">⚡</span>
              <b>Production Grade:</b> Runs on Vercel, optimized for speed, security, and mobile.
            </motion.li>
            <motion.li>
              <span className="mr-1">🎨</span>
              <b>Visually Premium:</b> Not just “responsive” but delightful on every device.
            </motion.li>
            <motion.li>
              <span className="mr-1">🔍</span>
              <b>Transparent Build:</b> All code is public, explained, and evolving in the open.
            </motion.li>
            <motion.li>
              <span className="mr-1">🪄</span>
              <b>Founder Energy:</b> Every project is a real story, not a checklist.
            </motion.li>
          </motion.ul>
        </motion.div>

        {/* Challenge Line */}
        <motion.div
          className="rounded-xl bg-white/10 border border-white/30 p-6 my-8 shadow-xl text-center"
          initial={{ opacity: 0, scale: 0.8, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 1.2, type: 'spring' }}
        >
          <span className="text-blue-200 font-semibold text-lg">
            Tired of lifeless portfolios?  
            <span className="text-white/70 block">Scroll, click, interact—experience the difference. Want your brand to stand out? <span className="underline">Let’s talk.</span></span>
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
          <span className="text-4xl">✨👋✨</span>
        </motion.div>

        {/* Buttons and CTA */}
        <motion.div
          className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 rounded-2xl px-8 py-8 shadow-xl max-w-2xl border-2 border-white/20 text-center"
          initial={{ scale: 0.92, opacity: 0.7 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, type: "spring" }}
        >
          <div className="text-2xl font-bold mb-2 text-white/90 animate-pulse">
            Ready to see what’s possible? Don’t just browse—jump in!
          </div>
          <div className="text-lg text-white/90 mb-7">
            Want your brand or product to stand out? Let’s talk about next-level web experiences.<br/>
            <span className="block mt-2 text-blue-200 font-semibold">
              Star the repo, try it live, or <a href="mailto:youremail@example.com" className="underline hover:text-blue-100 transition">email me</a>.
            </span>
          </div>
          <div className="flex flex-col md:flex-row gap-5 items-center justify-center mt-2">
            <motion.a
              href="https://github.com/ak2556/akashthakur.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 text-lg font-semibold rounded-xl shadow-lg bg-gradient-to-br from-white to-gray-200 text-black border border-black/10 hover:scale-105 hover:shadow-xl transition-all duration-200"
              whileHover={{ scale: 1.09, boxShadow: "0 0 36px #fff8" }}
              whileTap={{ scale: 0.96 }}
            >
              <SiGithub className="h-6 w-6 mr-2" />
              Star on GitHub
            </motion.a>
            <motion.a
              href="https://akashthakur-2ifnabs3q-ak2556s-projects.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 text-lg font-semibold rounded-xl shadow-lg bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white border border-white/20 hover:bg-white hover:text-black hover:scale-105 hover:shadow-xl transition-all duration-200"
              whileHover={{ scale: 1.09, boxShadow: "0 0 36px #fff5" }}
              whileTap={{ scale: 0.96 }}
            >
              <SiVercel className="h-6 w-6 mr-2" />
              Experience Live
            </motion.a>
          </div>
          <motion.div
            className="mt-4 text-base text-gray-300 flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.5 }}
          >
            <SiVercel className="inline h-5 w-5 text-gray-200" /> <span>Powered by <span className="font-semibold">Vercel</span> for <span className="text-blue-100">zero downtime</span> and <span className="text-blue-100">instant speed</span>.</span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Cinematic glass orb */}
      <motion.div
        className="fixed bottom-10 left-10 w-20 h-20 rounded-full bg-gradient-to-br from-white/40 via-white/10 to-black/60 blur-2xl opacity-40 pointer-events-none"
        animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Top-right glass dot */}
      <motion.div
        className="fixed top-8 right-16 w-8 h-8 rounded-full bg-gradient-to-tr from-white/30 to-white/10 blur-xl opacity-30 pointer-events-none"
        animate={{ x: [0, -12, 0], y: [0, 10, 0] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.main>
  );
}