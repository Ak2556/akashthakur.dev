export interface Project {
  slug: string;
  title: string;
  content: string;
  link?: string;
  tags?: string[];
  delay?: number;
}

const projects: Project[] = [
  {
    slug: 'akash-dev',
    title: 'Akash Dev',
    content: 'Description here…',
    link: 'https://github.com/Ak2556/akash-dev',
    tags: ['Next.js', 'TypeScript'],
    delay: 0,
  },
  {
    slug: 'nava-ai',
    title: 'Nava AI',
    content: '…',
    tags: ['FastAPI', 'OpenAI'],
  },
  // add other projects here
];

export default projects;
