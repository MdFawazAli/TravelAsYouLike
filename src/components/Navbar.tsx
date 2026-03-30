"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Building2, Package, Globe } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { label: "Hotels", href: "/hotels", icon: Building2 },
  { label: "Destinations", href: "/#destinations", icon: Globe },
  { label: "Packages", href: "/#packages", icon: Package },
];

export default function Navbar({ variant = "transparent" }: { variant?: "transparent" | "solid" }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isSolid = variant === "solid" || scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out px-4 py-4 sm:px-6 lg:px-8 flex justify-center pointer-events-none`}
    >
      <nav 
        className={`
          relative w-full max-w-7xl flex items-center justify-between h-[64px] px-6 sm:px-8 pointer-events-auto
          transition-all duration-500 ease-in-out rounded-[32px]
          ${isSolid 
            ? "bg-primary/80 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] mt-2" 
            : "bg-white/[0.08] backdrop-blur-xl border border-white/20 shadow-xl mt-2"}
        `}
      >
        {/* Decorative inner glow for crystalline look */}
        {!isSolid && (
          <div className="absolute inset-0 rounded-[32px] bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none" />
        )}

        {/* Logo */}
        <Link href="/" className="cursor-pointer group shrink-0 relative z-10">
          <Logo variant="light" />
        </Link>

        {/* Desktop nav - Centered Links */}
        <div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2 z-20">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`flex items-center gap-2 px-4 py-2 text-white/90 hover:text-white rounded-full text-sm font-bold transition-all duration-300 cursor-pointer 
                ${scrolled ? "hover:bg-white/10" : "hover:bg-white/15"}
              `}
            >
              <link.icon className="w-4 h-4 opacity-70" />
              <span className="tracking-tight">{link.label}</span>
            </Link>
          ))}
        </div>

        {/* Actions - Right Aligned */}
        <div className="hidden md:flex items-center gap-2 shrink-0 relative z-10">
          <button className="px-5 py-2 text-white/90 hover:text-white text-sm font-bold rounded-full transition-all cursor-pointer hover:bg-white/10">
            Sign In
          </button>
          <button className="px-6 py-2.5 bg-accent hover:bg-accent-light text-white text-sm font-black rounded-full transition-all duration-300 cursor-pointer shadow-lg hover:shadow-[0_0_20px_rgba(255,107,44,0.4)] active:scale-[0.95]">
            Book Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-white rounded-full hover:bg-white/10 transition-colors cursor-pointer"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile menu - Dropdown from the pill */}
        <div
          className={`absolute top-[calc(100%+12px)] left-0 right-0 md:hidden transition-all duration-500 ease-in-out overflow-hidden
            ${mobileOpen ? "max-h-[400px] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-4"}
          `}
        >
          <div className="bg-primary/90 backdrop-blur-2xl border border-white/10 rounded-[32px] p-6 shadow-2xl space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-4 px-5 py-3.5 text-white/80 hover:text-white hover:bg-white/10 rounded-2xl font-bold transition-all cursor-pointer"
              >
                <link.icon className="w-5 h-5 opacity-70" />
                {link.label}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <button className="w-full py-4 text-white/80 border border-white/10 rounded-2xl font-bold cursor-pointer hover:bg-white/5 transition-all">
                Sign In
              </button>
              <button className="w-full py-4 bg-accent text-white rounded-2xl font-black cursor-pointer hover:bg-accent-light transition-all shadow-lg">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
