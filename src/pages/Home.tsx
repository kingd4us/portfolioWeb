import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Download } from 'lucide-react';

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

export default function Home() {
  return (
    <motion.div 
      className="flex flex-col justify-center min-h-[70vh] max-w-3xl"
      variants={scrollContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.h1 
        className="text-5xl md:text-7xl font-bold uppercase tracking-tighter"
        variants={item}
      >
        Firdaus Hamonangan Manalu
      </motion.h1>
      
      <motion.div 
        className="mt-8 space-y-6 text-lg md:text-xl text-foreground/80 leading-relaxed"
        variants={item}
      >
        <p>
          Information Technology undergraduate at President University.
        </p>
        <p>
          Specializing in modern full-stack web development alongside a strong focus on cybersecurity and non-repudiation frameworks.
        </p>
        
        <motion.div className="pt-4" variants={item}>
          <a 
            href="/cv.pdf" 
            download="Firdaus_H_Manalu_CV.pdf"
            className="inline-flex items-center gap-2 border-2 border-foreground px-6 py-3 font-semibold uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors duration-300"
          >
            <Download className="w-5 h-5" />
            Download CV
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}