import scrapperImage from '../assets/scrapper.png';
import brevityImage from '../assets/brevity.png';

export interface Project {
  id: string;
  category: string;
  year: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  links: {
    demo?: string;
    github?: string;
  };
}

export const projects: Project[] = [
  {
    id: 'cybersecurity-scrapper',
    category: 'DEVELOPMENT',
    year: '2024',
    title: 'Cybersecurity Paper Downloader',
    description: 'This web application simplifies cybersecurity research by allowing users to easily search for and download academic papers from arXiv, providing quick access to titles, authors, and direct PDF links.',
    technologies: ['Flask', 'HTML+CSS', 'Docker', 'arXiv API'],
    image: scrapperImage,
    links: {
      demo: '#',
      github: 'https://github.com/kingd4us/webScrapper.git'
    }
  },
  {
    id: 'brevity-platform',
    category: 'FULL-STACK DEVELOPMENT',
    year: '2025',
    title: 'Brevity | A Link-in-Bio Platform',
    description: 'A complete, full-stack link-sharing application built from scratch. It features a secure backend API and a dynamic React frontend, allowing users to create and manage a personalized public page with custom, reorderable links and social media icons.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'TypeScript', 'Tailwind CSS'],
    image: brevityImage,
    links: {
      demo: 'https://brevity-eta.vercel.app/',
      github: 'https://github.com/kingd4us/Brevity.git'
    }
  },
];