import { SectionHeader } from "./SectionHeader";
import { LINKS } from "@/lib/constants";

export function Links() {
  return (
    <section className="px-6 md:px-16 lg:px-24 py-16 pb-32">
      <SectionHeader>Comms Channel</SectionHeader>

      <div className="mt-8 space-y-4 max-w-2xl">
        {LINKS.map((link) => (
          <div key={link.label} className="flex items-center gap-4">
            <span
              className="text-xs w-16 shrink-0"
              style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}
            >
              [{link.label}]
            </span>
            <span style={{ color: "var(--border-visible)" }}>────</span>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="link-item text-sm"
            >
              {link.display}
            </a>
          </div>
        ))}
      </div>

      <div
        className="mt-20 text-xs"
        style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}
      >
        {"// END OF FILE"}
      </div>
    </section>
  );
}
