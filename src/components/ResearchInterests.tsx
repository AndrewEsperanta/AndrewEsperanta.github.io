import { SectionHeader } from "./SectionHeader";
import { ResearchGraphic } from "./ResearchGraphic";
import { RESEARCH_INTERESTS } from "@/lib/constants";

export function ResearchInterests() {
  return (
    <section id="research" className="content-section research" aria-labelledby="research-heading">
      <SectionHeader number="02" id="research-heading">Research Directives</SectionHeader>
      <ol className="research-list">
        {RESEARCH_INTERESTS.map((interest, index) => (
          <li className="research-row" key={interest.id}>
            <span className="research-number" aria-hidden="true">/{interest.id}</span>
            <h3>{interest.title}</h3>
            <p>{interest.description}</p>
            <ResearchGraphic index={index} />
          </li>
        ))}
      </ol>
    </section>
  );
}
