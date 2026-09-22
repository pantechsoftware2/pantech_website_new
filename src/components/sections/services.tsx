import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { services } from "@/data/services";

export function Services() {
  return (
    <section
      id="services"
      className="services container"
      aria-labelledby="services-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">What we build</p>
          <h2 id="services-title">
            End-to-end technology
            <br />
            for a smarter tomorrow.
          </h2>
        </div>
        <div className="section-intro">
          <p>
            From concept to scale, we deliver solutions that are secure,
            scalable and built for real impact.
          </p>
          <Link className="text-link" href="/contact">
            Explore all services <ArrowRight size={14} />
          </Link>
        </div>
      </div>
      <div className="services-grid">
        {services.map(({ title, description, icon: Icon }) => (
          <Link
            href={`/contact?service=${encodeURIComponent(title)}`}
            className="service-card"
            key={title}
          >
            <Icon size={30} strokeWidth={1.6} />
            <h3>{title}</h3>
            <p>{description}</p>
            <ArrowRight
              className="service-arrow"
              size={17}
              aria-hidden="true"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
