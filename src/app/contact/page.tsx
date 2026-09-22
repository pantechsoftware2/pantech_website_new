import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Let’s build together",
  description:
    "Tell PanTech Software about your next software, AI, or growth project.",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const { service } = await searchParams;
  return (
    <>
      <div className="interior-header">
        <Header />
      </div>
      <main id="main" className="interior-main container">
        <Link className="back-link" href="/">
          <ArrowLeft size={15} /> Back to home
        </Link>
        <div className="contact-layout">
          <div>
            <p className="eyebrow">Let’s build together</p>
            <h1>
              Big ideas.
              <br />
              <span className="accent-text">Real impact.</span>
            </h1>
            <p className="interior-lead">
              Have an ambitious idea? Tell us what you have in mind. We’ll help
              you take the next step.
            </p>
            <div className="contact-details">
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <p>{site.location}</p>
            </div>
          </div>
          <ContactForm initialService={service} />
        </div>
      </main>
      <Footer />
    </>
  );
}
