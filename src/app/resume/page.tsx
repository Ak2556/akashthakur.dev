'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const SectionHeader = ({ title }: { title: string }) => (
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="text-2xl sm:text-3xl font-bold border-l-4 border-white pl-4 mb-6 text-white uppercase tracking-wide"
  >
    {title}
  </motion.h2>
);

const Resume = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-neutral-900 to-black text-white px-6 py-16">
      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="text-center mb-20"
      >
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-4">
          Akash Thakur
        </h1>
        <p className="text-gray-400 text-lg sm:text-xl">
          Full Stack SaaS Developer • AI Builder • Terminal-First Engineer
        </p>
      </motion.div>

      {/* PROJECTS */}
      <section className="max-w-4xl mx-auto mb-20">
        <SectionHeader title="Projects" />
        <div className="space-y-10">
          {[
            {
              title: '🧠 NAVA-AI',
              desc: 'Your personal AI co-founder: startup validation, contextual memory, and real-time business dashboards.',
            },
            {
              title: '🔐 Empire_API',
              desc: 'JWT-auth SaaS backend with RBAC, Stripe billing, and secure MongoDB. Designed for product-grade scale.',
            },
            {
              title: '🌐 Akash.dev',
              desc: 'This portfolio. Cinematic UI, responsive animations, and built entirely with Next.js App Router.',
            },
          ].map((proj, i) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group border border-white/10 rounded-lg p-6 bg-white/5 hover:bg-white/10 transition"
            >
              <h3 className="text-xl font-semibold text-white mb-1">{proj.title}</h3>
              <p className="text-gray-300 text-base">{proj.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="max-w-4xl mx-auto mb-20">
        <SectionHeader title="Skills & Stack" />
        <div className="flex flex-wrap gap-3">
          {[
            'JavaScript', 'TypeScript', 'React', 'Next.js', 'FastAPI',
            'Node.js', 'MongoDB', 'Docker', 'TailwindCSS', 'Git'
          ].map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="bg-white text-black px-3 py-1 rounded-full text-sm font-medium"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section className="max-w-4xl mx-auto mb-20">
        <SectionHeader title="Education" />
        <div className="text-gray-300 space-y-2">
          <p className="text-lg">🎓 M.Sc IT – DAV College Hoshiarpur (2023)</p>
          <p className="text-sm text-gray-500">Final Project: EMS with payroll (PHP + MySQL)</p>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="max-w-4xl mx-auto mb-20">
        <SectionHeader title="Certifications & Experience" />
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>NCC C Certificate</li>
          <li>Diploma in Polymer & AutoCAD (2019)</li>
          <li>Internship at Sanssys Technologies — Full Stack Developer</li>
        </ul>
      </section>

  
    </main>
  );
};

export default Resume;