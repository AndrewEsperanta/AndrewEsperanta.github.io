import { SectionHeader } from "./SectionHeader";
import { GeometricCard } from "./GeometricCard";

export function About() {
  return (
    <section className="px-6 md:px-16 lg:px-24 py-16">
      <SectionHeader>Current Assignment</SectionHeader>

      <div className="mt-8 max-w-2xl">
        <GeometricCard>
          <div className="flex items-center gap-3 mb-4">
            <div className="status-dot" />
            <span
              className="text-xs uppercase tracking-widest"
              style={{ fontFamily: "var(--font-mono)", color: "var(--status-active)" }}
            >
              Active
            </span>
          </div>

          <h3
            className="text-lg md:text-xl mb-2"
            style={{ fontFamily: "var(--font-mono)", color: "var(--text-primary)" }}
          >
            Research Intern
          </h3>

          <p style={{ color: "var(--accent-secondary)" }}>
            VAST AI Research
          </p>

          <p className="mt-4 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Working on generative AI systems at the intersection of 3D understanding,
            world simulation, and code-driven content creation.
          </p>
        </GeometricCard>
      </div>
    </section>
  );
}
