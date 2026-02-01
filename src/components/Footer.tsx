import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-zinc-50 dark:bg-zinc-950 pt-20 pb-10 border-t border-zinc-200 dark:border-zinc-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-bold tracking-tighter mb-4 block">
              ABDUL HASEEB<span className="text-blue-600">.</span>
            </Link>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-sm mb-6">
              Building high-performance web applications with a focus on details, speed, and user experience.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/abdulhaseeb13mar"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-white dark:bg-zinc-900 rounded-full border border-zinc-200 dark:border-zinc-800 hover:border-blue-600 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/AbdulHaseebSE050"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-white dark:bg-zinc-900 rounded-full border border-zinc-200 dark:border-zinc-800 hover:border-blue-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-white dark:bg-zinc-900 rounded-full border border-zinc-200 dark:border-zinc-800 hover:border-blue-600 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-black dark:text-white">Sitemap</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-zinc-500 dark:text-zinc-400 hover:text-blue-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-zinc-500 dark:text-zinc-400 hover:text-blue-600 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-zinc-500 dark:text-zinc-400 hover:text-blue-600 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-zinc-500 dark:text-zinc-400 hover:text-blue-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-black dark:text-white">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-zinc-500 dark:text-zinc-400">
                <Mail className="w-5 h-5" />
                <a href="mailto:abdulhaseeb13mar@gmail.com" className="hover:text-blue-600 transition-colors">
                  abdulhaseeb13mar@gmail.com
                </a>
              </li>
              <li className="text-sm text-zinc-400">
                <span className="block text-green-500 font-medium mb-1">● Available for work</span>
                Response time: &lt; 24h
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-200 dark:border-zinc-800 text-sm text-zinc-500">
          <p>© {new Date().getFullYear()} All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-black dark:hover:text-white font-medium">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-black dark:hover:text-white font-medium">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
