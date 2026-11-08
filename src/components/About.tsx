import { SectionHeader } from "./SectionHeader";

export function About() {
  return (
    <section id="assignment" className="content-section assignment" aria-labelledby="assignment-heading">
      <SectionHeader number="01" id="assignment-heading">Current Assignment</SectionHeader>
      <div className="assignment-body">
        <div className="assignment-role">
          <div className="status-label"><span className="status-dot" />Active</div>
          <h3>FTE Researcher</h3>
          <p className="organization"><span aria-hidden="true">↗</span> VAST AI Research</p>
        </div>
        <div className="assignment-detail">
          <span className="detail-cross" aria-hidden="true">✳</span>
          <p>Exploring generative AI for game assets, AI-native workflows, 3D content, and rendering.</p>
        </div>
      </div>
      <div className="assignment-history" aria-labelledby="experience-heading">
        <h3 id="experience-heading">Previous Experience</h3>
        <div className="history-role">
          <h4>Research Intern</h4>
          <p>VAST AI Research</p>
          <p className="history-description">Working on generative AI systems at the intersection of 3D understanding, world simulation, and code-driven content creation.</p>
        </div>
      </div>
    </section>
  );
}
