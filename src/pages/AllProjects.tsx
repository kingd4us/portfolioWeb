import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import ProjectCard from '../components/ui/ProjectCard';
import { projects } from '../data/projects';

const scrollContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export default function AllProjects() {
  return (
    <motion.div 
      className="py-4 min-h-[70vh]"
      variants={scrollContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.h2 
        className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-12 border-b-2 border-foreground pb-4"
        variants={item}
      >
        Selected Work
      </motion.h2>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8" 
        variants={item}
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </motion.div>
    </motion.div>
  );
}