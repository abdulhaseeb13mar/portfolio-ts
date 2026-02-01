export interface ProjectMetrics {
  metric: string;
  value: string;
}

export interface CaseStudySection {
  title: string;
  content: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  summary: string;
  role: string;
  techStack: string[];
  metrics: ProjectMetrics[];
  thumbnail: string;
  heroImage: string;
  gallery: string[];
  problem?: string;
  solution?: string;
  results?: string;
  link?: string;
  featured: boolean;
  category: "DeFi" | "NFT" | "SaaS" | "Mobile" | "Other";
}

export interface Stat {
  label: string;
  value: string;
  prefix?: string;
  suffix?: string;
}
