import { ArrowRight, Blocks, ClipboardList, PenTool, Scan } from "lucide-react";

const steps = [
  {
    name: "Discover",
    description: "Understand goals, users and opportunities.",
    icon: ClipboardList,
  },
  {
    name: "Design",
    description: "Create intuitive and scalable solutions.",
    icon: PenTool,
  },
  {
    name: "Build",
    description: "Turn ideas into powerful products.",
    icon: Blocks,
  },
  {
    name: "Scale",
    description: "Optimize, grow and create long-term value.",
    icon: Scan,
  },
];

export function Process() {
  return (
    <section className="process container" aria-labelledby="process-title">
      <div>
        <p className="eyebrow">Our process</p>
        <h2 id="process-title">
          From idea <br />
          to impact.
        </h2>
      </div>
      <ol className="process-steps">
        {steps.map(({ name, description, icon: Icon }, index) => (
          <li key={name}>
            <div className="step-track">
              <span className="icon-halo">
                <Icon size={24} />
              </span>
              {index < steps.length - 1 && <ArrowRight size={15} />}
            </div>
            <h3>{name}</h3>
            <p>{description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
