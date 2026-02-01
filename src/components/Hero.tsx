import { useRef, useState } from "react";

import { ContactModal } from "./modals/ContactModal";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Typewriter from "typewriter-effect";

export function Hero() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  const scrollToNextSection = () => {
    const nextSection = heroRef.current?.nextElementSibling;
    if (nextSection) {
      const offset = 80;
      const elementPosition = nextSection.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section ref={heroRef} className="min-h-[90vh] flex flex-col justify-center relative px-4 md:px-6">
      <div className="container mx-auto max-w-5xl z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
          <div
            id="my-intro-name"
            className="inline-block px-3 py-1 mb-6 text-sm font-semibold tracking-wide border rounded-full border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400"
          >
            <Typewriter
              onInit={(typewriter) => {
                typewriter.pauseFor(1000).typeString("Hi!&nbsp;&nbsp;I'm <span class='text-blue-600'>Haseeb</span>, I'm..").start();
              }}
              options={{
                delay: 100,
              }}
            />
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-500 dark:from-white dark:via-zinc-200 dark:to-zinc-600 pb-2">
            Building digital <br className="hidden md:block" />
            products that result <br className="hidden md:block" />
            in <span className="text-blue-600">revenue</span>.
          </h1>

          <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-2xl mb-10 leading-relaxed">
            I help clients and established businesses build high-performance web applications that convert visitors into customers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/projects"
              className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-bold rounded-full text-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              View Work <ArrowRight className="w-5 h-5" />
            </Link>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="px-8 py-4 bg-white dark:bg-black text-black dark:text-white border border-zinc-200 dark:border-zinc-800 font-bold rounded-full text-lg flex items-center justify-center hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors cursor-pointer"
            >
              Contact Me
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        onClick={scrollToNextSection}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-zinc-400 cursor-pointer"
      >
        <ChevronDown />
      </motion.div>

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </section>
  );
}
