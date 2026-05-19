import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export default function ProjectCard({ title, description, tech, githubUrl, liveUrl }: ProjectCardProps) {
  return (
    <div className="border-2 border-foreground p-6 hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,240,1)] bg-background transition-all duration-300 flex flex-col justify-between h-full group">
      <div>
        <h3 className="text-2xl font-bold uppercase tracking-tight group-hover:text-foreground/70 transition-colors">{title}</h3>
        <p className="mt-3 opacity-90 text-foreground/80 leading-relaxed">{description}</p>
      </div>
      
      <div className="mt-8 space-y-6">
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span key={t} className="text-xs uppercase border border-foreground/30 px-2 py-1 font-semibold tracking-wider">
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-4 pt-4 border-t-2 border-foreground/10">
          {githubUrl && (
            <a 
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-foreground/60 transition-colors"
            >
              <Github className="w-4 h-4" /> Source
            </a>
          )}
          {liveUrl && (
            <a 
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-foreground/60 transition-colors"
            >
              <ExternalLink className="w-4 h-4" /> Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
}