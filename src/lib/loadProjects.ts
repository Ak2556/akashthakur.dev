import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type Project = {
  title: string;
  emoji: string;
  tags: string[];
  link: string;
  description: string;
};

export function loadProjects(): Project[] {
  const dir = path.join(process.cwd(), 'content/projects');
  const files = fs.readdirSync(dir);
  return files.map((file) => {
    const raw = fs.readFileSync(path.join(dir, file), 'utf-8');
    const { data } = matter(raw);
    return data as Project;
  });
}
