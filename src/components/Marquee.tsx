"use client";

import { useRef, useEffect, useState, type ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode[];
  speed?: number;
  pauseOnHover?: boolean;
  direction?: "left" | "right";
  className?: string;
  gap?: number;
  centerFocus?: boolean;
}

export default function Marquee({
  children,
  speed = 1,
  pauseOnHover = true,
  direction = "left",
  className = "",
  gap = 24,
  centerFocus = false,
}: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);
  const isPausedRef = useRef(false);
  const offsetRef = useRef(0);

  // Measure content width
  useEffect(() => {
    if (!scrollerRef.current) return;
    const firstSet = scrollerRef.current.children[0] as HTMLElement;
    if (firstSet) {
      setContentWidth(firstSet.offsetWidth + gap);
    }
  }, [children, gap]);

  // Animation Loop
  useEffect(() => {
    if (!contentWidth || !scrollerRef.current || !containerRef.current) return;

    let animationFrameId: number;

    const animate = () => {
      if (!isPausedRef.current) {
        // Update offset
        const moveStep = speed;
        offsetRef.current += direction === "left" ? moveStep : -moveStep;
        
        // Seamless Wrap
        if (offsetRef.current >= contentWidth) {
          offsetRef.current -= contentWidth;
        } else if (offsetRef.current <= 0) {
          offsetRef.current += contentWidth;
        }

        if (scrollerRef.current) {
          scrollerRef.current.style.transform = `translateX(${-offsetRef.current}px)`;

          // Apply Center Focus Effect
          if (centerFocus) {
            const containerRect = containerRef.current!.getBoundingClientRect();
            const containerCenter = containerRect.left + containerRect.width / 2;
            const items = Array.from(scrollerRef.current.querySelectorAll('.marquee-item')) as HTMLElement[];
            
            items.forEach((item) => {
              const rect = item.getBoundingClientRect();
              const itemCenter = rect.left + rect.width / 2;
              const distToCenter = Math.abs(containerCenter - itemCenter);
              
              // Focus zone is wider (50% of container) for a smoother transition
              const focusZone = containerRect.width * 0.5;
              const normalizedDist = Math.min(distToCenter / focusZone, 1);
              
              // More subtle scaling (1.05 to 0.95) and minimal blur
              const scale = 1.05 - (normalizedDist * 0.1);
              const opacity = 1 - (normalizedDist * 0.2); // Fades less at edges
              const blur = normalizedDist * 0.5; // Very subtle blur
              
              item.style.transform = `scale(${scale})`;
              item.style.opacity = `${opacity}`;
              item.style.filter = blur > 0.1 ? `blur(${blur}px)` : "none";
              item.style.zIndex = normalizedDist < 0.3 ? "20" : "10";
            });
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [contentWidth, speed, direction, centerFocus, gap]);

  const handleMouseEnter = () => { if (pauseOnHover) isPausedRef.current = true; };
  const handleMouseLeave = () => { isPausedRef.current = false; };
  const handleTouchStart = () => { if (pauseOnHover) isPausedRef.current = true; };
  const handleTouchEnd = () => { isPausedRef.current = false; };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden py-10 ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{
        maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
      }}
    >
      <div
        ref={scrollerRef}
        className="flex w-max items-center"
        style={{ gap: `${gap}px`, willChange: "transform" }}
      >
        {/* We use 3 sets to ensure no blanks even on very wide screens */}
        {[0, 1, 2].map((setIndex) => (
          <div key={setIndex} className="flex items-center" style={{ gap: `${gap}px` }}>
            {children.map((child, i) => (
              <div 
                key={i} 
                className="marquee-item shrink-0 transition-all duration-300 ease-out"
                style={{ perspective: "1000px" }}
              >
                {child}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
