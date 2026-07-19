export function GeometricCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`geometric-card-wrapper ${className}`}>
      <div className="geometric-border" aria-hidden="true" />
      <div className="geometric-card">{children}</div>
    </div>
  );
}
