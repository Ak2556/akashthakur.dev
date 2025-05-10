'use client';

export default function SixtyProjectPage() {
  return (
    <main className="min-h-screen px-6 py-20 text-white bg-black">
      <h1 className="text-4xl font-bold mb-4">⚡ 60 Projects in 80 Days</h1>
      <h2 className="text-lg mb-4 text-white/70">
        An insane build challenge to sharpen every coding muscle.
      </h2>
      <div className="flex flex-wrap gap-3 mb-6">
        {['Frontend', 'Backend', 'CLI', 'Full-Stack', 'Productivity'].map((tag) => (
          <span key={tag} className="bg-white/10 text-white text-sm px-3 py-1 rounded-full border border-white/20">#{tag}</span>
        ))}
      </div>
      <p className="text-white/80 leading-relaxed max-w-3xl">
        From frontend UIs to full backend systems, this challenge sharpened reflexes, deepened understanding, and unlocked creative problem-solving.
      </p>
    </main>
  );
}