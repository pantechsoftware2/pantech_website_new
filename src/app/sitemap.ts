import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { projects } from "@/data/projects";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, priority: 1 },
    { url: `${site.url}/contact`, priority: 0.7 },
    ...projects.map((project) => ({
      url: `${site.url}/work/${project.slug}`,
      priority: 0.8,
    })),
  ];
}
