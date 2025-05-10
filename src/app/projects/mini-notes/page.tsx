'use client';

export default function MiniNotesPage() {
  return (
    <main className="min-h-screen px-6 py-20 text-white bg-black">
      <h1 className="text-4xl font-bold mb-4">📝 Mini Notes</h1>
      <h2 className="text-lg mb-4 text-white/70">
        Markdown-ready note app with live preview and autosave.
      </h2>
      <div className="flex flex-wrap gap-3 mb-6">
        {['React', 'Express', 'MongoDB', 'Markdown'].map((tag) => (
          <span key={tag} className="bg-white/10 text-white text-sm px-3 py-1 rounded-full border border-white/20">#{tag}</span>
        ))}
      </div>
      <p className="text-white/80 leading-relaxed max-w-3xl">
        A lightweight and elegant note app, great for developers who love markdown and clean UI.
      </p>
    </main>
  );
}