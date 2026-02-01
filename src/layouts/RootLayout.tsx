import { useEffect, useRef } from "react";

import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import Lenis from "@studio-freight/lenis";
import { Outlet } from "@tanstack/react-router";

// import { ScrollProgress } from '../components/ScrollProgress'; // To be implemented

export function RootLayout() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black text-black dark:text-white antialiased">
      {/* <ScrollProgress /> */}
      <Navbar />
      <main className="grow pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
