'use client';

import { notFound } from 'next/navigation';
import projects from '../';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';

type Project = {
  slug: string;
  title: string;
  content: string;
  link?: string;
  tags?: string[];
  delay?: number;
};

function ScrollRevealCard({
  title,
  content,
  link,
  tags = [],
  delay = 0,
}: Project) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });

  const card = (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.95, rotateX: -10 }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              scale: 1,
              rotateX: 0,
              transition: {
                duration: 1.5,
                delay,
                ease: [0.25, 1, 0.5, 1],
              },
            }
          : {}
      }
      className="bg-white/5 border border-white/10 p-6 rounded-xl shadow-xl hover:shadow-2xl hover:bg-white/10 transition-all duration-500 backdrop-blur-lg cursor-pointer"
    >
      <h2 className="text-xl font-semibold text-primary mb-2">{title}</h2>
      <p className="text-white/90 leading-relaxed mb-3">{content}</p>
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-white/10 border border-white/20 px-2 py-1 rounded-full text-white/80"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );

  return link ? <Link href={link}>{card}</Link> : card;
}

// ✅ NO async/await, NO Promise, just plain function
export default function Page({ params }: { params: { slug: string } }) {
  const project = projects.find((p: Project) => p.slug === params.slug);
  if (!project) {
    notFound();
  }
  return (
    <main className="px-4 py-12 max-w-4xl mx-auto">
      <ScrollRevealCard {...project} />
    </main>
  );
}