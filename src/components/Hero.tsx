export function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center px-6 md:px-16 lg:px-24 py-20">
      <div className="mb-6">
        <span
          className="text-[0.7rem] tracking-[0.3em] uppercase"
          style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}
        >
          Rhodes Island // Operator File
        </span>
      </div>

      <h1
        className="text-4xl md:text-6xl lg:text-7xl font-normal mb-4 text-glow"
        style={{ fontFamily: "var(--font-mono)", color: "var(--accent-primary)" }}
      >
        Andrew Esperanta
      </h1>

      <p
        className="text-lg md:text-xl mb-8"
        style={{ color: "var(--text-secondary)" }}
      >
        AI Researcher & Engineer
      </p>

      <p
        className="text-sm md:text-base"
        style={{ fontFamily: "var(--font-mono)", color: "var(--text-secondary)" }}
      >
        {">"} Exploring the frontiers of generative intelligence
        <span className="typing-cursor">_</span>
      </p>
    </section>
  );
}
