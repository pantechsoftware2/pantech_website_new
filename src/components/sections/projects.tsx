import {
  Building2,
  ChartNoAxesCombined,
  GraduationCap,
  School,
  Waypoints,
} from "lucide-react";
import { projects, type Project } from "@/data/projects";
import { Artwork } from "@/components/ui/artwork";
import { ButtonLink } from "@/components/ui/button-link";

const icons = {
  education: GraduationCap,
  scholarship: School,
  search: Building2,
  coaching: GraduationCap,
  analytics: Waypoints,
};

export function ProjectCard({ project }: { project: Project }) {
  const Icon = icons[project.icon] || ChartNoAxesCombined;
  const dark = project.theme === "education" || project.theme === "search";
  return (
    <article
      className={`project-card project-card--${project.theme} ${project.compact ? "project-card--compact" : ""}`}
    >
      <Artwork {...project.artwork} className="project-artwork" />
      <div className="project-content">
        <h3>
          <span className="project-icon">
            <Icon size={23} strokeWidth={1.6} />
          </span>
          {project.name}
        </h3>
        <h4>{project.category}</h4>
        <p>{project.description}</p>
        <ButtonLink
          href={`/work/${project.slug}`}
          variant={dark ? "light" : "dark"}
          aria-label={`View ${project.name} project`}
        >
          View project
        </ButtonLink>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section
      id="work"
      className="projects container"
      aria-labelledby="projects-title"
    >
      <div className="section-label">
        <h2 id="projects-title" className="eyebrow">
          Featured projects
        </h2>
        <p>Real products. Real impact.</p>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.slug} />
        ))}
      </div>
    </section>
  );
}
