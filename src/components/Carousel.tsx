"use client";

import { useRef, useState, useEffect, useCallback, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  children: ReactNode[];
  autoPlay?: boolean;
  interval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  centerMode?: boolean;
  className?: string;
  itemClassName?: string;
}

export default function Carousel({
  children,
  autoPlay = true,
  interval = 4000,
  showDots = true,
  showArrows = true,
  centerMode = false,
  className = "",
  itemClassName = "",
}: CarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const isPausedRef = useRef(false);
  const autoPlayRef = useRef(autoPlay);
  autoPlayRef.current = autoPlay;

  const getItemWidth = useCallback(() => {
    const el = scrollRef.current;
    if (!el || !el.firstElementChild) return 300;
    return (el.firstElementChild as HTMLElement).offsetWidth + 20;
  }, []);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);

    if (centerMode) {
      const containerCenter = el.scrollLeft + el.clientWidth / 2;
      const items = Array.from(el.children) as HTMLElement[];
      let closest = 0;
      let minDist = Infinity;
      items.forEach((item, i) => {
        const itemCenter = item.offsetLeft + item.offsetWidth / 2;
        const dist = Math.abs(containerCenter - itemCenter);
        if (dist < minDist) { minDist = dist; closest = i; }
      });
      setActiveIndex(closest);
    } else {
      const itemWidth = getItemWidth();
      setActiveIndex(Math.round(el.scrollLeft / itemWidth));
    }
  }, [centerMode, getItemWidth]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState, { passive: true });
    updateScrollState();
    return () => el.removeEventListener("scroll", updateScrollState);
  }, [updateScrollState]);

  const scrollTo = useCallback((direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const itemWidth = getItemWidth();
    el.scrollBy({ left: direction === "left" ? -itemWidth : itemWidth, behavior: "smooth" });
  }, [getItemWidth]);

  const scrollToIndex = useCallback((index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const items = Array.from(el.children) as HTMLElement[];
    if (!items[index]) return;
    if (centerMode) {
      const itemCenter = items[index].offsetLeft + items[index].offsetWidth / 2;
      el.scrollTo({ left: itemCenter - el.clientWidth / 2, behavior: "smooth" });
    } else {
      const itemWidth = getItemWidth();
      el.scrollTo({ left: itemWidth * index, behavior: "smooth" });
    }
  }, [centerMode, getItemWidth]);

  // Auto-play with pause-on-hover
  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      if (isPausedRef.current) return;
      const el = scrollRef.current;
      if (!el) return;
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 10) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollTo("right");
      }
    }, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, scrollTo]);

  const handleMouseEnter = () => { isPausedRef.current = true; };
  const handleMouseLeave = () => { isPausedRef.current = false; };

  return (
    <div
      className={`relative group ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Arrow Left */}
      {showArrows && canScrollLeft && (
        <button
          onClick={() => scrollTo("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg
            flex items-center justify-center cursor-pointer transition-all duration-300
            opacity-0 group-hover:opacity-100 hover:scale-110 hover:shadow-xl active:scale-95"
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5 text-neutral-900" />
        </button>
      )}

      {/* Arrow Right */}
      {showArrows && canScrollRight && (
        <button
          onClick={() => scrollTo("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg
            flex items-center justify-center cursor-pointer transition-all duration-300
            opacity-0 group-hover:opacity-100 hover:scale-110 hover:shadow-xl active:scale-95"
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5 text-neutral-900" />
        </button>
      )}

      {/* Items */}
      <div
        ref={scrollRef}
        className={`flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth pb-2
          ${centerMode ? "snap-x snap-mandatory px-[calc(50%-170px)] sm:px-[calc(50%-190px)]" : "snap-x snap-mandatory"}
        `}
      >
        {children.map((child, i) => (
          <div
            key={i}
            className={`shrink-0 transition-all duration-500 ease-out
              ${centerMode ? "snap-center" : "snap-start"}
              ${centerMode
                ? i === activeIndex
                  ? "scale-100 opacity-100 z-10"
                  : "scale-[0.88] opacity-50"
                : ""}
              ${itemClassName}
            `}
          >
            {child}
          </div>
        ))}
      </div>

      {/* Dots */}
      {showDots && children.length > 1 && (
        <div className="flex items-center justify-center gap-2 mt-6">
          {children.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer
                ${i === activeIndex ? "w-8 bg-accent" : "w-2 bg-neutral-300 hover:bg-neutral-400"}
              `}
              aria-label={`Go to item ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
