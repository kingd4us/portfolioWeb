import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full border-t-2 border-foreground py-8 px-6 mt-12 bg-background">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm font-semibold uppercase tracking-widest">
          © {new Date().getFullYear()} Firdaus H. Manalu
        </p>
        <div className="flex space-x-6">
          <a 
            href="https://github.com/kingd4us" 
            target="_blank" 
            rel="noreferrer" 
            className="hover:text-foreground/60 transition-colors duration-300"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6 stroke-[1.5]" />
          </a>
          <a 
            href="https://linkedin.com/in/firdaus-manalu" 
            target="_blank" 
            rel="noreferrer" 
            className="hover:text-foreground/60 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6 stroke-[1.5]" />
          </a>
          <a 
            href="mailto:your.email@example.com" 
            className="hover:text-foreground/60 transition-colors duration-300"
            aria-label="Email"
          >
            <Mail className="w-6 h-6 stroke-[1.5]" />
          </a>
        </div>
      </div>
    </footer>
  );
}