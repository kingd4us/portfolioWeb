import { Link } from 'react-router-dom'
import { ExternalLink, Github, ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'

const AllProjects = () => {
  const projects = [
    {
      category: 'DEVELOPMENT',
      year: '2024',
      title: 'SecureShop Platform',
      description: 'Full-stack e-commerce platform with advanced security features, payment integration, and real-time inventory management.',
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      category: 'SECURITY',
      year: '2024',
      title: 'ThreatWatch Analytics',
      description: 'Real-time threat monitoring dashboard with ML-powered anomaly detection. Processes network traffic and identifies potential security breaches.',
      technologies: ['Python', 'Flask', 'TensorFlow', 'Redis'],
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      category: 'DESIGN',
      year: '2023',
      title: 'Creative Agency Portfolio',
      description: 'A visually-driven portfolio website for a creative agency, focusing on animations, user experience, and a clean, modern design.',
      technologies: ['UI/UX', 'Figma', 'React', 'GSAP'],
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      links: {
        demo: '#',
        github: '#'
      }
    }
  ]

  return (
    <div className="py-20 bg-white dark:bg-[#030712]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <Link to="/home" className="inline-flex items-center text-lg font-semibold text-black dark:text-white bg-gray-200 dark:bg-zinc-800 px-6 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-zinc-700 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-center my-8 text-black dark:text-white">All Projects</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
             <motion.div
              key={index}
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
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-gray-200 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-end space-x-4">
                  <a href={project.links.demo} className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"><ExternalLink size={18} /></a>
                  <a href={project.links.github} className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"><Github size={18} /></a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AllProjects