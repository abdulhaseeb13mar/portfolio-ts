import { Mail } from "lucide-react";

export function ContactPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">Let's work together.</h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-12">
          I’m currently available for new projects. Whether you have a specific idea or need help with a complex technical challenge, I’d love to hear from you.
        </p>

        <a
          href="mailto:abdulhaseeb13mar@gmail.com"
          className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-bold rounded-full text-lg hover:bg-blue-700 transition-colors"
        >
          <Mail className="w-5 h-5" />
          Send me an Email
        </a>

        <div className="mt-12 flex justify-center gap-12 text-center">
          <div>
            <div className="text-3xl font-bold mb-1">100%</div>
            <div className="text-sm text-zinc-500">Job Success</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-1">&lt; 24h</div>
            <div className="text-sm text-zinc-500">Response Time</div>
          </div>
        </div>
      </div>
    </div>
  );
}
