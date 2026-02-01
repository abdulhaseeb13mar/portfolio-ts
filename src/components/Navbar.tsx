import { useEffect, useState } from "react";

import me from "@/assets/me.png";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/80 dark:bg-black/80 backdrop-blur-md py-4 border-b border-zinc-200 dark:border-zinc-800" : "py-6 bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold tracking-tighter">
          <img src={me} alt="Haseeb" className="w-8 h-8 rounded-full object-cover" />
          <span className="">HASEEB</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors [&.active]:text-black dark:[&.active]:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-5 py-2.5 bg-black dark:bg-white text-white dark:text-black text-sm font-semibold rounded-full hover:opacity-90 transition-opacity"
          >
            Hire Me
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white dark:bg-black border-b border-zinc-200 dark:border-zinc-800 p-4 md:hidden flex flex-col gap-4 shadow-xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium py-2 border-b border-zinc-100 dark:border-zinc-900 last:border-0"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-3 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-lg mt-2"
            >
              Hire Me
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
