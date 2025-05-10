import { loadProjects } from '@/lib/loadProjects';
import Hero from '@/components/Hero';
import ProjectGrid from '@/components/ProjectGrid';

export default function Home() {
  const projects = loadProjects();

  return (
    <main className="bg-black text-white px-6 py-28 md:py-36 overflow-x-hidden">
      <Hero />
      <ProjectGrid allProjects={projects} />
    </main>
  );
}
