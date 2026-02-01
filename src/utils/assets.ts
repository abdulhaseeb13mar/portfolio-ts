// Placeholder for lazy loading images or handling missing assets
// Since we don't know the exact filenames in the folders, we'll need a way to handle images gracefully.
// For now, this helper in projects.ts assumes specific names, but in a real scenario we might need to glob import.

export const getAllProjectAssets = () => {
  const modules = import.meta.glob("../assets/*/*.*", { eager: true });
  return modules;
};
