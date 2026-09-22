import { Header } from "@/components/layout/header";
import { ButtonLink } from "@/components/ui/button-link";
import { Artwork } from "@/components/ui/artwork";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <Header />
      <div className="hero-copy container">
        <p className="eyebrow">Software · AI · Growth</p>
        <h1 id="hero-title">
          We build digital systems
          <br />
          that move <span>businesses forward.</span>
        </h1>
        <p className="hero-description">
          From idea to impact — we engineer scalable products, AI-driven
          solutions
          <br className="desktop-break" /> and growth systems that help
          businesses get seen, discovered and win more customers.
        </p>
        <div className="hero-buttons">
          <ButtonLink href="#work" arrow={false}>
            Explore our work
          </ButtonLink>
          <ButtonLink href="/contact" variant="outline">
            Start a project
          </ButtonLink>
        </div>
      </div>
      <span
        className="handwritten hero-note hero-note--left"
        aria-hidden="true"
      >
        Ideas.
        <br />
        Products.
        <br />
        <span>
          Growth
          <br />
          Without Limits.
        </span>
      </span>
      <span
        className="handwritten hero-note hero-note--right"
        aria-hidden="true"
      >
        A More
        <br />
        Connected
        <br />
        Digital Tomorrow.
      </span>
      <Artwork
        crop={[0, 234, 748, 211]}
        alt="A collection of PanTech websites displayed on screens above the curved horizon of Earth"
        className="hero-artwork"
        priority
      />
    </section>
  );
}
