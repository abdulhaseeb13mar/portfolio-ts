import { projects } from "@/data/projects";
import { useParams } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink } from "lucide-react";

export function ProjectDetailPage() {
  const { slug } = useParams({ from: "/projects/$slug" });
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <Link to="/projects" className="text-blue-600 hover:underline">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="mb-12">
        <Link to="/projects" className="inline-flex items-center text-sm text-zinc-500 hover:text-black dark:hover:text-white mb-6">
          <ArrowRight className="w-4 h-4 mr-2 rotate-180" /> Back to Projects
        </Link>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">{project.title}</h1>
        <div className="flex flex-wrap items-center gap-4 text-zinc-600 dark:text-zinc-400">
          <span className="font-medium text-black dark:text-white">{project.role}</span>
          <span>•</span>
          <span>{project.category}</span>
          <span>•</span>
          <div className="flex gap-2">
            {project.techStack.map((tech) => (
              <span key={tech} className="px-2 py-0.5 text-xs bg-zinc-100 dark:bg-zinc-800 rounded-full border border-zinc-200 dark:border-zinc-700">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <div className="aspect-video bg-zinc-200 dark:bg-zinc-800 rounded-2xl overflow-hidden mb-12 relative">
            <img src={project.heroImage} alt={`${project.title} Hero`} className="w-full h-full object-cover" />
          </div>

          <div className="prose dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">{project.problem || "Information coming soon..."}</p>

            <h2 className="text-2xl font-bold mb-4">The Solution</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">{project.solution || "Information coming soon..."}</p>

            <h2 className="text-2xl font-bold mb-4">The Results</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">{project.results || "Information coming soon..."}</p>
          </div>
        </div>

        <div className="lg:col-span-1 space-y-8">
          <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-6">Key Metrics</h3>
            <div className="grid grid-cols-1 gap-6">
              {project.metrics.map((metric) => (
                <div key={metric.metric}>
                  <div className="text-3xl font-bold mb-1">{metric.value}</div>
                  <div className="text-sm text-zinc-500">{metric.metric}</div>
                </div>
              ))}
            </div>
          </div>

          <button className="w-full py-4 bg-black dark:bg-white text-white dark:text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
            View Live Site <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
