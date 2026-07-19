import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ResearchInterests } from "@/components/ResearchInterests";
import { Links } from "@/components/Links";
import { FadeInSection } from "@/components/FadeInSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <FadeInSection>
        <About />
      </FadeInSection>
      <FadeInSection>
        <ResearchInterests />
      </FadeInSection>
      <FadeInSection>
        <Links />
      </FadeInSection>
    </main>
  );
}
