import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import ContactForm from '../components/ui/ContactForm';
import { Mail, Briefcase } from 'lucide-react';

const scrollContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemReveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const photoReveal: Variants = {
  hidden: { opacity: 0, x: 25 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-32">
      <motion.div 
        className="py-12 min-h-[70vh] w-full"
        variants={scrollContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-bold uppercase tracking-tighter border-b-2 border-foreground pb-4 mb-16"
          variants={itemReveal}
        >
          Let's Connect
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-12 lg:gap-16 items-start">
          
          {/* CHANGED: Added "order-2 lg:order-1" so it stays second on mobile, but first on desktop */}
          <motion.div
            className="flex flex-col space-y-10 order-2 lg:order-1"
            variants={itemReveal}
          >
            <div className="space-y-6 text-xl text-foreground/80 leading-relaxed max-w-xl">
              <p>
                Whether you have a specific question about my work, want to discuss web development, 
                or collaborate on a new project, drop a message below.
              </p>
              <div className="flex flex-col gap-3 text-lg font-medium">
                <span className="flex items-center gap-3">
                  <Mail className="w-6 h-6 text-foreground" />
                  Firdaus H. Manalu
                </span>
                <span className="flex items-center gap-3">
                  <Briefcase className="w-6 h-6 text-foreground" />
                  Full-Stack Web Development | AI Technician
                </span>
              </div>
            </div>
            
            <ContactForm />
          </motion.div>
          
          {/* CHANGED: Added "order-1 lg:order-2" and added mb-8 on mobile to give space below the photo */}
          <motion.div
            className="flex justify-center items-start w-full max-w-sm lg:max-w-none mx-auto lg:mx-0 lg:pt-1 order-1 lg:order-2 mb-8 lg:mb-0"
            variants={photoReveal}
          >
            <img 
              src="/profile/firdaus-headshot.webp" 
              alt="Firdaus Hamonangan Manalu" 
              className="w-full h-auto aspect-square object-cover grayscale hover:grayscale-0 border-2 border-foreground shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,240,1)] transition-all duration-700 ease-[0.22, 1, 0.36, 1]" 
            />
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}