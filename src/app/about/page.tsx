'use client';

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Font stack for Apple × Nothing look
const fontStack = [
  "SF Pro Display", "Inter", "-apple-system", "BlinkMacSystemFont",
  "'Segoe UI'", "Roboto", "'Helvetica Neue'", "Arial", "sans-serif"
].join(",");

// Typewriter for hero only
function useTypewriter(text: string, speed = 44, delay = 0) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let mounted = true, i = 0;
    const go = () => {
      if (!mounted) return;
      if (i <= text.length) {
        setDisplayed(text.slice(0, i));
        i++;
        setTimeout(go, speed);
      }
    };
    const t = setTimeout(go, delay);
    return () => { mounted = false; clearTimeout(t); };
  }, [text, speed, delay]);
  return displayed;
}

// ---- Data ----
const SKILLS = [
  { label: "Full Stack (MERN, TypeScript)", url: "https://www.mongodb.com/mern-stack" },
  { label: "AI SaaS (FastAPI, OpenAI, ChromaDB)", url: "https://fastapi.tiangolo.com/" },
  { label: "Docker & Linux", url: "https://www.docker.com/" },
  { label: "UI/UX Minimalism", url: "https://uxdesign.cc/" },
  { label: "Terminal-First Development", url: "https://en.wikipedia.org/wiki/Terminal_emulator" },
  { label: "Cloud-Ready Architecture", url: "https://cloud.google.com/" }
];

const EXPERIENCE = [
  {
    company: "Sanssys Technologies",
    companyUrl: "https://sanssystech.com/",
    role: "Full MERN Stack Intern",
    period: "Jan 2025 – Jun 2025",
    impact: [
      { desc: "Built Employee Management System with JS, PHP, MySQL, XAMPP", proof: "https://github.com/ak2556/ems" }
    ]
  },
  {
    company: "The Knowledge Academy",
    companyUrl: "https://www.theknowledgeacademy.com/",
    role: "IT Administrator",
    period: "May 2024 – Dec 2024",
    impact: [
      { desc: "Managed IT ops, automation & deployment for a fast-moving team", proof: "https://www.theknowledgeacademy.com/" }
    ]
  },
  {
    company: "Raja Plastics",
    companyUrl: "https://rajasplastics.com/",
    role: "AutoCAD Intern",
    period: "Jan 2023 – Jul 2023",
    impact: [
      { desc: "Designed production-grade CAD, streamlined manufacturing workflow", proof: "https://www.autodesk.com/solutions/autocad" }
    ]
  }
];

const PROJECTS = [
  {
    title: "NAVA-AI",
    github: "https://github.com/ak2556/nava-ai",
    live: undefined,
    description: "AI SaaS co-founder platform: persistent memory, modular personas, OpenRouter backend, ChromaDB, JWT auth, ultra-minimal cinematic UI."
  },
  {
    title: "akash.dev",
    github: "https://github.com/ak2556/akashthakur.dev",
    live: "https://akashthakur-2ifnabs3q-ak2556s-projects.vercel.app/",
    description: "Portfolio as a product: Apple × Nothing style, built with Next.js, TypeScript, Tailwind, Framer Motion. Cinematic, interactive, always evolving."
  },
  {
    title: "Empire-API",
    github: "https://github.com/ak2556/empire-api",
    live: undefined,
    description: "Enterprise backend boilerplate: scalable, SaaS-ready, rate limiting, helmet, JWT, modular, deploy-anywhere with instant team onboarding."
  }
];

const EDUCATION = [
  {
    degree: "M.Sc IT",
    place: "DAV College, Hoshiarpur",
    url: "https://davcollegehoshiarpur.com/",
    period: "2023–2025",
    highlight: "Internship: Sanssys Technologies (HR SaaS modules)"
  },
  {
    degree: "BCA",
    place: "DAV College, Hoshiarpur",
    url: "https://davcollegehoshiarpur.com/",
    period: "2020–2023",
    highlight: "Capstone: Employee Management System"
  },
  {
    degree: "Diploma in AutoCAD",
    place: "Pt. J R College, Hoshiarpur",
    url: "https://www.autodesk.com/solutions/autocad",
    period: "2018–2020",
    highlight: "Production-grade blueprints & workflow design"
  }
];

