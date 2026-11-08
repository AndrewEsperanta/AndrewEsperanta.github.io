import { SectionHeader } from "./SectionHeader";

export function About() {
  return (
    <section id="assignment" className="content-section assignment" aria-labelledby="assignment-heading">
      <SectionHeader number="01" id="assignment-heading">Current Assignment</SectionHeader>
      <div className="assignment-body">
        <div className="assignment-role">
          <div className="status-label"><span className="status-dot" />Active</div>
          <h3>Research Intern</h3>
          <p className="organization"><span aria-hidden="true">↗</span> VAST AI Research</p>
        </div>
        <div className="assignment-detail">
          <span className="detail-cross" aria-hidden="true">✳</span>
          <p>Working on generative AI systems at the intersection of 3D understanding, world simulation, and code-driven content creation.</p>
        </div>
      </div>
    </section>
  );
}
