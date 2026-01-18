import { Outlet } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      <header className="p-4 border-b flex gap-4 justify-center">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>
        <Link to="/about-me" className="[&.active]:font-bold">
          About Me
        </Link>
        <Link to="/projects" className="[&.active]:font-bold">
          Projects
        </Link>
        <Link to="/articles" className="[&.active]:font-bold">
          Articles
        </Link>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
