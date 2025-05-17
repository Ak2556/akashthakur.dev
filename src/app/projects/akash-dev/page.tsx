'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SiGithub, SiVercel } from 'react-icons/si';
import { FaChevronDown } from 'react-icons/fa';
import { useRef } from 'react';

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

export default function ProjectPage() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <motion.main
      className="relative min-h-screen px-6 py-20 bg-black text-white flex flex-col items-center overflow-x-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {/* Glowing radial background animation */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 1.8, ease: 'easeInOut' }}
      >
        <motion.div
          className="absolute left-1/2 top-0 -translate-x-1/2 w-[60vw] h-[50vh] rounded-full"
          style={{
            background: 'radial-gradient(circle at 50% 20%,rgba(110,32,255,0.20),rgba(0,0,0,0.92) 90%)',
            filter: 'blur(32px)'
          }}
          initial={{ scale: 1.1, opacity: 0.2 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 3, delay: 0.6, type: 'spring' }}
        />
      </motion.div>

      <header className="relative text-center max-w-3xl z-10" ref={heroRef}>
        {/* Hero Title with glow and reflection */}
        <motion.h1
          className="text-[clamp(2.7rem,6vw,4.5rem)] font-extrabold mb-3 drop-shadow-[0_6px_32px_rgba(110,32,255,0.2)]"
          variants={itemVariants}
          whileHover={{
            textShadow: "0px 0px 40px #ae7cff, 0px 0px 12px #fff",
            color: "#ae7cff"
          }}
          transition={{ type: 'spring', stiffness: 100, damping: 12 }}
        >
          Akash.dev
        </motion.h1>
        {/* Reflection */}
        <motion.div
          className="w-full flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.18 }}
          transition={{ delay: 1.5, duration: 1.3 }}
        >
          <span
            className="block w-[80%] h-8 bg-gradient-to-b from-white/10 to-transparent blur-sm -mt-4"
            aria-hidden
          ></span>
        </motion.div>

        {/* Cinematic tagline - word-by-word reveal */}
        <motion.h2
          className="text-[clamp(1.3rem,3vw,2.5rem)] text-white/70 mb-8 font-medium"
          variants={itemVariants}
        >
          <AnimatedTagline />
        </motion.h2>
        {/* Apple-style paragraph reveal */}
        <motion.p
          className="text-lg leading-relaxed text-white/80 mb-12 tracking-tight"
          variants={itemVariants}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.3, duration: 1.8 }}
        >
          Built with Next.js 15, Tailwind CSS, and Framer Motion, this portfolio merges performance engineering, smooth interaction, and design polish for a genuinely cinematic, recruiter-magnet experience.
        </motion.p>

        {/* Down arrow with bounce and glow */}
        <motion.div
          className="mt-10 flex justify-center"
          variants={itemVariants}
        >
          <motion.button
            aria-label="Scroll for details"
            className="rounded-full p-3 bg-white/10 hover:bg-accent transition"
            whileHover={{
              y: -12,
              boxShadow: "0 0 24px #ae7cff"
            }}
            animate={{
              y: [0, 12, 0],
              boxShadow: ["0 0 0px #ae7cff", "0 0 24px #ae7cff", "0 0 0px #ae7cff"]
            }}
            transition={{ duration: 2.1, repeat: Infinity }}
            onClick={() => {
              const section = document.getElementById('details');
              section?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <FaChevronDown className="h-7 w-7 text-white/70" />
          </motion.button>
        </motion.div>
      </header>

      {/* Animated divider */}
      <motion.div
        className="w-full max-w-2xl h-[2px] bg-gradient-to-r from-transparent via-white/15 to-transparent my-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: 3.3, delay: 3.3, ease: 'easeInOut' }}
      />

      {/* Details section */}
      <motion.section
        id="details"
        className="max-w-2xl text-left space-y-16 mb-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.18 }}
      >
        {/* Parallax Card */}
        <ParallaxFeatureCard />
        {/* Section 1 */}
        <AnimatedSection
          title="How It’s Built"
          points={[
            "Next.js 15 App Router (SSG + SSR)",
            "Tailwind CSS for ultra-fast, consistent design",
            "Framer Motion for every interactive layer",
            "Fully optimized for mobile & large display"
          ]}
        />
        {/* Section 2 */}
        <AnimatedSection
          title="Why It Matters"
          points={[
            "SEO & performance tuned to <1s load time",
            "A/B tested for recruiter & founder conversions",
            "Blazing fast static & edge rendering",
            "100% accessible (WCAG AA compliant)"
          ]}
        />
        {/* Section 3 */}
        <AnimatedSection
          title="Future Roadmap"
          points={[
            "Headless CMS for dynamic blog/case studies",
            "GraphQL layer for analytics",
            "Live chat widget for visitor engagement",
            "PWA features for offline access"
          ]}
        />
      </motion.section>

      {/* Animated divider */}
      <motion.div
        className="w-full max-w-2xl h-[2px] bg-gradient-to-r from-transparent via-white/15 to-transparent my-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: 3.3, delay: 0.9, ease: 'easeInOut' }}
        style={{ originX: 0 }}
      />

      {/* Call to Action Buttons with entrance animations */}
      <motion.nav
        className="flex flex-col sm:flex-row gap-7 items-center z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.18 }}
      >
        <AnimatedButton
          href="https://akashthakur-2ifnabs3q-ak2556s-projects.vercel.app/"
          icon={<SiVercel className="mr-2 h-5 w-5" />}
          text="View on Vercel"
          bg="bg-white"
          textColor="text-black"
          hover="hover:bg-gray-100"
          shadow="shadow-md"
        />
        <AnimatedButton
          href="https://github.com/Ak2556/akashthakur.dev"
          icon={<SiGithub className="mr-2 h-5 w-5" />}
          text="View on GitHub"
          bg="bg-black"
          textColor="text-white"
          hover="hover:bg-gray-900"
          shadow="shadow-lg"
        />
        <AnimatedButton
          href="/projects/empire-api"
          text="Next Project →"
          bg="bg-accent"
          textColor="text-black"
          hover="hover:bg-accent-dark"
          shadow="shadow-md"
          internal
        />
      </motion.nav>

      {/* Cinematic floating glass orb for ambiance */}
      <motion.div
        className="fixed bottom-10 left-10 w-24 h-24 rounded-full bg-gradient-to-br from-accent/30 via-white/10 to-black/60 blur-3xl opacity-40 pointer-events-none"
        animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Animated top-right glass dot */}
      <motion.div
        className="fixed top-8 right-16 w-10 h-10 rounded-full bg-gradient-to-tr from-accent/40 to-white/5 blur-2xl opacity-30 pointer-events-none"
        animate={{ x: [0, -12, 0], y: [0, 10, 0] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.main>
  );
}

// Animated tagline - word-by-word appearance
function AnimatedTagline() {
  const words = [
    "A", "cinematic", "portfolio", "for", "the", "next", "generation", "of", "web", "builders."
  ];
  return (
    <span>
      {words.map((word, idx) => (
        <motion.span
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.22 + idx * 0.22,
            duration: 0.8,
            type: 'spring'
          }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

// Animated Section with staggered list items
function AnimatedSection({ title, points }: { title: string, points: string[] }) {
  return (
    <motion.div variants={itemVariants}>
      <motion.h3
        className="text-3xl font-semibold mb-3"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.44, duration: 2.1, type: 'spring' }}
      >
        {title}
      </motion.h3>
      <motion.ul className="list-disc list-inside text-white/80 space-y-2">
        {points.map((point, i) => (
          <motion.li
            key={i}
            className="leading-relaxed"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.69 + i * 0.32, duration: 1.4, type: 'spring' }}
          >
            {point}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}

// Animated CTA Button with entrance, glow, and ripple
function AnimatedButton({
  href, icon, text, bg, textColor, hover, shadow, internal
}: {
  href: string, icon?: React.ReactNode, text: string, bg: string, textColor: string, hover: string, shadow: string, internal?: boolean
}) {
  const base =
    `inline-flex items-center ${bg} ${textColor} font-medium px-6 py-3 rounded-xl ${hover} ${shadow} transition-all duration-200 text-lg focus:ring-2 focus:ring-accent focus:outline-none relative overflow-hidden`;

  return internal ? (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 4.5, type: 'spring', stiffness: 60 }}
      whileHover={{ scale: 1.05, boxShadow: '0 0 40px #ae7cff44' }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href={href} className={base}>
        {icon}{text}
      </Link>
    </motion.div>
  ) : (
    <motion.a
      href={href}
      target={href.startsWith('http') ? "_blank" : undefined}
      rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
      className={base}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 3.9, type: 'spring', stiffness: 60 }}
      whileHover={{ scale: 1.05, boxShadow: '0 0 40px #ae7cff44' }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}{text}
      <span className="absolute left-1/2 top-1/2 w-0 h-0 bg-accent/20 rounded-full pointer-events-none group-hover:w-40 group-hover:h-40 transition-all duration-500" />
    </motion.a>
  );
}

// Parallax Feature Card Example
function ParallaxFeatureCard() {
  return (
    <motion.div
      className="relative w-full mb-8 rounded-xl bg-gradient-to-br from-white/5 via-accent/5 to-black/30 shadow-lg overflow-hidden border border-white/10 hover:shadow-accent/20 transition-all group"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
      whileHover={{ scale: 1.03, boxShadow: "0 8px 32px #ae7cff55" }}
      transition={{ type: "spring", stiffness: 60 }}
    >
      <motion.div
        className="p-8"
        variants={itemVariants}
        initial="hidden"
        whileInView="show"
        transition={{ delay: 0.7, duration: 2.1 }}
      >
        <motion.h4
          className="text-2xl font-semibold mb-2 text-accent"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 2.1 }}
        >
          Cinematic Animations
        </motion.h4>
        <motion.p
          className="text-white/80 text-lg"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.9, duration: 2.1 }}
        >
          Every element in this portfolio—titles, dividers, CTAs, even this card—animates in perfect sync, creating a flow that feels like an Apple keynote. Hover to feel the depth.
        </motion.p>
      </motion.div>
      {/* Animated shimmer */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.4 }}
        transition={{ duration: 1.8 }}
        style={{
          background: 'linear-gradient(120deg,rgba(174,124,255,0.06) 0%,rgba(255,255,255,0.03) 60%,rgba(174,124,255,0.10) 100%)'
        }}
      />
    </motion.div>
  );
}