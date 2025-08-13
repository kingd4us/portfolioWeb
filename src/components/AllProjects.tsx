import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

const AllProjects = () => {
  return (
    <div className="py-20 bg-white dark:bg-[#030712]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <Link
            to="/home"
            className="inline-flex items-center text-lg font-semibold text-black dark:text-white bg-gray-200 dark:bg-zinc-800 px-6 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-zinc-700 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-center my-8 text-black dark:text-white">
            All Projects
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} variant="grid" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
