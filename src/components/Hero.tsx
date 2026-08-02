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

      <div className="mt-8 max-w-xs">
        <svg
          className="heartbeat-line"
          viewBox="0 0 300 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <polyline
            className="heartbeat-path"
            points="0,20 40,20 50,20 60,8 70,32 80,4 90,36 100,20 110,20 150,20 160,20 170,12 180,28 190,20 230,20 300,20"
            stroke="var(--accent-primary)"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
