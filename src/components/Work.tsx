import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

const Work = () => {
  // Show only first 2 projects for the home page preview
  const featuredProjects = projects.slice(0, 2)

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
            {featuredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                variant="featured" 
                index={index} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work;