const CERTIFICATIONS = [
  {
    label: "NCC C Certificate Holder",
    url: "https://indiancc.nic.in/",
    desc: "Recognized for leadership, discipline, and national service."
  }
];

const IMPACT_FACTS = [
  { desc: "Delivered 3+ real-world products from scratch to production", url: "https://github.com/ak2556" },
  { desc: "Zero legacy code debt: every project 100% built and shipped by me", url: "https://github.com/ak2556" },
  { desc: "Terminal-first, DevOps-obsessed: from VSCode to cloud, never afraid to break things", url: "https://www.docker.com/" },
  { desc: "Designs and builds with an Apple-level eye for polish", url: "https://www.apple.com/in/" },
];

const VALUES = [
  { icon: "💡", label: "Curiosity", desc: "Never stop learning.", url: "https://en.wikipedia.org/wiki/Curiosity" },
  { icon: "⚡", label: "Speed", desc: "Ship fast, fix faster.", url: "https://en.wikipedia.org/wiki/Agile_software_development" },
  { icon: "🎯", label: "Focus", desc: "Quality over clutter.", url: "https://www.producthunt.com/" },
  { icon: "🤝", label: "Collaboration", desc: "Alone is fast, together is legendary.", url: "https://en.wikipedia.org/wiki/Teamwork" },
  { icon: "🛠️", label: "Craft", desc: "Every line matters.", url: "https://en.wikipedia.org/wiki/Software_craftsmanship" },
  { icon: "💪", label: "Resilience", desc: "Bounce back, build on.", url: "https://en.wikipedia.org/wiki/Resilience_(organizational)" }
];

const FOOTER = `© ${new Date().getFullYear()} Akash Thakur • Built for Google, Amazon, Microsoft — Let's build what's next.`;

