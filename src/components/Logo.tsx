"use client";

import React from "react";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  variant?: "light" | "dark" | "color";
}

export default function Logo({ className = "", iconOnly = false, variant = "color" }: LogoProps) {
  const textColor = variant === "light" ? "#FFFFFF" : variant === "dark" ? "#1B1B3A" : "#FFFFFF";
  const iconColor = "#FF6B2C";

  return (
    <div className={`flex items-center ${className}`}>
      {/* ─── ELITE COMMERCIAL TRAVEL JET ICON ─── */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <g transform="translate(20, 20) rotate(-45) translate(-18, -16)">
          {/* Subtle Speed Lines (Trailing behind the tail) */}
          <line x1="-1" y1="14.5" x2="4" y2="14.5" stroke={iconColor} strokeWidth="1" strokeLinecap="round" className="opacity-10" />
          <line x1="-4" y1="16" x2="6" y2="16" stroke={iconColor} strokeWidth="1" strokeLinecap="round" className="opacity-25" />
          <line x1="-1" y1="17.5" x2="4" y2="17.5" stroke={iconColor} strokeWidth="1" strokeLinecap="round" className="opacity-10" />

          {/* Precision Engineered Commercial Jet (Robust Root, Small Nose) */}
          <path
            d="M28 16C28 17 27 18 25 18H19L12.5 26.5H9.5L13.5 18H7.5L5.5 20.5H3.5L4.5 16L3.5 11.5H5.5L7.5 14H13.5L9.5 5.5H12.5L19 14H25C27 14 28 15 28 16Z"
            fill={iconColor}
          />
        </g>
      </svg>

      {/* ─── REFINED TYPOGRAPHY ─── */}
      {!iconOnly && (
        <div className="flex items-baseline">
          <span 
            className="font-sans font-bold text-xl tracking-tight"
            style={{ color: textColor }}
          >
            Travel<span className="text-accent">As</span>YouLike
          </span>
        </div>
      )}
    </div>
  );
}
