export function SectionHeader({ children, number, id }: { children: React.ReactNode; number: string; id: string }) {
  return (
    <div className="section-heading">
      <span className="section-number" aria-hidden="true">{number}</span>
      <h2 id={id}>{children}</h2>
      <span className="section-heading-mark" aria-hidden="true">+</span>
    </div>
  );
}
