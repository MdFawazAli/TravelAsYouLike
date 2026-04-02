"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&h=1080&fit=crop",
    tagline: "EXCLUSIVE DEALS",
    title: "Spanish",
    highlight: "Sunshine",
    subtitle: "Majorca, Costa Blanca & Costa Del Sol from £199pp",
    accent: "from-accent/90",
  },
  {
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1920&h=1080&fit=crop",
    tagline: "ALL INCLUSIVE",
    title: "Turkey",
    highlight: "5 Star Luxury",
    subtitle: "Premium all-inclusive resorts from £329pp",
    accent: "from-teal/90",
  },
  {
    image: "https://images.unsplash.com/photo-1696519669474-3001c0e2b548?w=1920&h=1080&fit=crop",
    tagline: "ISLAND MAGIC",
    title: "Greece",
    highlight: "Beach Resorts",
    subtitle: "Rhodes, Kos, Crete & Corfu from £399pp",
    accent: "from-gold/90",
  },
  {
    image: "https://images.unsplash.com/photo-1563188620-da3bd5cb19db?w=1920&h=1080&fit=crop",
    tagline: "YEAR-ROUND SUN",
    title: "Canary",
    highlight: "Islands",
    subtitle: "Tenerife, Lanzarote & Gran Canaria from £379pp",
    accent: "from-accent/90",
  },
];

const SLIDE_DURATION = 6000;

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback((index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent(index);
    setProgress(0);
    setTimeout(() => setIsAnimating(false), 800);
  }, [isAnimating]);

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, goTo]);

  // Auto-advance + progress bar
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          next();
          return 0;
        }
        return p + (100 / (SLIDE_DURATION / 50));
      });
    }, 50);
    return () => clearInterval(interval);
  }, [isPlaying, next]);

  return (
    <section className="relative h-[100vh] min-h-[700px] overflow-hidden bg-primary-dark">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-all duration-[1200ms] ease-out
            ${i === current ? "opacity-100 scale-100" : "opacity-0 scale-110"}
          `}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={i === 0}
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/80 via-primary/50 to-primary/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/70 via-transparent to-transparent" />
        </div>
      ))}

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-accent/5 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-32 left-10 w-52 h-52 bg-gold/5 rounded-full blur-[80px] animate-float stagger-3" />
      <div className="absolute top-1/2 right-1/3 w-40 h-40 bg-teal/5 rounded-full blur-[60px] animate-float stagger-5" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center pb-32 sm:pb-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            {/* Tagline */}
            <div
              key={`tag-${current}`}
              className="animate-slide-down mb-4"
            >
              <span className="inline-block text-gold font-bold text-sm tracking-[0.25em] uppercase border-b-2 border-gold/40 pb-1">
                {slides[current].tagline}
              </span>
            </div>

            {/* Title */}
            <h1
              key={`title-${current}`}
              className="animate-slide-up"
            >
              <span className="block font-heading text-5xl sm:text-6xl lg:text-8xl font-black text-white leading-[0.95]">
                {slides[current].title}
              </span>
              <span className="block font-heading text-5xl sm:text-6xl lg:text-8xl font-black leading-[0.95] mt-1">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-light to-accent">
                  {slides[current].highlight}
                </span>
              </span>
            </h1>

            {/* Subtitle */}
            <p
              key={`sub-${current}`}
              className="animate-slide-up stagger-2 text-white/70 text-lg sm:text-xl mt-6 max-w-md"
            >
              {slides[current].subtitle}
            </p>

            {/* CTA */}
            <div
              key={`cta-${current}`}
              className="animate-slide-up stagger-3 mt-8 flex items-center gap-4"
            >
              <button className="px-8 py-4 bg-accent hover:bg-accent-light text-white font-bold rounded-xl transition-all duration-300 cursor-pointer shadow-lg hover:shadow-[0_0_30px_rgba(255,107,44,0.4)] active:scale-[0.97]">
                Book Now
              </button>
              <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all duration-300 cursor-pointer backdrop-blur-sm">
                View Deals
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide counter */}
      <div className="absolute top-1/2 -translate-y-1/2 right-8 z-20 hidden lg:flex flex-col items-center gap-3">
        <span className="text-white/50 text-xs font-mono">0{current + 1}</span>
        <div className="w-px h-12 bg-white/20 relative">
          <div
            className="absolute top-0 left-0 w-full bg-accent transition-all duration-300"
            style={{ height: `${((current + 1) / slides.length) * 100}%` }}
          />
        </div>
        <span className="text-white/30 text-xs font-mono">0{slides.length}</span>
      </div>
    </section>
  );
}
