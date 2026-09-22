import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Mail, MapPin, Sparkles } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";
import styles from "./page.module.css";

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
    <div className={styles.page}>
      <div className={styles.header}>
        <Header />
      </div>
      <main id="main" className={`${styles.main} container`}>
        <Link className={styles.backLink} href="/">
          <ArrowLeft size={15} /> Back to home
        </Link>
        <div className={styles.layout}>
          <div className={styles.intro}>
            <p className={styles.badge}>
              <Sparkles size={14} aria-hidden="true" /> Let’s build something
              meaningful
            </p>
            <h1>
              Big ideas.
              <br />
              <span>Real impact.</span>
            </h1>
            <p className={styles.lead}>
              Your next chapter starts with a conversation. Tell us what you’re
              imagining — we’ll help you turn it into something that moves your
              business forward.
            </p>
            <ul className={styles.expertise} aria-label="Our expertise">
              <li>Software</li>
              <li>Artificial intelligence</li>
              <li>Growth</li>
            </ul>
            <div className={styles.details}>
              <a href={`mailto:${site.email}`} className={styles.detail}>
                <span className={styles.detailIcon}>
                  <Mail size={20} aria-hidden="true" />
                </span>
                <span>
                  <span className={styles.detailLabel}>Prefer email?</span>
                  <strong>{site.email}</strong>
                </span>
                <ArrowUpRight
                  size={17}
                  className={styles.detailArrow}
                  aria-hidden="true"
                />
              </a>
              <div className={styles.detail}>
                <span className={styles.detailIcon}>
                  <MapPin size={20} aria-hidden="true" />
                </span>
                <span>
                  <span className={styles.detailLabel}>Where we’re based</span>
                  <strong>{site.location}</strong>
                </span>
              </div>
            </div>
            <div className={styles.nextSteps}>
              <h2>Great work starts with a clear plan.</h2>
              <ol>
                <li>
                  <span>01</span>Share your idea
                </li>
                <li>
                  <span>02</span>Explore the possibilities
                </li>
                <li>
                  <span>03</span>Define the next step
                </li>
              </ol>
            </div>
          </div>
          <ContactForm initialService={service} />
        </div>
      </main>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
