import { Hero } from "../components/Hero";
import { ProjectSlider } from "../components/ProjectSlider";
import { Stats } from "../components/Stats";
import { projects } from "@/data/projects";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <>
      <Hero />
      <Stats />

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Selected Work</h2>
              <p className="text-zinc-500 max-w-md">A collection of projects showcasing my expertise in frontend development and product design.</p>
            </div>
            <Link to="/projects" className="hidden md:flex items-center gap-2 font-medium hover:text-blue-600 transition-colors">
              View all projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid gap-12">
            {featuredProjects.map((project, index) => (
              <div key={project.id} className={`group grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}>
                <div
                  className={`rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 aspect-video relative ${index % 2 === 1 ? "md:col-start-2" : ""}`}
                >
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className={index % 2 === 1 ? "md:col-start-1" : ""}>
                  <div className="text-blue-600 font-medium mb-2">{project.category}</div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-blue-600 transition-colors">
                    <Link to="/projects/$slug" params={{ slug: project.slug }}>
                      {project.title}
                    </Link>
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-6 text-lg">{project.summary}</p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {project.metrics.map((metric) => (
                      <div key={metric.metric}>
                        <div className="text-xl font-bold">{metric.value}</div>
                        <div className="text-sm text-zinc-500">{metric.metric}</div>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/projects/$slug"
                    params={{ slug: project.slug }}
                    className="inline-flex items-center font-bold border-b-2 border-black dark:border-white hover:border-blue-600 hover:text-blue-600 transition-colors pb-1"
                  >
                    Read Case Study
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link to="/projects" className="inline-flex items-center gap-2 font-medium hover:text-blue-600 transition-colors">
              View all projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <ProjectSlider projects={projects} />

      <section className="py-24 bg-zinc-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to start your project?</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
            I am currently accepting new freelance clients. Let's discuss how we can work together.
          </p>
          <Link to="/contact" className="inline-block px-10 py-5 bg-white text-black font-bold rounded-full text-lg hover:bg-zinc-200 transition-colors">
            Let's Talk
          </Link>
        </div>
      </section>
    </>
  );
}
