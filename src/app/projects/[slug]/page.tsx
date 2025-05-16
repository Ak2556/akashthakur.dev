'use client';

import { notFound } from 'next/navigation';
import projects from '../';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

type Project = {
  slug: string;
  title: string;
  content: string;
  link?: string;
  tags?: string[];
  delay?: number;
};

/* ------------------------------------------------------------------ */
/*  Local card component (not exported)                               */
/* ------------------------------------------------------------------ */
function ProjectCard({ title, content, link, tags = [] }: Project) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8 } }
          : {}
      }
      className="bg-white/10 border border-white/20 p-6 rounded-xl backdrop-blur-lg shadow-lg"
    >
      <h2 className="text-2xl font-semibold mb-3">{title}</h2>
      <p className="mb-4 text-white/90">{content}</p>

      {tags.length > 0 && (
        <ul className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <li
              key={tag}
              className="px-2 py-1 text-xs bg-white/20 rounded-full"
            >
              #{tag}
            </li>
          ))}
        </ul>
      )}

      {link && (
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-sky-400"
        >
          Visit&nbsp;project ↗
        </Link>
      )}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Dynamic route page — typed inline, no alias, no async             */
/* ------------------------------------------------------------------ */
export default function Page({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find(
    (p: Project) => p.slug === params.slug
  );

  if (!project) notFound();

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <ProjectCard {...project} />
    </main>
  );
}