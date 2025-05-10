'use client';

export default function PortfolioPage() {
  return (
    <main className="min-h-screen px-6 py-20 text-white bg-black">
      <h1 className="text-4xl font-bold mb-4">🛠 Akash.dev</h1>
      <h2 className="text-lg mb-4 text-white/70">
        Cinematic developer portfolio inspired by Apple, built with Next.js 15.
      </h2>
      <div className="flex flex-wrap gap-3 mb-6">
        {['Next.js', 'Tailwind', 'Framer Motion', 'Vercel'].map((tag) => (
          <span key={tag} className="bg-white/10 text-white text-sm px-3 py-1 rounded-full border border-white/20">#{tag}</span>
        ))}
      </div>
      <p className="text-white/80 leading-relaxed max-w-3xl">
        A handcrafted portfolio to impress founders and CTOs. Lightning fast, responsive, and terminal-first.
      </p>
    </main>
  );
}