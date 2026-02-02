import { useMemo, useState } from "react";

import { projects } from "@/data/projects";
import { useParams } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";

export function ProjectDetailPage() {
  const { slug } = useParams({ from: "/projects/$slug" });
  const project = projects.find((p) => p.slug === slug);
  const [lightboxIndex, setLightboxIndex] = useState<number>(-1);

  const images = useMemo(() => {
    if (project?.allImages?.length) {
      return project.allImages;
    }

    if (project?.gallery?.length) {
      return [project.heroImage, ...project.gallery].filter(Boolean);
    }

    return project?.heroImage ? [project.heroImage] : [];
  }, [project]);

  const slides = useMemo(() => images.map((src) => ({ src })), [images]);

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

          {images.length > 0 && (
            <section className="mt-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Gallery</h2>
                <span className="text-sm text-zinc-500">{images.length} images</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {images.map((src, index) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setLightboxIndex(index)}
                    className="group relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                    aria-label={`Open image ${index + 1} for ${project.title}`}
                  >
                    <div className="aspect-4/3">
                      <img
                        src={src}
                        alt={`${project.title} screenshot ${index + 1}`}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  </button>
                ))}
              </div>
            </section>
          )}

          <div className="prose dark:prose-invert max-w-none mt-12">
            <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 whitespace-pre-line">{project.problem || "Information coming soon..."}</p>

            <h2 className="text-2xl font-bold mb-4">The Solution</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 whitespace-pre-line">{project.solution || "Information coming soon..."}</p>

            <h2 className="text-2xl font-bold mb-4">The Results</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 whitespace-pre-line">{project.results || "Information coming soon..."}</p>
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

          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="w-full py-4 bg-black dark:bg-white text-white dark:text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              View Live Site <ExternalLink className="w-4 h-4" />
            </a>
          ) : (
            <button
              type="button"
              disabled
              className="w-full py-4 bg-zinc-200 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 font-bold rounded-xl flex items-center justify-center gap-2 cursor-not-allowed"
            >
              Live link unavailable
            </button>
          )}
        </div>
      </div>

      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={slides}
        plugins={[Thumbnails]}
        thumbnails={{ position: "bottom" }}
      />
    </div>
  );
}
