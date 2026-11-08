import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ResearchInterests } from "@/components/ResearchInterests";
import { Links } from "@/components/Links";
import { FadeInSection } from "@/components/FadeInSection";
import { Navigation } from "@/components/Navigation";

export default function Home() {
  return (
    <div className="site-shell" id="top">
      <a className="skip-link" href="#main">Skip to content</a>
      <Navigation />
      <main id="main">
        <Hero />
        <FadeInSection><About /></FadeInSection>
        <FadeInSection><ResearchInterests /></FadeInSection>
        <FadeInSection><Links /></FadeInSection>
      </main>
      <footer className="site-footer"><span>Andrew Esperanta</span><a href="#top" aria-label="Back to top">{"// END OF FILE"}<span aria-hidden="true">↑</span></a></footer>
    </div>
  );
}
