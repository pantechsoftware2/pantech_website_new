import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Artwork } from "@/components/ui/artwork";
import { ButtonLink } from "@/components/ui/button-link";
import { projects } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((project) => project.slug === slug);
  return {
    title: project?.name || "Project not found",
    description: project?.description,
  };
}
export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((project) => project.slug === slug);
  if (!project) notFound();
  return (
    <>
      <div className="interior-header">
        <Header />
      </div>
      <main id="main" className="interior-main container">
        <Link href="/#work" className="back-link">
          <ArrowLeft size={15} /> All projects
        </Link>
        <p className="eyebrow">{project.category}</p>
        <h1>{project.name}</h1>
        <p className="interior-lead">{project.description}</p>
        <Artwork {...project.artwork} className="detail-artwork" priority />
        <div className="detail-footer">
          <p>Have a similar ambition? Let’s bring it to life.</p>
          <ButtonLink href="/contact" variant="dark">
            Start a project
          </ButtonLink>
        </div>
      </main>
      <Footer />
    </>
  );
}
