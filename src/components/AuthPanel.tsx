"use client";

import { ArrowRight } from "lucide-react";
import Button from "./Button";
import Logo from "./Logo";

interface AuthPanelProps {
  isLogin: boolean;
  onToggle: () => void;
}

export default function AuthPanel({ isLogin, onToggle }: AuthPanelProps) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-linear-to-br from-primary-dark via-primary to-accent-dark p-8 sm:p-12 flex flex-col justify-between items-center text-center">
      {/* High-contrast animated elements */}
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-accent/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 transition-all duration-1000 ease-in-out"
        style={{
          opacity: isLogin ? 0.4 : 0.8,
          transform: isLogin ? "translate(10%, -30%)" : "translate(40%, -40%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 bg-primary-light/40 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 transition-all duration-1000 ease-in-out"
        style={{
          opacity: isLogin ? 0.8 : 0.4,
          transform: isLogin ? "translate(-30%, 30%)" : "translate(-10%, 20%)",
        }}
      />

      {/* Luxury Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.1] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1.5px,transparent_1.5px)] bg-[size:30px_30px]" />
      </div>

      {/* Top - Logo */}
      <div className="relative z-10 animate-fade-in">
        <Logo variant="light" className="scale-110 sm:scale-125 filter drop-shadow-2xl" />
      </div>

      {/* Center - Content */}
      <div className="relative z-10 text-white max-w-sm w-full flex flex-col items-center">
        <div className="space-y-4 mb-10">
          <h2 className="text-4xl sm:text-5xl font-heading font-black mb-4 leading-tight tracking-tighter animate-fade-in drop-shadow-2xl">
            {isLogin ? "Welcome!" : "Get Started"}
          </h2>
          <p className="text-white/95 text-lg sm:text-xl leading-relaxed font-body font-bold animate-fade-in stagger-1 drop-shadow-xl">
            {isLogin
              ? "Discover the world's most beautiful destinations."
              : "Join elite travelers and unlock exclusive hotel deals."}
          </p>
        </div>

        {/* CTA Button - High Contrast */}
        <div className="w-full max-w-[260px] animate-fade-in stagger-2">
          <Button
            variant="secondary"
            onClick={onToggle}
            className="group w-full py-4.5 flex items-center justify-center gap-3 text-lg font-black transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] bg-white text-primary-dark hover:bg-neutral-50 border-none rounded-2xl active:scale-95 uppercase tracking-widest"
          >
            {isLogin ? (
              <>
                <span>Sign Up</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </>
            ) : (
              <>
                <span>Sign In</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Bottom - Minimal Status */}
      <div className="relative z-10 flex items-center gap-2 animate-fade-in stagger-3">
        <div className="w-2 h-2 bg-teal rounded-full animate-pulse shadow-[0_0_10px_#00D4AA]" />
        <span className="text-[10px] uppercase tracking-[0.3em] font-black text-white/80">Premium Access Guaranteed</span>
      </div>
    </div>
  );
}
