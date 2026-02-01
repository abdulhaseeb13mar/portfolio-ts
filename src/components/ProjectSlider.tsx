import { useRef } from "react";

import { type Project } from "@/types";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectSliderProps {
  projects: Project[];
}

export function ProjectSlider({ projects }: ProjectSliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      // Scroll by the width of a card plus gap
      const scrollAmount = 424; // 400px card + 24px gap
      scrollRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">More Projects</h2>
          <div className="flex gap-4">
            <button
              onClick={() => scroll("left")}
              className="group p-4 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-sm hover:shadow-md hover:border-blue-600 dark:hover:border-blue-600 transition-all"
              aria-label="Previous projects"
            >
              <ChevronLeft className="w-6 h-6 text-zinc-600 dark:text-zinc-400 group-hover:text-blue-600 transition-colors" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="group p-4 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-sm hover:shadow-md hover:border-blue-600 dark:hover:border-blue-600 transition-all"
              aria-label="Next projects"
            >
              <ChevronRight className="w-6 h-6 text-zinc-600 dark:text-zinc-400 group-hover:text-blue-600 transition-colors" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {projects.map((project) => (
            <div key={project.id} className="min-w-[300px] md:min-w-[400px] snap-center">
              <div className="group rounded-xl overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all h-full flex flex-col">
                <div className="aspect-video overflow-hidden relative bg-zinc-100 dark:bg-zinc-800">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div className="text-blue-600 text-sm font-medium">{project.category}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    <Link to="/projects/$slug" params={{ slug: project.slug }} className="hover:text-blue-600 transition-colors block">
                      {project.title}
                    </Link>
                  </h3>
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm line-clamp-2 mb-6 flex-1">{project.summary}</p>
                  <Link
                    to="/projects/$slug"
                    params={{ slug: project.slug }}
                    className="text-sm font-bold flex items-center gap-2 hover:text-blue-600 transition-colors self-start"
                  >
                    View Case Study <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
