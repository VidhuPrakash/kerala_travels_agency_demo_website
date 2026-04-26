"use client";
import { useEffect, useRef } from "react";

type Animation = "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "scaleUp";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: Animation;
  as?: React.ElementType;
  threshold?: number;
}

export default function AnimateOnScroll({
  children,
  className = "",
  delay = 0,
  animation = "fadeUp",
  as: Tag = "div",
  threshold = 0.12,
}: Props) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view");
          observer.unobserve(el);
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${animation} ${className}`.trim()}
      style={
        delay
          ? ({ "--anim-delay": `${delay}ms` } as React.CSSProperties)
          : undefined
      }
    >
      {children}
    </Tag>
  );
}
