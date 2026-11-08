export function Navigation() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Andrew Esperanta — back to top"><span className="brand-symbol" aria-hidden="true">a<span>e</span></span><span className="wordmark-caption">Andrew<br />Esperanta</span></a>
      <nav aria-label="Main navigation">
        <a href="#assignment"><span aria-hidden="true">01</span> Assignment</a>
        <a href="#research"><span aria-hidden="true">02</span> Research</a>
        <a href="#comms"><span aria-hidden="true">03</span> Comms <span className="nav-arrow" aria-hidden="true">↗</span></a>
      </nav>
    </header>
  );
}
