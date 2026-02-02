import { useMemo, useState } from "react";

import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

function CategoryFilter({ categories, selected, onSelect }: { categories: string[]; selected: string; onSelect: (c: string) => void }) {
  return (
    <div className="flex flex-wrap gap-2 mb-12 justify-center">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={cn(
            "relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300",
            selected === category ? "text-white" : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200",
          )}
        >
          {selected === category && (
            <motion.div
              layoutId="activeCategory"
              className="absolute inset-0 bg-zinc-900 dark:bg-zinc-100 rounded-full"
              initial={false}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
          <span className="relative z-10 mix-blend-exclusion">{category}</span>
        </button>
      ))}
    </div>
  );
}

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={cn(
        "group relative rounded-3xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/10 overflow-hidden flex flex-col h-full hover:border-zinc-300 dark:hover:border-white/20 transition-colors",
        project.featured ? "md:col-span-2 md:grid md:grid-cols-2" : "col-span-1",
      )}
    >
      {/* Variable Aspect Ratio Container */}
      <div className={cn("relative overflow-hidden bg-zinc-100 dark:bg-zinc-800", project.featured ? "h-64 md:h-auto w-full aspect-auto" : "aspect-4/3")}>
        <img src={project.thumbnail} alt={project.title} className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-zinc-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
          <div className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm p-2 rounded-full shadow-lg">
            <ArrowUpRight className="w-5 h-5 text-zinc-900 dark:text-white" />
          </div>
        </div>
      </div>

      <div className="flex flex-col p-6 md:p-8 grow">
        <div className="mb-4">
          {/* Category & Featured Badge */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">{project.category}</span>
            {project.featured && (
              <span className="px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-[10px] font-bold uppercase tracking-wider border border-amber-200 dark:border-amber-800">
                Featured
              </span>
            )}
          </div>

          <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2 leading-tight">{project.title}</h3>
          <p className="text-zinc-600 dark:text-zinc-400 line-clamp-3 text-sm leading-relaxed">{project.summary}</p>
        </div>

        <div className="mt-auto pt-4 flex flex-wrap gap-2">
          {project.techStack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 text-xs font-medium border border-zinc-200 dark:border-zinc-700"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="px-2.5 py-1 rounded-md bg-zinc-50 dark:bg-zinc-800/50 text-zinc-400 dark:text-zinc-500 text-xs font-medium border border-transparent">
              +{project.techStack.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Full card link */}
      <Link
        to="/projects/$slug"
        params={{ slug: project.slug }}
        className="absolute inset-0 z-20 focus:outline-none focus:ring-2 focus:ring-zinc-500 rounded-3xl"
      >
        <span className="sr-only">View {project.title}</span>
      </Link>
    </motion.div>
  );
}

// --- Main Page Component ---

export function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = useMemo(() => {
    const cats = new Set(projects.map((p) => p.category));
    return ["All", ...Array.from(cats)];
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") return projects;
    return projects.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6 py-20 pb-32 max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white mb-6">
              Selected <span className="text-zinc-400 dark:text-zinc-600">Work</span>
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-zinc-600 dark:text-zinc-400"
          >
            A collection of projects exploring DeFi, SaaS, and cutting-edge web technologies. Each piece represents a unique challenge and a tailored solution.
          </motion.p>
        </div>

        {/* Filter Section */}
        <CategoryFilter categories={categories} selected={selectedCategory} onSelect={setSelectedCategory} />

        {/* Grid Section */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-fr">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && <div className="text-center py-20 text-zinc-500">No projects found in this category.</div>}
      </div>
    </div>
  );
}
