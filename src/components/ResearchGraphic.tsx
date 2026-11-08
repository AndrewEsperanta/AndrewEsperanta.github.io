const cube = "M50 10 84 29v39L50 88 16 68V29L50 10m0 39 34-20M50 49 16 29m34 20v39";

export function ResearchGraphic({ index }: { index: number }) {
  return (
    <svg className={`research-graphic graphic-${index}`} viewBox="0 0 140 100" fill="none" aria-hidden="true">
      {index === 0 && <g><rect x="25" y="18" width="90" height="64" rx="3" /><path d="M25 33h90M48 46 37 56l11 10m44-20 11 10-11 10M78 41 64 72" /><path className="graphic-dim" d="M18 13h-7v75h7m104-75h7v75h-7" /><circle cx="34" cy="26" r="1" /><circle cx="40" cy="26" r="1" /><circle cx="46" cy="26" r="1" /></g>}
      {index === 1 && <g transform="translate(20 0)"><path d={cube} /><path className="graphic-dim" d="m16 68 34-19 34 19M50 10v39" strokeDasharray="3 4" /><path d="M5 22 0 25v15m95-18 5 3v15M43 93l7 4 7-4" /></g>}
      {index === 2 && <g transform="translate(70 50)"><ellipse rx="43" ry="36" /><ellipse rx="23" ry="36" /><ellipse rx="43" ry="15" /><path d="M-43 0h86M0-36v72" /><path className="graphic-dim" d="m-30-26 60 52m-60 0 60-52" />{[[-30,-26],[30,-26],[-43,0],[43,0],[-30,26],[30,26],[0,-36],[0,36],[0,0]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="2.6" className="graphic-node" />)}</g>}
      {index === 3 && <g><ellipse cx="70" cy="50" rx="51" ry="19" transform="rotate(-30 70 50)" /><ellipse cx="70" cy="50" rx="51" ry="19" transform="rotate(30 70 50)" /><ellipse cx="70" cy="50" rx="51" ry="19" transform="rotate(90 70 50)" /><circle cx="70" cy="50" r="7" className="graphic-node" /><circle cx="112" cy="27" r="3" className="graphic-node" /></g>}
      {index === 4 && <g><rect className="graphic-dim" x="38" y="11" width="77" height="53" rx="2" /><rect className="graphic-dim" x="29" y="22" width="77" height="53" rx="2" /><rect className="graphic-front" x="20" y="33" width="77" height="53" rx="2" /><path d="m51 46 20 13-20 13V46Z" /><path className="graphic-dim" d="M108 78h13m-6-6v12" /></g>}
    </svg>
  );
}
