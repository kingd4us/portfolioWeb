import { Link } from 'react-router-dom'
import { ExternalLink, Github } from 'lucide-react'
import { motion } from 'framer-motion'
import myImage from '../assets/scrapper.png' // Adjust the path as necessary

const Work = () => {
  const projects = [
    {
      category: 'DEVELOPMENT',
      year: '2024',
      title: 'Cybersecurity Paper Downloader',
      description: 'This web application simplifies cybersecurity research by allowing users to easily search for and download academic papers from arXiv, providing quick access to titles, authors, and direct PDF links.',
      technologies: ['Flask', 'HTML+CSS', 'Docker', 'arXiv API'],
      image: myImage,
      links: {
        demo: '#',
        github: 'https://github.com/kingd4us/webScrapper.git'
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
    }
  ]

  return (
    <section id="work" className="py-20 bg-white dark:bg-[#030712] border-b border-gray-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Sticky Title */}
          <div className="lg:col-span-1">
            <div className="sticky-section">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-8">
                PROJECTS
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                A selection of standout projects that blend creativity, technology, and security.
              </p>
              <Link
                to="/work"
                className="text-black dark:text-white hover:underline flex items-center space-x-2"
              >
                <span>VIEW ALL WORK</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Projects List */}
          <div className="lg:col-span-2 space-y-16">
            {projects.map((project, index) => (
               <motion.div
                key={index}
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
                      <a href={project.links.demo} className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"><ExternalLink size={20} /></a>
                      <a href={project.links.github} className="_blank text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors" target='_blank'><Github size={20} /></a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work;