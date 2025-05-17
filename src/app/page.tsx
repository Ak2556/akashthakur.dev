'use client';

import { useState, useEffect, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mail, Linkedin, Github, FileText, Sparkles, Globe2, Briefcase,
  Star, Terminal, Laptop2, ShieldCheck, Rocket, Figma, Activity, Wrench, User
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

/* --- Animation Variants --- */
const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};
const fadeInStagger = {
  visible: { transition: { staggerChildren: 0.13 } }
};
const scaleIn = {
  hidden: { scale: 0.93, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } }
};

/* --- Section Wrapper --- */
function Section({
  children,
  ariaLabel,
  className = "",
}: {
  children: ReactNode;
  ariaLabel?: string;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const motionProps = reduceMotion
    ? {}
    : { initial: "hidden", whileInView: "visible", viewport: { once: true, amount: 0.14 }, variants: fadeInUp };
  return (
    <motion.section
      aria-label={ariaLabel}
      className={`relative w-full max-w-6xl mx-auto mb-24 px-4 ${className}`}
      {...motionProps}
    >
      {children}
    </motion.section>
  );
}

/* --- Button Component --- */
type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  external?: boolean;
  className?: string;
  ariaLabel?: string;
};
function Button({ children, href, onClick, external = false, className = "", ariaLabel }: ButtonProps) {
  if (href) {
    return (
      <Link
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        aria-label={ariaLabel}
        className={`inline-flex items-center justify-center gap-2 font-semibold rounded-full px-6 py-2 transition-transform shadow-md hover:scale-105 hover:shadow-blue-400/10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-95 ${className}`}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={`inline-flex items-center justify-center gap-2 font-semibold rounded-full px-6 py-2 transition-transform shadow-md hover:scale-105 hover:shadow-blue-400/10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
}

/* --- Tag Component --- */
function Tag({ children }: { children: ReactNode }) {
  return (
    <motion.span
      whileHover={{ scale: 1.08, backgroundColor: "rgba(59,130,246,0.25)" }}
      className="bg-blue-500/20 text-blue-300 border border-blue-400/30 rounded-full px-3 py-1 text-xs font-mono select-none user-select-none transition"
    >
      {children}
    </motion.span>
  );
}

/* --- Typewriter Effect --- */
function Typewriter({ text, speed = 32 }: { text: string; speed?: number }) {
  const [display, setDisplay] = useState("");
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplay(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(timer);
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);
  return (
    <span className="font-mono text-white/90 whitespace-pre-wrap">
      {display}
      <span className="animate-pulse">|</span>
    </span>
  );
}

/* --- Hero Section (Instant Reveal, No Scroll Delay) --- */
function HeroSection() {
  return (
    <div
      aria-label="Hero introduction"
      className="pt-12 pb-20 w-full flex flex-col md:flex-row gap-12 items-center justify-between max-w-6xl mx-auto"
    >
      <motion.div
        className="flex flex-col gap-6 max-w-2xl"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-3 flex items-center gap-3 text-white drop-shadow-lg">
          <Sparkles className="w-8 h-8 text-yellow-300" aria-hidden="true" />
          Akash Thakur
        </h1>
        <div
          className="text-xl md:text-2xl font-semibold text-blue-200/90 mb-1"
          aria-live="polite"
        >
          <Typewriter text="Delivering premium products, from prototype to production. Designed for impact at Google, Amazon, Microsoft, and beyond." />
        </div>
        <p className="text-white/70 mb-4 font-mono leading-relaxed">
          Building with code, vision, and curiosity. Every project engineered for speed, scale, and real-world value.
        </p>
        <div className="flex gap-4 mt-2 flex-wrap" role="list">
          <Button href="/resume" className="bg-blue-800/80 border border-blue-400 text-white font-semibold shadow hover:bg-blue-500" ariaLabel="View Resume">
            <FileText className="w-5 h-5" aria-hidden="true" /> View Resume
          </Button>
          <Button href="mailto:akash.thakur.dev@gmail.com" external className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold border border-blue-300 shadow hover:bg-blue-800" ariaLabel="Contact via Email">
            <Mail className="w-5 h-5" aria-hidden="true" /> Contact
          </Button>
          <Button href="https://linkedin.com/in/akash-thakur2556" external className="bg-white/10 text-blue-300 border border-blue-100 shadow hover:bg-blue-200 hover:text-blue-800" ariaLabel="Visit LinkedIn Profile">
            <Linkedin className="w-5 h-5" aria-hidden="true" /> LinkedIn
          </Button>
        </div>
      </motion.div>
      <motion.div
        className="relative flex-shrink-0"
        initial={{ scale: 0.93, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <Image
          src="/images/akash.jpg"
          alt="Akash Thakur"
          width={210}
          height={210}
          className="rounded-full border-4 border-blue-500/30 shadow-2xl object-cover"
          priority
        />
        <span className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-blue-900/70 text-blue-300 font-bold px-5 py-1 rounded-xl shadow-md text-sm select-none">
          #OpenToWork
        </span>
      </motion.div>
    </div>
  );
}

/* --- Quick Navigation --- */
const navLinks = [
  { label: "Resume", href: "/resume", icon: <FileText className="w-5 h-5" /> },
  { label: "About", href: "/about", icon: <User className="w-5 h-5" /> },
  { label: "Contact", href: "/contact", icon: <Mail className="w-5 h-5" /> },
  { label: "LinkedIn", href: "https://linkedin.com/in/akash-thakur2556", icon: <Linkedin className="w-5 h-5" />, external: true },
  { label: "GitHub", href: "https://github.com/ak2556", icon: <Github className="w-5 h-5" />, external: true },
];
function QuickNav() {
  return (
    <Section ariaLabel="Quick navigation">
      <motion.nav className="flex flex-wrap gap-3 my-7 justify-center" variants={fadeInStagger} initial="hidden" animate="visible">
        {navLinks.map((link) => (
          <motion.div key={link.href} variants={fadeInUp}>
            <Button href={link.href} external={link.external} className="px-7 py-2 rounded-full bg-gradient-to-tr from-blue-900/60 to-white/10 border border-blue-600/40 shadow-md hover:bg-blue-800/70 text-white/90" ariaLabel={`Navigate to ${link.label}`}>
              {link.icon}
              {link.label}
            </Button>
          </motion.div>
        ))}
      </motion.nav>
    </Section>
  );
}

/* --- Skills Section --- */
interface Skill {
  name: string;
  url: string;
  icon: ReactNode;
  description?: string;
}
const skills: Skill[] = [
  { name: "TypeScript", url: "https://www.typescriptlang.org/", icon: <Laptop2 className="w-5 h-5" />, description: "Strongly typed superset of JavaScript, enabling scalable and maintainable codebases." },
  { name: "Next.js", url: "https://nextjs.org/", icon: <Globe2 className="w-5 h-5" />, description: "React framework for server-side rendering, static site generation, and API routes." },
  { name: "React", url: "https://react.dev/", icon: <Laptop2 className="w-5 h-5" />, description: "Component-based UI library for building interactive and performant web apps." },
  { name: "TailwindCSS", url: "https://tailwindcss.com/", icon: <Figma className="w-5 h-5" />, description: "Utility-first CSS framework for rapid UI development with responsive design." },
  { name: "FastAPI", url: "https://fastapi.tiangolo.com/", icon: <Rocket className="w-5 h-5" />, description: "Modern, fast (high-performance) web framework for building APIs with Python 3.7+." },
  { name: "Docker", url: "https://www.docker.com/", icon: <ShieldCheck className="w-5 h-5" />, description: "Containerization platform for building, sharing, and running applications in isolated environments." },
  { name: "MongoDB", url: "https://mongodb.com/", icon: <Activity className="w-5 h-5" />, description: "NoSQL document database for flexible, scalable, and high-performance data storage." },
  { name: "ChromaDB", url: "https://www.trychroma.com/", icon: <Star className="w-5 h-5" />, description: "Open-source vector database for embedding-based similarity search and AI applications." },
  { name: "Linux & Zsh", url: "https://linux.org/", icon: <Terminal className="w-5 h-5" />, description: "Proficient with Linux command line, shell scripting, and Zsh customization for productivity." },
];
function SkillCard({ skill }: { skill: Skill }) {
  return (
    <motion.li
      variants={fadeInUp}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white/10 border border-blue-200/20 rounded-2xl p-5 w-72 shadow hover:bg-blue-400/20 hover:text-white transition"
    >
      <a href={skill.url} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full" aria-label={`Learn more about ${skill.name}`}>
        <div className="flex items-center gap-3 mb-3">
          <div className="text-blue-400">{skill.icon}</div>
          <h3 className="font-bold text-lg">{skill.name}</h3>
        </div>
        <p className="text-white/80 flex-grow text-sm leading-relaxed">{skill.description}</p>
      </a>
    </motion.li>
  );
}
function SkillGrid() {
  return (
    <Section ariaLabel="Skills">
      <motion.h2 variants={fadeInUp} className="text-2xl font-bold mb-6 text-center">
        <Wrench className="w-6 h-6" aria-hidden="true" /> My Core Stack
      </motion.h2>
      <motion.ul variants={fadeInStagger} className="flex flex-wrap gap-6 justify-center">
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </motion.ul>
    </Section>
  );
}

/* --- Projects Section --- */
interface Project {
  slug: string;
  title: string;
  desc: string;
  github: string;
  live: string;
  icon: string;
  tags: string[];
  impact: string;
  recruiterNotes?: string;
}
const projects: Project[] = [
  {
    slug: "nava-ai",
    title: "NAVA-AI",
    desc: "Your AI co-founder for founders and indie hackers. Features persistent memory, persona switching, and modular API. Built with FastAPI, ChromaDB, React.",
    github: "https://github.com/ak2556/nava-ai",
    live: "",
    icon: "/file.svg",
    tags: ["FastAPI", "ChromaDB", "Memory", "Personas"],
    impact: "Used by startup founders for rapid validation and AI dashboards, enabling faster product iterations.",
    recruiterNotes: "Demonstrates backend API design, vector database integration, and React frontend composition.",
  },
  {
    slug: "empire-api",
    title: "Empire-API",
    desc: "Enterprise-grade FastAPI backend boilerplate with JWT, rate limiting, RBAC, Docker. The perfect backend for SaaS MVPs.",
    github: "https://github.com/ak2556/empire-api",
    live: "",
    icon: "/window.svg",
    tags: ["FastAPI", "Docker", "Security"],
    impact: "Powers internal SaaS products for rapid market launch, ensuring security and scalability.",
    recruiterNotes: "Highlights expertise in secure API development, containerization, and role-based access control.",
  },
  {
    slug: "akash-dev",
    title: "akash.dev",
    desc: "The portfolio you’re viewing now—animated, Apple × Nothing inspired, and built to impress the best teams in the world.",
    github: "https://github.com/ak2556/akashthakur.dev",
    live: "https://akashthakur-2ifnabs3q-ak2556s-projects.vercel.app/",
    icon: "/globe.svg",
    tags: ["Next.js", "TailwindCSS", "Framer Motion"],
    impact: "Used by recruiters as a technical reference and design benchmark, showcasing modern React and animation skills.",
    recruiterNotes: "Exemplifies frontend craftsmanship, responsive design, and performance optimization.",
  },
  {
    slug: "ems-backend",
    title: "EMS Backend",
    desc: "Employee Management System backend with clean CRUD APIs, secure login, and robust reporting. Built using PHP, MySQL, Node.js, XAMPP.",
    github: "https://github.com/ak2556/ems-backend",
    live: "",
    icon: "/window.svg",
    tags: ["PHP", "MySQL", "Node.js", "XAMPP"],
    impact: "Implemented as a university final-year project and business module, demonstrating full-stack backend skills.",
    recruiterNotes: "Shows ability to work with legacy stacks and modernize backend services.",
  },
  {
    slug: "mini-notes",
    title: "Mini Notes",
    desc: "Minimal note-taking app with secure authentication and ultra-fast UI. Built with React, Next.js, and MongoDB.",
    github: "https://github.com/ak2556/mini-notes",
    live: "",
    icon: "/file.svg",
    tags: ["React", "MongoDB", "Next.js"],
    impact: "Loved by students for quick, organized note capture and easy accessibility.",
    recruiterNotes: "Highlights frontend state management, secure user auth, and database integration.",
  },
  {
    slug: "url-shortener",
    title: "URL Shortener",
    desc: "Blazing-fast and privacy-focused link shortener. Open-source and ready for scale.",
    github: "https://github.com/ak2556/url-shortener",
    live: "",
    icon: "/globe.svg",
    tags: ["Next.js", "API", "MongoDB"],
    impact: "Used for easy link sharing and analytics with privacy-first design.",
    recruiterNotes: "Demonstrates API route handling, database design, and frontend-backend integration.",
  },
];
function ProjectCard({ project }: { project: Project }) {
  const stopPropagation = (e: React.MouseEvent) => e.stopPropagation();
  return (
    <motion.div
      variants={scaleIn}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="group bg-gradient-to-br from-blue-900/80 via-blue-800/10 to-black border border-white/10 rounded-3xl p-7"
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group bg-gradient-to-br from-blue-900/80 via-blue-800/10 to-black border border-white/10 rounded-3xl p-7 shadow-2xl flex flex-col items-center relative hover:-translate-y-1 hover:scale-105 hover:shadow-blue-300/30 transition cursor-pointer"
        prefetch={false}
        aria-label={`View details for project ${project.title}`}
        tabIndex={0}
      >
        <div className="w-14 h-14 mb-4">
          <Image src={project.icon} alt={`${project.title} icon`} width={56} height={56} className="rounded-lg bg-white/10 shadow" priority={false} />
        </div>
        <h3 className="font-bold text-lg text-white text-center mb-2">{project.title}</h3>
        <p className="text-white/90 text-center mb-3 text-sm leading-relaxed">{project.desc}</p>
        <ul className="flex flex-wrap gap-2 justify-center mb-3" role="list" aria-label={`${project.title} technology tags`}>
          {project.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
        </ul>
        <p className="text-white/70 text-center text-sm italic mb-4 leading-snug">{project.impact}</p>
        {project.recruiterNotes && (
          <p className="text-blue-300 text-center text-xs mb-4 italic select-none">
            <Star className="inline w-4 h-4 mr-1" aria-hidden="true" />
            {project.recruiterNotes}
          </p>
        )}
        <div className="flex gap-3 mt-auto">
          <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={stopPropagation} className="bg-black/80 border border-white/10 text-white px-4 py-1 rounded-full flex items-center gap-2 font-bold hover:bg-white hover:text-black hover:scale-105 transition" aria-label={`View ${project.title} on GitHub`}>
            <Github className="w-4 h-4" aria-hidden="true" /> GitHub
          </a>
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" onClick={stopPropagation} className="bg-gradient-to-r from-blue-400 to-blue-700 text-white px-4 py-1 rounded-full flex items-center gap-2 font-bold hover:bg-blue-600 hover:scale-105 transition" aria-label={`View live demo of ${project.title}`}>
              <Globe2 className="w-4 h-4" aria-hidden="true" /> Live
            </a>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
function ProjectGrid() {
  return (
    <Section ariaLabel="Premium project portfolio">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center flex items-center gap-2 justify-center text-blue-400">
        <Briefcase className="w-7 h-7" aria-hidden="true" /> Premium Project Portfolio
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {projects.map((proj) => (
          <ProjectCard key={proj.slug} project={proj} />
        ))}
      </div>
      <div className="text-center mt-12">
        <span className="bg-gradient-to-r from-blue-900/30 via-blue-800/15 to-white/10 border border-white/10 px-7 py-3 rounded-full text-lg text-blue-300 font-semibold shadow-inner flex items-center gap-2 mx-auto justify-center w-fit select-none">
          <Star className="w-5 h-5" aria-hidden="true" /> Every project is live, documented, and ready for a recruiter deep-dive.
        </span>
      </div>
    </Section>
  );
}

/* --- SVG Cinematic Background --- */
function SVGBackground() {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      aria-hidden="true"
      className="fixed top-0 left-0 w-full h-full pointer-events-none select-none z-0"
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.circle
        cx="720"
        cy="400"
        r="350"
        fill="url(#grad1)"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <circle
        cx="300"
        cy="150"
        r="80"
        stroke="#3b82f6"
        strokeWidth="1.5"
        fill="transparent"
        className="animate-[spin_120s_linear_infinite]"
      />
      <circle
        cx="1100"
        cy="650"
        r="60"
        stroke="#60a5fa"
        strokeWidth="1.2"
        fill="transparent"
        className="animate-[spin_reverse_90s_linear_infinite]"
      />
      <style>{`
        @keyframes pulse {
          0%, 100% { r: 350; opacity: 0.4; }
          50% { r: 370; opacity: 0.25; }
        }
        @keyframes spin {
          0% { transform: rotate(0deg); transform-origin: center; }
          100% { transform: rotate(360deg); transform-origin: center; }
        }
        @keyframes spin_reverse {
          0% { transform: rotate(0deg); transform-origin: center; }
          100% { transform: rotate(-360deg); transform-origin: center; }
        }
      `}</style>
    </motion.svg>
  );
}

/* --- MAIN PAGE --- */
export default function Home() {
  return (
    <>
      <SVGBackground />
      <main className="relative bg-black text-white px-4 md:px-12 py-12 min-h-screen flex flex-col items-center z-10">
        <HeroSection />
        <QuickNav />
        <SkillGrid />
        <ProjectGrid />
        {/* Add more sections as needed */}
      </main>
    </>
  );
}