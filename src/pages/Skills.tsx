import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

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

export default function Skills() {
  const skillCategories = [
    {
      title: "Core Development",
      skills: ["React & Vite", "TypeScript", "Tailwind CSS", "Framer Motion", "Python & Flask"]
    },
    {
      title: "Security & Systems",
      skills: ["Cybersecurity", "Cryptography (Ed25519)", "Non-repudiation", "System Architecture"]
    },
    {
      title: "Infrastructure & Tools",
      skills: ["Docker", "Nginx", "Git Lifecycle", "Moodle LMS", "Linux/Bash"]
    }
  ];

  return (
    <section id="skills" className="scroll-mt-32">
      <motion.div 
        className="py-12 min-h-[70vh] w-full"
        variants={scrollContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* CHANGED: Locked the left column to 280px and reduced the gap to tightly left-align the content */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-12 items-start relative">
          
          <motion.div 
            className="lg:sticky lg:top-32 flex flex-col space-y-6"
            variants={itemReveal}
          >
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter border-b-2 border-foreground pb-4">
              Technical Arsenal
            </h2>
            <p className="text-xl text-foreground/80 leading-relaxed max-w-sm">
              A curated stack of modern web technologies and security protocols focused on building fast, scalable, and secure applications.
            </p>
          </motion.div>

          <div className="flex flex-col space-y-16">
            {skillCategories.map((category, index) => (
              <motion.div 
                key={category.title} 
                className="space-y-6"
                variants={itemReveal}
              >
                <h3 className="text-2xl font-bold uppercase tracking-widest text-foreground/70">
                  <span className="text-sm border-b-2 border-foreground/30 pb-1 mr-4">0{index + 1}</span>
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-4">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="text-sm md:text-base uppercase border-2 border-foreground px-6 py-3 font-semibold tracking-wider hover:bg-foreground hover:text-background transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </motion.div>
    </section>
  );
}