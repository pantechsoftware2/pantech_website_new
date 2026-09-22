import Link from "next/link";
import {
  ArrowRight,
  ChartNoAxesCombined,
  CodeXml,
  Layers,
  Zap,
} from "lucide-react";

const pillars = [
  { title: "Software", description: "Build for scale", icon: CodeXml },
  { title: "AI", description: "Turn data into opportunities", icon: Zap },
  { title: "Automation", description: "Do more with less", icon: Layers },
  {
    title: "Growth",
    description: "Get seen. Get customers.",
    icon: ChartNoAxesCombined,
  },
];

export function Belief() {
  return (
    <section
      id="about"
      className="belief container"
      aria-labelledby="belief-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">Our belief</p>
          <h2 id="belief-title">
            Not just websites.
            <br />
            Operating systems for growth.
          </h2>
        </div>
        <div className="section-intro">
          <p>
            We combine software, AI and marketing systems to solve real business
            problems and create long term value.
          </p>
          <Link className="text-link" href="#approach">
            About PanTech <ArrowRight size={14} />
          </Link>
        </div>
      </div>
      <div className="pillars">
        {pillars.map(({ title, description, icon: Icon }) => (
          <div className="pillar" key={title}>
            <span className="icon-halo">
              <Icon size={27} strokeWidth={1.7} />
            </span>
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
