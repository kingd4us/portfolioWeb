import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

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

export default function AllProjects() {
  const sliderRef = useRef<HTMLDivElement>(null);
  
  // Track the dragging state to handle mouse capture mechanics
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const projects = [
    {
      title: "Brevity",
      description: "A full-stack link-management web application.",
      tech: ["React", "Vite", "TypeScript", "Tailwind CSS"],
      image: "/projects/brevity.webp", 
    },
    {
      title: "Paper Finder",
      description: "A search engine application designed to assist in retrieving academic research using the arXiv API.",
      tech: ["Python", "Flask", "Docker"],
      image: "/projects/paper-finder.webp",
    },
    {
      title: "AI Campus Hub",
      description: "Orchestrated a 16-week material conversion project, creating comprehensive video lectures and structured LMS content.",
      tech: ["Moodle LMS", "Video Production"],
      image: "/projects/ai-campus.webp",
    },
    {
      title: "Crypto Handover",
      description: "Proof-of-concept structure involving Ed25519 and secure digital handovers for asset management.",
      tech: ["Cryptography", "System Architecture"],
      image: "/projects/crypto.webp",
    }
  ];

  // Mouse Drag Event Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    // Track the initial x coordinate relative to the slider container
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
  };

  const handleMouseLeaveOrUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault(); // Stop text highlighting or image ghosting during drag
    
    const x = e.pageX - sliderRef.current.offsetLeft;
    // Multiplier accelerates the scroll speed relative to physical cursor travel distance
    const walk = (x - startX.current) * 1.5; 
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <section id="work" className="scroll-mt-32 w-full">
      <motion.div 
        className="py-12 min-h-[70vh] w-full flex flex-col"
        variants={scrollContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        
        <motion.div variants={itemReveal} className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter border-b-2 border-foreground pb-4">
            Selected Work
          </h2>
        </motion.div>

        {/* THE DRAGGABLE SLIDER TRACK
          - "cursor-grab active:cursor-grabbing": Updates the pointer asset dynamically
          - "select-none": Prevents browser text highlight glitches while swiping
          - "snap-x": Keeps standard mobile/trackpad gestures working smoothly
        */}
        <motion.div 
          variants={itemReveal}
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeaveOrUp}
          onMouseUp={handleMouseLeaveOrUp}
          onMouseMove={handleMouseMove}
          className={`flex gap-8 overflow-x-auto pb-8 w-full select-none
            [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
            ${isDragging ? 'cursor-grabbing scroll-auto' : 'cursor-grab snap-x snap-mandatory scroll-smooth'}
          `}
        >
          {projects.map((project, index) => (
            <div 
              key={index}
              className="flex flex-col shrink-0 snap-start border-2 border-foreground bg-background w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,240,1)]"
            >
              {/* Card Image */}
              <div className="w-full h-48 md:h-56 border-b-2 border-foreground overflow-hidden bg-foreground/5 pointer-events-none">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow justify-between space-y-6">
                <div>
                  <h3 className="text-2xl font-bold uppercase tracking-widest mb-3">
                    {project.title}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed text-sm">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs font-bold uppercase tracking-wider border border-foreground/30 px-2 py-1">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 pt-4 border-t-2 border-foreground/10">
                    <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:opacity-70 transition-opacity">
                      <ExternalLink className="w-4 h-4" /> Live
                    </button>
                    <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:opacity-70 transition-opacity">
                      <Github className="w-4 h-4" /> Source
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

      </motion.div>
    </section>
  );
}