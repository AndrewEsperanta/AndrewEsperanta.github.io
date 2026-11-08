import Image from "next/image";
import { RESEARCH_INTERESTS } from "@/lib/constants";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="profile-name">
      <div className="hero-copy">
        <p className="eyebrow hero-eyebrow"><span className="small-cross" aria-hidden="true" />Rhodes Island // Operator File</p>
        <h1 id="profile-name"><span>Andrew</span><span className="name-accent">Esperanta<span className="name-period" aria-hidden="true">.</span></span></h1>
        <p className="hero-role">
          <span>AI-Native Engineer</span>
          <span className="hero-role-secondary"><span className="role-plus">+</span> AI Technical Artist in Training</span>
        </p>
        <div className="hero-description">
          <span className="prompt-symbol" aria-hidden="true">↳</span>
          <p>Exploring the frontiers of<br className="desktop-break" /> generative intelligence<span className="typing-cursor" aria-hidden="true">_</span></p>
        </div>
      </div>
      <div className="hero-art" aria-hidden="true">
        <div className="art-grid" />
        <div className="orbital orbital-outer" /><div className="orbital orbital-inner" />
        <div className="art-axis art-axis-x" /><div className="art-axis art-axis-y" />
        <Image className="operator-image" src="/ascii-char.png" alt="" width={2860} height={1600} priority sizes="(max-width: 640px) 100vw, 55vw" />
        <span className="art-corner corner-tl" /><span className="art-corner corner-tr" />
        <span className="art-corner corner-bl" /><span className="art-corner corner-br" />
        <span className="art-label">AE / OPERATOR FILE</span>
        <span className="art-coordinate">[ 01 — {String(RESEARCH_INTERESTS.length).padStart(2, "0")} ]</span>
        <div className="art-bars">{Array.from({ length: 36 }, (_, i) => <i key={i} />)}</div>
        <span className="art-plus">+</span>
      </div>
      <div className="hero-bottom">
        <a href="#assignment" className="hero-scroll"><span className="scroll-arrow" aria-hidden="true">↓</span><span>Current Assignment</span></a>
        <svg className="heartbeat-line" viewBox="0 0 220 32" fill="none" aria-hidden="true"><path d="M0 16H50l7-6 7 12 9-20 10 28 8-14h35l8-7 8 14 8-7h70" /><circle cx="218" cy="16" r="2" /></svg>
        <span className="hero-index" aria-hidden="true">01 / 03</span>
      </div>
    </section>
  );
}
