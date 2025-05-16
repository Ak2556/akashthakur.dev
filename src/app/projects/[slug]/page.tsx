'use client';

import { notFound } from 'next/navigation';
import projects from '../'; // <- This must be a plain array!

type Project = {
  slug: string;
  title: string;
  content: string;
  link?: string;
  tags?: string[];
  delay?: number;
};

// Minimal Project Card (safe to expand once working)
function ScrollRevealCard({
  title,
  content,
  link,
  tags = [],
}: Project) {
  return (
    <div
      style={{
        padding: '2rem',
        borderRadius: '1rem',
        border: '1px solid #eee',
        margin: '2rem auto',
        maxWidth: 640,
        background: 'rgba(255,255,255,0.05)',
      }}
    >
      <h2 style={{ fontWeight: 'bold', fontSize: 28, marginBottom: 12 }}>{title}</h2>
      <p style={{ color: '#ccc', marginBottom: 12 }}>{content}</p>
      {tags.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {tags.map((tag) => (
            <span key={tag} style={{
              fontSize: 12,
              background: '#111',
              color: '#fff',
              borderRadius: 12,
              padding: '3px 10px'
            }}>
              #{tag}
            </span>
          ))}
        </div>
      )}
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            marginTop: 20,
            color: '#00d8ff',
            textDecoration: 'underline'
          }}>
          Visit Project
        </a>
      )}
    </div>
  );
}

// FINAL, CORRECT DYNAMIC PAGE SIGNATURE!
export default function Page({ params }: { params: { slug: string } }) {
  const project = projects.find((p: Project) => p.slug === params.slug);
  if (!project) {
    notFound();
  }
  return (
    <main>
      <ScrollRevealCard {...project} />
    </main>
  );
}