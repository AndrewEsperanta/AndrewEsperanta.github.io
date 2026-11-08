"use client";

import { useEffect, useRef } from "react";

export function FadeInSection({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || !("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Keep content visible without JavaScript; animation is progressive enhancement.
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        element.classList.add("is-revealed");
        observer.unobserve(element);
      }
    }, { threshold: 0.08 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className="reveal-section">{children}</div>;
}
