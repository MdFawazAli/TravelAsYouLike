"use client";

import { useState, useEffect, memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Clock, Check, Timer } from "lucide-react";
import type { Package } from "@/lib/data";

const CountdownBadge = memo(function CountdownBadge({ days }: { days: number }) {
  const [time, setTime] = useState(() => ({
    d: days,
    h: Math.floor(Math.random() * 24),
    m: Math.floor(Math.random() * 60),
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { d, h, m } = prev;
        m--;
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 23; d--; }
        if (d < 0) return prev;
        return { d, h, m };
      });
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-1.5 bg-gradient-to-r from-error to-accent text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg" style={{ animation: "countdown-pulse 2s ease-in-out infinite" }}>
      <Timer className="w-3.5 h-3.5" />
      <span>{time.d}d {time.h}h</span>
    </div>
  );
});

const PackageCard = memo(function PackageCard({ pkg }: { pkg: Package }) {
  const discount = Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100);
  const countdownDays = parseInt(pkg.id) * 3 + 2;

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col min-w-[310px] sm:min-w-[350px] hover:-translate-y-2">
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image src={pkg.image} alt={pkg.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="350px" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* Countdown */}
        <div className="absolute top-3 left-3">
          <CountdownBadge days={countdownDays} />
        </div>

        {/* Discount */}
        <div className="absolute top-3 right-3 bg-gold text-primary-dark text-xs font-black px-2.5 py-1 rounded-lg shadow-md">
          SAVE {discount}%
        </div>

        {/* Bottom overlay */}
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h3 className="font-heading font-bold text-xl leading-tight drop-shadow-md">{pkg.title}</h3>
          <p className="text-white/80 text-sm mt-0.5">{pkg.destination}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1.5">
            <Star className="w-4 h-4 text-gold fill-current" />
            <span className="font-bold text-sm">{pkg.rating}</span>
          </div>
          <div className="flex items-center gap-1 text-neutral-400 text-sm">
            <Clock className="w-3.5 h-3.5" />
            <span>{pkg.duration}</span>
          </div>
        </div>

        {/* Includes */}
        <div className="grid grid-cols-2 gap-1.5 mb-4">
          {pkg.includes.map((item) => (
            <span key={item} className="flex items-center gap-1 text-xs text-teal font-medium">
              <Check className="w-3 h-3" />
              {item}
            </span>
          ))}
        </div>

        {/* Price */}
        <div className="mt-auto flex items-end justify-between pt-4 border-t border-neutral-100">
          <div>
            <span className="text-sm text-neutral-300 line-through font-sans">£{pkg.originalPrice.toLocaleString()}</span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-sans font-black text-accent">£{pkg.price.toLocaleString()}</span>
              <span className="text-xs text-neutral-400">pp</span>
            </div>
          </div>
          <Link href={`/deals/${pkg.id}`} className="px-4 py-2.5 bg-accent hover:bg-accent-light text-white text-xs font-bold rounded-xl transition-all duration-300 cursor-pointer shadow-sm hover:shadow-lg active:scale-[0.95]">
            View Deal
          </Link>
        </div>
      </div>
    </div>
  );
});

export default PackageCard;
