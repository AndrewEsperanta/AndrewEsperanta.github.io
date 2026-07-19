import { SectionHeader } from "./SectionHeader";
import { GeometricCard } from "./GeometricCard";
import { RESEARCH_INTERESTS } from "@/lib/constants";

export function ResearchInterests() {
  return (
    <section className="px-6 md:px-16 lg:px-24 py-16">
      <SectionHeader>Research Directives</SectionHeader>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-5xl">
        {RESEARCH_INTERESTS.map((interest) => (
          <GeometricCard key={interest.id}>
            <div className="flex items-start gap-4">
              <span
                className="text-2xl font-normal shrink-0"
                style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}
              >
                {interest.id}
              </span>
              <div>
                <h3
                  className="text-base mb-1"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--accent-primary)" }}
                >
                  {interest.title}
                </h3>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  {interest.description}
                </p>
              </div>
            </div>
          </GeometricCard>
        ))}
      </div>
    </section>
  );
}
