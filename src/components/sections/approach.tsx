import { ChartNoAxesColumnIncreasing, Settings, Zap } from "lucide-react";
import { Artwork } from "@/components/ui/artwork";

export function Approach() {
  return (
    <section
      id="approach"
      className="approach"
      aria-labelledby="approach-title"
    >
      <Artwork
        crop={[536, 1536, 212, 141]}
        alt="A glowing blue globe made of interconnected digital points"
        className="approach-artwork"
      />
      <div className="container approach-inner">
        <div>
          <p className="eyebrow">Our approach</p>
          <h2 id="approach-title">
            AI where it creates leverage.
            <br />
            Humans where <span>trust matters.</span>
          </h2>
        </div>
        <p className="approach-description">
          We blend the power of artificial intelligence with human creativity,
          experience and empathy to build solutions that truly make a
          difference.
        </p>
        <ul className="approach-features">
          <li>
            <Settings />
            Smarter Solutions
          </li>
          <li>
            <Zap />
            Faster Execution
          </li>
          <li>
            <ChartNoAxesColumnIncreasing />
            Real Business Impact
          </li>
        </ul>
      </div>
    </section>
  );
}
