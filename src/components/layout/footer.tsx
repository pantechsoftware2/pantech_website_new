import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { Logo } from "./logo";
import { projects } from "@/data/projects";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer container">
      <div className="footer-grid">
        <div className="footer-brand">
          <Logo footer />
          <p>Building a smarter, more connected tomorrow.</p>
          <a
            className="footer-email"
            href={`mailto:${site.email}`}
            aria-label="Email PanTech Software"
          >
            <Mail size={18} />
            <span>Let’s connect</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
        <div>
          <h3>Quick Links</h3>
          <ul>
            {[
              { label: "Work", href: "/#work" },
              { label: "Services", href: "/#services" },
              { label: "About", href: "/#about" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <li key={link.label}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Our Projects</h3>
          <ul>
            {projects.map((project) => (
              <li key={project.slug}>
                <Link href={`/work/${project.slug}`}>{project.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Get in Touch</h3>
          <ul>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>{site.location}</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} PanTech Software. All rights reserved.
        </p>
        <p>
          Ideas. Technology. Growth. <span>A PanTech Software Creation</span>
        </p>
      </div>
    </footer>
  );
}
