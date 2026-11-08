const cube = "M50 10 84 29v39L50 88 16 68V29L50 10m0 39 34-20M50 49 16 29m34 20v39";

export function ResearchGraphic({ index }: { index: number }) {
  return (
    <svg className={`research-graphic graphic-${index}`} viewBox="0 0 140 100" fill="none" aria-hidden="true">
      {index === 0 && <g transform="translate(20 0)"><path d={cube} /><path className="graphic-dim" d="m16 68 34-19 34 19M50 10v39" strokeDasharray="3 4" /><path d="M5 22 0 25v15m95-18 5 3v15M43 93l7 4 7-4" /></g>}
      {index === 1 && <g><rect x="9" y="14" width="30" height="26" rx="2" /><rect x="55" y="37" width="30" height="26" rx="2" /><rect x="101" y="60" width="30" height="26" rx="2" /><path d="M39 27h16v10m30 13h16v10m-49-27 3 4 3-4m40 23 3 4 3-4" /><path className="graphic-dim" d="M24 40v33h77" strokeDasharray="3 4" /><path d="m20 27 4-4 4 4-4 4-4-4Zm45 23h10m-5-5v10m41 18 4 4 7-8" /></g>}
      {index === 2 && <g transform="translate(70 50)"><ellipse rx="43" ry="36" /><ellipse rx="23" ry="36" /><ellipse rx="43" ry="15" /><path d="M-43 0h86M0-36v72" /><path className="graphic-dim" d="m-30-26 60 52m-60 0 60-52" />{[[-30,-26],[30,-26],[-43,0],[43,0],[-30,26],[30,26],[0,-36],[0,36],[0,0]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="2.6" className="graphic-node" />)}</g>}
      {index === 3 && <g><path className="graphic-dim" d="m15 50 40-32m-40 32 40 32m-40-32h40" strokeDasharray="3 4" /><circle cx="15" cy="50" r="3" className="graphic-node" /><rect className="graphic-dim" x="67" y="10" width="63" height="64" rx="2" /><rect className="graphic-front" x="55" y="18" width="63" height="64" rx="2" /><path d="m55 65 18-22 15 17 12-12 18 17M55 72h63" /><circle cx="100" cy="34" r="6" /><path className="graphic-dim" d="M55 39h63M76 18v64m21-64v64" /></g>}
    </svg>
  );
}
