import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { Check, Copy, FileText, Github, Globe, Linkedin, Mail, Phone, X } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [copied, setCopied] = useState<string | null>(null);

  const contacts = [
    {
      icon: Phone,
      label: "Phone",
      value: "+92 311 1765988",
      href: "tel:+923111765988",
      isLink: true,
    },
    {
      icon: Mail,
      label: "Email",
      value: "abdulhaseeb13mar@gmail.com",
      href: "mailto:abdulhaseeb13mar@gmail.com",
      isLink: true,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/AbdulHaseebSE050",
      href: "https://linkedin.com/in/AbdulHaseebSE050",
      isLink: true,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/abdulhaseeb13mar",
      href: "https://github.com/abdulhaseeb13mar",
      isLink: true,
    },
    {
      icon: Globe,
      label: "Portfolio",
      value: "portfolio-haseeb.web.app",
      href: "https://portfolio-haseeb.web.app",
      isLink: true,
    },
    {
      icon: FileText,
      label: "Medium",
      value: "medium.com/@abdulhaseeb13mar",
      href: "https://medium.com/@abdulhaseeb13mar",
      isLink: true,
    },
  ];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl w-full max-w-lg overflow-hidden pointer-events-auto border border-zinc-200 dark:border-zinc-800"
            >
              <div className="p-6 border-b border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Get in Touch</h2>
                <button onClick={onClose} className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors text-zinc-500">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 space-y-4">
                {contacts.map((contact) => (
                  <div
                    key={contact.label}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors group"
                  >
                    <div className="p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full">
                      <contact.icon className="w-5 h-5" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{contact.label}</p>
                      {contact.isLink ? (
                        <a
                          href={contact.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-900 dark:text-zinc-100 font-medium truncate block hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-zinc-900 dark:text-zinc-100 font-medium truncate">{contact.value}</p>
                      )}
                    </div>

                    <button
                      onClick={() => handleCopy(contact.value)}
                      className="p-2 text-zinc-400 hover:text-zinc-900 dark:hover:text-white opacity-0 group-hover:opacity-100 transition-all"
                      title="Copy to clipboard"
                    >
                      {copied === contact.value ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
