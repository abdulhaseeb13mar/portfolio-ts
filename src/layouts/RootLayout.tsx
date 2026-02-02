import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import RootListener from "@/listeners/rootListener";
import { Outlet } from "@tanstack/react-router";

export function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black text-black dark:text-white antialiased">
      {/* <ScrollProgress /> */}
      <RootListener />
      <Navbar />
      <main className="grow pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
