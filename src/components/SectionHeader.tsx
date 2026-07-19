export function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="section-header">
      <span>[ {children} ]</span>
    </h2>
  );
}
