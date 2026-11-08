import { SectionHeader } from "./SectionHeader";
import { LINKS } from "@/lib/constants";

export function Links() {
  return (
    <section id="comms" className="content-section comms" aria-labelledby="comms-heading">
      <SectionHeader number="03" id="comms-heading">Comms Channel</SectionHeader>
      {LINKS.map((link) => (
        <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="comms-link" aria-label={`${link.label}: ${link.display} (opens in a new tab)`}>
          <div><span className="eyebrow comms-label">[{link.label}]</span><span className="comms-address">{link.display}</span></div>
          <span className="comms-arrow" aria-hidden="true">↗</span>
        </a>
      ))}
    </section>
  );
}
