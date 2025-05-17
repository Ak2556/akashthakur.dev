'use client';

import React from "react";
import { motion } from "framer-motion";
import { SiGithub, SiLinkedin } from "react-icons/si";

const gradientText = "bg-gradient-to-r from-white via-blue-400 to-white bg-clip-text text-transparent";

const atsResumeHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Akash Thakur - Resume</title>
<style>
  body { font-family: Arial, sans-serif; margin: 2rem; color: #000; background: #fff; }
  h1, h2, h3, h4 { margin: 0.5rem 0; font-weight: bold; }
  h1 { font-size: 2rem; }
  h2 { font-size: 1.5rem; border-bottom: 1px solid #000; margin-bottom: 0.5rem; padding-bottom: 0.3rem; }
  h3 { font-size: 1.2rem; margin-top: 1rem; }
  p, li { font-size: 1rem; line-height: 1.4; margin: 0.2rem 0; }
  ul { padding-left: 1.2rem; }
  section { margin-bottom: 2rem; }
</style>
</head>
<body>
  <header>
    <h1>Akash Thakur</h1>
    <p>Full Stack & AI SaaS Engineer</p>
    <p>Email: akashthakur2556@gmail.com</p>
    <p>GitHub: https://github.com/ak2556</p>
    <p>LinkedIn: https://linkedin.com/in/akash-thakur2556</p>
  </header>
  
  <section>
    <h2>Projects</h2>
    <article>
      <h3>NAVA-AI</h3>
      <p>A cutting-edge AI SaaS platform designed for startup founders and solopreneurs who need a reliable digital co-founder. Features persistent memory, persona switching, and seamless integration with AI APIs.</p>
      <p><strong>GitHub:</strong> https://github.com/ak2556/nava-ai</p>
    </article>
    <article>
      <h3>akash.dev</h3>
      <p>Developer portfolio inspired by Apple and Nothing, built with Next.js, Tailwind, and Framer Motion. Interactive and minimalistic to showcase projects elegantly.</p>
      <p><strong>GitHub:</strong> https://github.com/ak2556/akashthakur.dev</p>
      <p><strong>Live:</strong> https://akashthakur-2ifnabs3q-ak2556s-projects.vercel.app/</p>
    </article>
    <article>
      <h3>Empire-API</h3>
      <p>Enterprise backend boilerplate for SaaS applications featuring JWT auth, rate limiting, and clean, scalable architecture.</p>
      <p><strong>GitHub:</strong> https://github.com/ak2556/empire-api</p>
    </article>
  </section>

  <section>
    <h2>Experience</h2>
    <article>
      <h3>Full MERN Stack Intern @ Sanssys Technologies</h3>
      <p>Jan 2025 – Jun 2025</p>
      <p>Developed Employee Management System (JS, PHP, MySQL, XAMPP) with clean UI, CRUD, and login flow as a major M.Sc IT project.</p>
    </article>
    <article>
      <h3>IT Administrator @ The Knowledge Academy</h3>
      <p>May 2024 – Dec 2024</p>
      <p>Managed IT operations, deployment automation, and ensured system reliability for a high-performance team.</p>
    </article>
    <article>
      <h3>AutoCAD Intern @ Raja Plastics</h3>
      <p>Jan 2023 – Jul 2023</p>
      <p>Produced detailed CAD models to streamline manufacturing workflow and documentation.</p>
    </article>
  </section>

  <section>
    <h2>Education</h2>
    <p><strong>M.Sc IT</strong>, DAV College, Hoshiarpur, 2023–2025</p>
    <p>Internship: Sanssys Technologies (HR SaaS modules)</p>
    <p><strong>BCA</strong>, DAV College, Hoshiarpur, 2020–2023</p>
    <p>Capstone: Employee Management System</p>
    <p><strong>Diploma in AutoCAD</strong>, Pt. J R College, 2018–2020</p>
  </section>

  <section>
    <h2>Achievements</h2>
    <p>NCC C Certificate Holder — Awarded for leadership, discipline, and national service.</p>
  </section>
</body>
</html>
`;

function openATSResumeAndPrint() {
  const newWindow = window.open("", "_blank", "width=800,height=1000");
  if (newWindow) {
    newWindow.document.write(atsResumeHtml);
    newWindow.document.close();
    newWindow.focus();
    newWindow.print();
  }
}

// Simple CTAButton component
type CTAButtonProps = {
  href: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
};

function CTAButton({ href, icon, children }: CTAButtonProps) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
      className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-white/30 bg-blue-700/80 hover:bg-blue-600 transition font-semibold shadow text-white"
    >
      {icon}
      {children}
    </a>
  );
}

function ResumePage() {
  const navItems = ["Projects", "Experience", "Education", "Achievements"];

  // Scroll to top handler
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // Animate container and items for fade-in
  const container = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.15, ease: "easeOut", duration: 0.8 } },
  };
  const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

  return (
    <main className="min-h-screen w-full bg-black text-white font-sans relative overflow-x-hidden px-4 md:px-0">
      {/* Navigation Bar */}
      <motion.nav
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full max-w-3xl mx-auto flex justify-center gap-10 sticky top-0 z-30 bg-gradient-to-r from-[#1a1b1f]/85 via-[#14151a]/85 to-[#0a0a0a]/85 py-6 rounded-b-3xl mb-12 backdrop-blur-3xl shadow-2xl"
      >
        {navItems.map((itemName) => (
          <motion.a
            key={itemName}
            variants={item}
            href={`#${itemName.toLowerCase()}`}
            className="text-lg text-blue-300 hover:text-blue-500 font-semibold cursor-pointer transition"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById(itemName.toLowerCase());
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            {itemName}
          </motion.a>
        ))}
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center z-10 pt-20 pb-12 max-w-3xl mx-auto"
      >
        <motion.h1
          variants={item}
          className={`text-[4rem] md:text-[6.5rem] font-extrabold leading-none tracking-tight select-none ${gradientText}`}
          style={{ letterSpacing: "-0.035em" }}
        >
          Akash Thakur
        </motion.h1>
        <motion.p variants={item} className="text-2xl md:text-4xl font-light text-blue-300 tracking-wide mt-3 select-none">
          Full Stack & AI SaaS Engineer
        </motion.p>
        <motion.p
          variants={item}
          className="mt-6 text-lg md:text-2xl text-blue-400 font-mono select-none max-w-xl text-center"
        >
          Ultra-minimal. Cinematic. Built for impact. Dedicated to crafting clean, scalable, and elegant solutions that push technology forward.
        </motion.p>
        <motion.div variants={item} className="mt-10 flex flex-row gap-8">
          <CTAButton href="https://github.com/ak2556" icon={<SiGithub className="h-6 w-6" />}>
            GitHub
          </CTAButton>
          <CTAButton href="https://linkedin.com/in/akash-thakur2556" icon={<SiLinkedin className="h-6 w-6" />}>
            LinkedIn
          </CTAButton>
          <CTAButton href="mailto:akashthakur2556@gmail.com">Email</CTAButton>
        </motion.div>
      </motion.section>

      {/* Tagline Section */}
      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        className="text-center mb-16 px-4 md:px-0 max-w-3xl mx-auto"
      >
        <motion.h2
          variants={item}
          className={`text-3xl md:text-5xl font-semibold bg-gradient-to-r from-white via-blue-400 to-white bg-clip-text text-transparent select-none`}
        >
          “Build the Future, Beautifully.”
        </motion.h2>
        <motion.p variants={item} className="mt-3 text-xl md:text-2xl text-blue-300 font-mono select-none max-w-lg mx-auto">
          Turning ambitious ideas into elegant, ultra-fast products — every single time.
        </motion.p>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full max-w-3xl mx-auto mb-16 rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 via-blue-900/10 to-white/5 shadow-lg p-8"
      >
        <motion.h3 variants={item} className="text-2xl font-semibold mb-7 text-blue-300 select-none">
          Projects
        </motion.h3>
        <motion.div variants={container} className="space-y-9">
          {/* NAVA-AI */}
          <motion.article variants={item} className="space-y-3">
            <h4 className="text-xl font-bold text-white select-none">NAVA-AI</h4>
            <p className="text-white/80 text-lg select-text leading-relaxed">
              A cutting-edge AI SaaS platform designed for startup founders and solopreneurs who need a reliable digital co-founder.  
              It supports real memory persistence across sessions, modular persona switching, and seamless integration with OpenRouter APIs and ChromaDB vector stores.  
              Built for lightning-fast response and a sleek, cinematic UI experience to boost productivity and creativity.
            </p>
            <a
              href="https://github.com/ak2556/nava-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-6 py-2 rounded-full border border-white/30 bg-blue-700/80 hover:bg-blue-600 transition font-semibold shadow text-white"
            >
              GitHub Repository
            </a>
          </motion.article>
          {/* akash.dev */}
          <motion.article variants={item} className="space-y-3">
            <h4 className="text-xl font-bold text-white select-none">akash.dev</h4>
            <p className="text-white/80 text-lg select-text leading-relaxed">
              A live, evolving developer portfolio inspired by Apple’s minimalism and Nothing’s style.  
              Crafted with Next.js, Tailwind CSS, and Framer Motion for smooth animations and high performance.  
              Every page is designed to be interactive, cinematic, and minimal, showcasing projects and skills with utmost clarity and elegance.
            </p>
            <div className="flex space-x-4 mt-2">
              <a
                href="https://github.com/ak2556/akashthakur.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 rounded-full border border-white/30 bg-blue-700/80 hover:bg-blue-600 transition font-semibold shadow text-white"
              >
                GitHub Repository
              </a>
              <a
                href="https://akashthakur-2ifnabs3q-ak2556s-projects.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 rounded-full border border-white/30 bg-blue-700/80 hover:bg-blue-600 transition font-semibold shadow text-white"
              >
                Live Demo
              </a>
            </div>
          </motion.article>
          {/* Empire-API */}
          <motion.article variants={item} className="space-y-3">
            <h4 className="text-xl font-bold text-white select-none">Empire-API</h4>
            <p className="text-white/80 text-lg select-text leading-relaxed">
              Enterprise-grade backend boilerplate for SaaS applications built with clean code, JWT authentication, rate limiting, and helmet security headers.  
              Designed to support rapid team onboarding and flexible deployment environments, Empire-API is the backbone for scalable, secure SaaS products.
            </p>
            <a
              href="https://github.com/ak2556/empire-api"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-6 py-2 rounded-full border border-white/30 bg-blue-700/80 hover:bg-blue-600 transition font-semibold shadow text-white"
            >
              GitHub Repository
            </a>
          </motion.article>
        </motion.div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        id="experience"
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full max-w-3xl mx-auto mb-16 rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 via-blue-900/10 to-white/5 shadow-lg p-8"
      >
        <motion.h3 variants={item} className="text-2xl font-semibold mb-7 text-blue-300 select-none">
          Experience
        </motion.h3>
        <motion.div variants={container} className="space-y-7">
          <motion.article variants={item}>
            <h4 className="font-bold text-xl text-blue-200 mb-1 select-none">Full MERN Stack Intern @ Sanssys Technologies</h4>
            <p className="text-white/70 mb-1 select-text">Jan 2025 – Jun 2025</p>
            <p className="text-white text-lg select-text leading-relaxed">
              Developed a full Employee Management System using JavaScript, PHP, MySQL, and XAMPP.  
              Designed a clean and intuitive UI, robust CRUD functionality, and secure login flow.  
              This project served as the major capstone for M.Sc IT, demonstrating backend and frontend integration expertise.
            </p>
          </motion.article>
          <motion.article variants={item}>
            <h4 className="font-bold text-xl text-blue-200 mb-1 select-none">IT Administrator @ The Knowledge Academy</h4>
            <p className="text-white/70 mb-1 select-text">May 2024 – Dec 2024</p>
            <p className="text-white text-lg select-text leading-relaxed">
              Managed IT operations and deployment automation for a busy educational institution.  
              Ensured high system reliability and optimized workflows to support a high-performance team environment.
            </p>
          </motion.article>
          <motion.article variants={item}>
            <h4 className="font-bold text-xl text-blue-200 mb-1 select-none">AutoCAD Intern @ Raja Plastics</h4>
            <p className="text-white/70 mb-1 select-text">Jan 2023 – Jul 2023</p>
            <p className="text-white text-lg select-text leading-relaxed">
              Created detailed production-grade CAD models, improving manufacturing workflow and documentation accuracy.  
              Collaborated with engineering teams to streamline design-to-production handoffs.
            </p>
          </motion.article>
        </motion.div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        id="education"
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full max-w-3xl mx-auto mb-16 rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 via-blue-900/10 to-white/5 shadow-lg p-8"
      >
        <motion.h3 variants={item} className="text-2xl font-semibold mb-7 text-blue-300 select-none">
          Education
        </motion.h3>
        <motion.div variants={container} className="space-y-6 text-white text-xl">
          <motion.div variants={item}>
            <span className="font-semibold text-blue-200 select-none">M.Sc IT</span> – DAV College, Hoshiarpur, 2023–2025<br />
            <span className="text-white/70 select-text">Completed with internship at Sanssys Technologies working on HR SaaS modules.</span>
          </motion.div>
          <motion.div variants={item}>
            <span className="font-semibold text-blue-200 select-none">BCA</span> – DAV College, Hoshiarpur, 2020–2023<br />
            <span className="text-white/70 select-text">Capstone Project: Employee Management System development with full-stack technologies.</span>
          </motion.div>
          <motion.div variants={item}>
            <span className="font-semibold text-blue-200 select-none">Diploma in AutoCAD</span> – Pt. J R College, 2018–2020
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Achievements Section */}
      <motion.section
        id="achievements"
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full max-w-3xl mx-auto mb-16 rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 via-blue-900/10 to-white/5 shadow-lg p-8"
      >
        <motion.h3 variants={item} className="text-2xl font-semibold mb-7 text-blue-300 select-none">
          Achievements
        </motion.h3>
        <motion.div
          variants={item}
          className="flex items-center justify-center"
        >
          <span className="px-10 py-3 bg-gradient-to-r from-yellow-300 to-blue-400 rounded-full font-bold text-black shadow-lg select-none">
            NCC C Certificate Holder
          </span>
        </motion.div>
        <motion.p variants={item} className="mt-5 text-center text-white text-xl select-text">
          Recognized for leadership, discipline, and national service as an NCC Cadet.
        </motion.p>
      </motion.section>

      {/* Back To Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Back to Top"
        className="fixed bottom-8 right-8 z-40 rounded-full bg-blue-700/80 hover:bg-blue-600 p-4 shadow-lg transition focus:outline-none focus:ring-2 focus:ring-blue-500"
        style={{ backdropFilter: "blur(8px)" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>

      {/* Download ATS Resume Button */}
      <button
        onClick={openATSResumeAndPrint}
        aria-label="Download ATS Resume"
        className="fixed bottom-20 right-8 z-40 rounded-full bg-green-600/85 hover:bg-green-500 p-4 shadow-lg transition focus:outline-none focus:ring-2 focus:ring-green-400"
        style={{ backdropFilter: "blur(8px)" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
        </svg>
      </button>

      <style>{`
        html, body { background: #101113; }
        @media (prefers-color-scheme: dark) { html, body { background: #101113 !important; } }
        @media print {
          button, nav {
            display: none !important;
          }
          html, body {
            background: white !important;
            color: black !important;
          }
        }
      `}</style>
    </main>
  );
}

export default ResumePage;