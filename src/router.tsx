import App from "./App";
import About from "./pages/About";
import Articles from "./pages/Articles";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { createRootRoute, createRoute, createRouter } from "@tanstack/react-router";

const rootRoute = createRootRoute({
  component: App,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "about-me",
  component: About,
});

const projectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "projects",
  component: Projects,
});

const articlesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "articles",
  component: Articles,
});

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute, projectsRoute, articlesRoute]);

export const router = createRouter({
  routeTree,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default router;
