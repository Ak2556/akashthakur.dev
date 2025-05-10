'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Project = {
  title: string;
  emoji: string;
  tags: string[];
  link: string;
  description: string;
  github?: string;
  docker?: string;
};

export default function ProjectGrid({ allProjects }: { allProjects: Project[] }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'AI', 'Full Stack', 'Frontend', 'Backend', 'Portfolio', 'Challenge'];

  const primaryProjects = allProjects.filter(p =>
    ['Nava-AI', 'Empire_API', 'akashthakur.dev'].includes(p.title)
  );
  const secondaryProjects = allProjects.filter(
    p => !['Nava-AI', 'Empire_API', 'akashthakur.dev'].includes(p.title)
  );

  const filterProjects = (projects: Project[]) =>
    activeCategory === 'All'
      ? projects
      : projects.filter((proj) => proj.tags.includes(activeCategory));

  const transition = { duration: 2.5, ease: [0.22, 1, 0.36, 1] };

  const renderProjectCard = (proj: Project, i: number) => (
    <motion.div
      key={proj.title}
      className="group bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-white/40 hover:shadow-xl transition-all duration-500 backdrop-blur-md relative overflow-hidden hover:scale-[1.02]"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 60 }}
      transition={{ ...transition, delay: 0.2 + i * 0.2 }}
    >
      <span className="absolute inset-0 z-0 bg-gradient-to-tr from-white/5 via-white/10 to-white/5 opacity-0 group-hover:opacity-10 transition duration-700 pointer-events-none blur-sm" />
      
      <a
        href={proj.link}
        className="relative z-10 block mb-2 text-2xl font-bold group-hover:scale-105 group-hover:text-white transition-all duration-300"
      >
        {proj.emoji} {proj.title}
      </a>

      <p className="relative z-10 text-white/70 text-sm mb-2">{proj.description}</p>
      
      <div className="relative z-10 flex flex-wrap gap-2 mt-2">
        {proj.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-white/10 text-white px-2 py-0.5 rounded-full border border-white/20"
          >
            #{tag}
          </span>
        ))}
      </div>
      
      <div className="relative z-10 flex gap-2 mt-4">
        {proj.github && (
          <a
            href={proj.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs px-3 py-1 bg-white text-black rounded-full font-semibold hover:bg-white/80 transition"
          >
            GitHub
          </a>
        )}
        {proj.docker && (
          <a
            href={proj.docker}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs px-3 py-1 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition"
          >
            Docker
          </a>
        )}
      </div>
    </motion.div>
  );

  return (
    <section className="mt-40 max-w-6xl mx-auto">
      <motion.h2
        className="text-4xl md:text-6xl font-black text-center tracking-tight bg-gradient-to-br from-white via-gray-400 to-white text-transparent bg-clip-text mb-16 drop-shadow-[0_2px_10px_rgba(255,255,255,0.25)]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        Featured Projects
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full border text-sm transition-all duration-300 ${
              activeCategory === cat
                ? 'bg-white text-black font-semibold'
                : 'border-white/30 text-white/60 hover:bg-white/10'
            }`}
          >
            #{cat}
          </button>
        ))}
      </div>

      <div className="space-y-20">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-white/80 mb-6">Primary Projects</h3>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence>
              {filterProjects(primaryProjects).map(renderProjectCard)}
            </AnimatePresence>
          </div>
        </div>

        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-white/60 mb-6">Secondary Projects</h3>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence>
              {filterProjects(secondaryProjects).map(renderProjectCard)}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}