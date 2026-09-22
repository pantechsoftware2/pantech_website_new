import { Hero } from "@/components/sections/hero";
import { Belief } from "@/components/sections/belief";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";
import { Approach } from "@/components/sections/approach";
import { Process } from "@/components/sections/process";
import { ContactCta } from "@/components/sections/contact-cta";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <main id="main">
        <Hero />
        <Belief />
        <Projects />
        <Services />
        <Approach />
        <Process />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
