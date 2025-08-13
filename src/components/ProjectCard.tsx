import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  variant?: 'grid' | 'featured';
  index?: number;
}

const ProjectCard = ({ project, variant = 'grid', index = 0 }: ProjectCardProps) => {
  if (variant === 'featured') {
    return (
      <motion.div
        whileHover={{ y: -5, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)" }}
        className="group bg-gray-50 dark:bg-zinc-900 rounded-lg overflow-hidden border border-gray-200 dark:border-zinc-800"
      >
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-0 items-center`}>
          {/* Project Image */}
          <div className={`relative overflow-hidden h-full ${index % 2 === 1 ? 'md:order-2' : ''}`}>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Project Info */}
          <div className={`p-8 md:p-12 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs text-gray-500 dark:text-gray-400 tracking-wider">
                {project.category}
              </span>
              <span className="text-xs text-gray-400 dark:text-gray-500">
                {project.year}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-gray-200 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 text-sm rounded">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-end space-x-6">
              {project.links.demo && (
                <a 
                  href={project.links.demo} 
                  className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={20} />
                </a>
              )}
              {project.links.github && (
                <a 
                  href={project.links.github} 
                  className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={20} />
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="group bg-gray-50 dark:bg-zinc-900 rounded-lg overflow-hidden border border-gray-200 dark:border-zinc-800"
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-60 object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs text-gray-500 dark:text-gray-400 tracking-wider">
            {project.category}
          </span>
          <span className="text-xs text-gray-400 dark:text-gray-500">
            {project.year}
          </span>
        </div>
        <h3 className="text-xl font-bold text-black dark:text-white mb-3">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-sm">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span key={tech} className="px-2 py-1 bg-gray-200 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 text-xs rounded">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-end space-x-4">
          {project.links.demo && (
            <a 
              href={project.links.demo} 
              className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={18} />
            </a>
          )}
          {project.links.github && (
            <a 
              href={project.links.github} 
              className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={18} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;