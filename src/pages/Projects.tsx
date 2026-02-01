import { projects } from "@/data/projects";
import { Link } from "@tanstack/react-router";

export function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">Selected Work</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Link key={project.id} to="/projects/$slug" params={{ slug: project.slug }} className="block group">
            <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden bg-zinc-50 dark:bg-zinc-900 transition-all hover:shadow-lg">
              <div className="aspect-video bg-zinc-200 dark:bg-zinc-800 relative overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={`${project.title} thumbnail`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">{project.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs bg-white dark:bg-black border border-zinc-200 dark:border-zinc-700 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
