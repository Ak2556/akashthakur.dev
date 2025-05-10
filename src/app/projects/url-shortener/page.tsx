'use client';

export default function URLShortenerPage() {
  return (
    <main className="min-h-screen px-6 py-20 text-white bg-black">
      <h1 className="text-4xl font-bold mb-4">🔗 Smart URL Shortener</h1>
      <h2 className="text-lg mb-4 text-white/70">
        Advanced link shortener with analytics, QR, and chart insights.
      </h2>
      <div className="flex flex-wrap gap-3 mb-6">
        {['MERN', 'Redis', 'Chart.js', 'QR'].map((tag) => (
          <span key={tag} className="bg-white/10 text-white text-sm px-3 py-1 rounded-full border border-white/20">#{tag}</span>
        ))}
      </div>
      <p className="text-white/80 leading-relaxed max-w-3xl">
        Tracks clicks, source devices, and lets users shorten + analyze links. Includes real-time chart dashboards.
      </p>
    </main>
  );
}