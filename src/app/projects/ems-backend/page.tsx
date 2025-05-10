'use client';

export default function EMSPage() {
  return (
    <main className="min-h-screen px-6 py-20 text-white bg-black">
      <h1 className="text-4xl font-bold mb-4">🧮 EMS Backend</h1>
      <h2 className="text-lg mb-4 text-white/70">
        A payroll-integrated Employee Management System backend.
      </h2>
      <div className="flex flex-wrap gap-3 mb-6">
        {['PHP', 'MySQL', 'CRUD', 'Bootstrap'].map((tag) => (
          <span key={tag} className="bg-white/10 text-white text-sm px-3 py-1 rounded-full border border-white/20">#{tag}</span>
        ))}
      </div>
      <p className="text-white/80 leading-relaxed max-w-3xl">
        Developed as a final year project, this backend supports employee records, payroll logic, leave tracking, and admin roles.
      </p>
    </main>
  );
}