export default function AboutPage() {
  // Slow, cinematic hero typewriter
  const heroName = useTypewriter("Akash Thakur", 90);
  const heroTag = useTypewriter("Product-First Engineer | SaaS, AI, Cloud | FAANG-Ready", 38, 900);
  const heroDesc = useTypewriter("Building high-impact software for the world's top teams.", 32, 2700);

  // Animation variants
  const fadeInUp = { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 } };
  const fadeIn = { initial: { opacity: 0 }, animate: { opacity: 1 } };

  return (
    <main
      className="min-h-screen w-full flex flex-col justify-center items-center relative overflow-x-hidden"
      style={{
        background: "#000",
        color: "#fff",
        fontFamily: fontStack,
        letterSpacing: "-0.01em"
      }}
    >
      {/* HERO */}
      <motion.section
        {...fadeInUp}
        transition={{ duration: 1.6, ease: "easeInOut" }}
        className="w-full flex flex-col items-center justify-center pt-32 pb-12 relative z-10"
      >
        <motion.h1
          {...fadeInUp}
          transition={{ duration: 2.2, delay: 0.2, ease: "circOut" }}
          className="font-extrabold text-white text-center text-[3.3rem] sm:text-[5rem] md:text-[7rem] leading-tight"
          style={{ letterSpacing: "-0.045em", minHeight: 80 }}
        >
          {heroName}
          <span className="text-blue-300 animate-pulse">{heroName.length < 13 ? "|" : ""}</span>
        </motion.h1>
        <motion.p
          {...fadeInUp}
          transition={{ duration: 1.6, delay: 2, ease: "easeInOut" }}
          className="mt-7 text-center text-xl md:text-2xl text-white/70 font-mono min-h-[2.2em]"
        >
          {heroTag}
          <span className="text-blue-300 animate-pulse">{heroTag.length < 49 ? "|" : ""}</span>
        </motion.p>
        <motion.div
          {...fadeInUp}
          transition={{ duration: 1.8, delay: 3.3, ease: "easeInOut" }}
          className="mt-4 text-lg text-blue-200 font-light min-h-[1.6em]"
        >
          {heroDesc}
        </motion.div>
      </motion.section>

      {/* SKILLS */}
      <motion.section
        {...fadeInUp}
        transition={{ duration: 2.4, delay: 1.3, ease: "circOut" }}
        className="w-full max-w-4xl mx-auto mt-3 mb-8"
      >
        <motion.h2 {...fadeIn} transition={{ duration: 1.1 }} className="text-2xl md:text-3xl font-bold text-white/80 mb-2">Key Strengths</motion.h2>
        <ul className="flex flex-wrap justify-center gap-4">
          {SKILLS.map((skill, idx) => (
            <motion.li
              {...fadeIn}
              transition={{ duration: 1.5, delay: 0.7 }}
              key={skill.label + idx}
              className="bg-white/10 border border-blue-200/20 px-5 py-2 rounded-2xl font-semibold text-white/90 text-base shadow hover:shadow-blue-400/30 cursor-pointer underline hover:text-blue-300 hover:underline-offset-4 transition"
            >
              <a href={skill.url} target="_blank" rel="noopener noreferrer">{skill.label}</a>
            </motion.li>
          ))}
        </ul>
      </motion.section>

      {/* EXPERIENCE */}
      <motion.section
        {...fadeInUp}
        transition={{ duration: 2.2, delay: 1.7, ease: "circOut" }}
        className="max-w-3xl mx-auto mt-6 mb-14 px-2"
      >
        <motion.h2 {...fadeIn} transition={{ duration: 1.3 }} className="text-3xl font-bold text-white/80 mb-5">Professional Experience</motion.h2>
        {EXPERIENCE.map((exp, idx) => (
          <motion.div
            {...fadeInUp}
            transition={{ duration: 2 + idx * 0.3, delay: 2 + idx * 0.15, ease: "circOut" }}
            key={exp.company + exp.period}
            className="mb-8 p-7 bg-white/10 border border-white/15 rounded-2xl shadow-lg hover:shadow-blue-400/30 transition"
          >
            <div className="flex flex-col md:flex-row md:justify-between mb-2">
              <span className="font-bold text-blue-200 text-lg">
                {exp.role}
                {" "}
                <a href={exp.companyUrl} className="text-white/60 underline ml-2 hover:text-blue-400 transition" target="_blank" rel="noopener noreferrer">
                  @ {exp.company}
                </a>
              </span>
              <span className="text-white/60 text-sm mt-1 md:mt-0">{exp.period}</span>
            </div>
            <ul className="list-disc ml-5 text-white/85">
              {exp.impact.map((point, idx2) => (
                <li key={exp.company + idx + point.desc + idx2} className="underline hover:text-blue-300 transition">
                  <a href={point.proof} target="_blank" rel="noopener noreferrer">{point.desc}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.section>

      {/* PROJECTS */}
      <motion.section
        {...fadeInUp}
        transition={{ duration: 2.2, delay: 2.1, ease: "circOut" }}
        className="max-w-4xl mx-auto mt-8 mb-14 px-2"
      >
        <motion.h2 {...fadeIn} transition={{ duration: 1.3 }} className="text-3xl font-bold text-white/80 mb-5">Highlighted Projects</motion.h2>
        <div className="flex flex-col gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              {...fadeInUp}
              transition={{ duration: 2.5, delay: 2.3 + i * 0.2, ease: "circOut" }}
              key={project.title + i}
              className="p-7 bg-black/80 border border-blue-400/10 rounded-2xl shadow-lg hover:shadow-blue-400/30 transition"
            >
              <div className="flex flex-col md:flex-row md:justify-between mb-2">
                <span className="font-bold text-blue-300 text-lg">{project.title}</span>
                <span className="flex gap-4">
                  <a href={project.github} className="text-blue-400 font-mono underline hover:text-blue-200 transition" target="_blank" rel="noopener noreferrer">GitHub</a>
                  {project.live && (
                    <a href={project.live} className="text-green-400 font-mono underline hover:text-green-200 transition" target="_blank" rel="noopener noreferrer">Live</a>
                  )}
                </span>
              </div>
              <p className="text-white/90 text-base" style={{ minHeight: "2.2em" }}>
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* EDUCATION */}
      <motion.section
        {...fadeInUp}
        transition={{ duration: 2.1, delay: 2.5, ease: "circOut" }}
        className="max-w-3xl mx-auto mt-7 mb-10 px-2"
      >
        <motion.h2 {...fadeIn} transition={{ duration: 1.1 }} className="text-3xl font-bold text-white/80 mb-5">Education</motion.h2>
        <ul className="space-y-5 text-white/90 text-lg">
          {EDUCATION.map((edu, idx) => (
            <motion.li
              {...fadeIn}
              transition={{ duration: 1.3, delay: 2.6 }}
              key={edu.degree + edu.period + idx}
              className="bg-white/5 border border-white/10 rounded-xl p-5 hover:shadow-blue-400/30 transition"
            >
              <a href={edu.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-200 underline hover:text-blue-400 transition">
                {edu.degree}
              </a>
              {" – "}
              {edu.place}, {edu.period}
              <br />
              <span className="text-white/60">{edu.highlight}</span>
            </motion.li>
          ))}
        </ul>
      </motion.section>

      {/* CERTIFICATIONS */}
      <motion.section
        {...fadeInUp}
        transition={{ duration: 2.1, delay: 2.7, ease: "circOut" }}
        className="max-w-3xl mx-auto mt-2 mb-10 px-2"
      >
        <motion.h2 {...fadeIn} transition={{ duration: 1.1 }} className="text-2xl font-bold text-white/80 mb-3">Certifications & Awards</motion.h2>
        <ul>
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.li
              {...fadeIn}
              transition={{ duration: 1.3, delay: 2.7 }}
              key={cert.label + idx}
              className="flex flex-col p-5 bg-blue-800/20 border border-blue-200/20 rounded-xl shadow font-medium text-blue-100 mb-3 underline hover:text-blue-300 transition"
            >
              <a href={cert.url} target="_blank" rel="noopener noreferrer">{cert.label}</a>
              <span className="text-white/70 text-base">{cert.desc}</span>
            </motion.li>
          ))}
        </ul>
      </motion.section>

      {/* IMPACT FACTS */}
      <motion.section
        {...fadeInUp}
        transition={{ duration: 2.1, delay: 2.9, ease: "circOut" }}
        className="max-w-4xl mx-auto mt-8 mb-12 px-2"
      >
        <motion.h2 {...fadeIn} transition={{ duration: 1.1 }} className="text-2xl font-bold text-white/80 mb-2">Impact At A Glance</motion.h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {IMPACT_FACTS.map((fact, idx) => (
            <motion.li
              {...fadeIn}
              transition={{ duration: 1.2, delay: 2.9 }}
              key={fact.desc + idx}
              className="bg-white/8 border border-white/10 rounded-xl p-4 text-white/90 underline hover:text-blue-300 transition"
            >
              <a href={fact.url} target="_blank" rel="noopener noreferrer">{fact.desc}</a>
            </motion.li>
          ))}
        </ul>
      </motion.section>

      {/* VALUES */}
      <motion.section
        {...fadeInUp}
        transition={{ duration: 2.1, delay: 3.1, ease: "circOut" }}
        className="max-w-3xl mx-auto mt-8 mb-12 px-2"
      >
        <motion.h2 {...fadeIn} transition={{ duration: 1.1 }} className="text-2xl font-bold text-white/80 mb-2">Values</motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {VALUES.map((val, idx) => (
            <motion.a
              {...fadeIn}
              transition={{ duration: 1.3, delay: 3.1 }}
              href={val.url}
              key={val.label + idx}
              className="bg-black/70 border border-blue-400/15 rounded-xl p-4 text-white/90 text-center underline hover:text-blue-300 transition"
              target="_blank"
              rel="noopener noreferrer"
              title={val.desc}
            >
              <div className="text-2xl mb-2">{val.icon}</div>
              <div className="font-bold">{val.label}</div>
              <div className="text-white/70 text-sm">{val.desc}</div>
            </motion.a>
          ))}
        </div>
      </motion.section>

      {/* CONTACT / FOOTER */}
      <footer className="w-full py-16 text-center text-sm text-white/25 font-mono mt-28 z-50 select-none">
        <div>{FOOTER}</div>
        <div className="mt-3">
          <a href="mailto:akash.thakur.dev@gmail.com" className="text-blue-400 underline hover:text-blue-200 transition">Contact: akash.thakur.dev@gmail.com</a>
          {" | "}
          <a href="https://linkedin.com/in/akash-thakur2556" className="text-blue-400 underline hover:text-blue-200 transition" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </footer>
      <style>{`
        html, body { background: #000 !important; }
        main { background: #000 !important; }
        @media print { html, body, main { background: #fff !important; color: #000 !important; } }
      `}</style>
    </main>
  );
}