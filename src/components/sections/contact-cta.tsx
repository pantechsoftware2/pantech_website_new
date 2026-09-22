import { ButtonLink } from "@/components/ui/button-link";
import { site } from "@/lib/site";

export function ContactCta() {
  return (
    <section className="contact-cta container" aria-labelledby="cta-title">
      <div>
        <p className="eyebrow">Let’s build together</p>
        <h2 id="cta-title">
          Have an ambitious idea?
          <br />
          <span>Let’s build it.</span>
        </h2>
      </div>
      <div className="cta-actions">
        <p>
          Whether it’s a new product, an AI solution or a growth system
          <br className="desktop-break" /> — we’re here to make it happen.
        </p>
        <div>
          <ButtonLink href="/contact">Start a project</ButtonLink>
          <a
            className="call-link"
            href={`mailto:${site.email}?subject=Let%E2%80%99s%20schedule%20a%20call`}
          >
            Schedule a call
          </a>
        </div>
      </div>
      <span className="handwritten cta-note" aria-hidden="true">
        Big Ideas.
        <br />
        Real Impact.
      </span>
    </section>
  );
}
