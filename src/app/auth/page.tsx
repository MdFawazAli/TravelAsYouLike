"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import AuthForm from "@/components/AuthForm";
import AuthPanel from "@/components/AuthPanel";
import Logo from "@/components/Logo";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-neutral-50 via-surface to-neutral-50 flex flex-col">
      {/* Header with back button - HIDDEN ON MOBILE */}
      <div className="hidden lg:flex w-full justify-start px-4 sm:px-6 lg:px-8 pt-4 pb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-bold text-sm text-neutral-700 hover:text-neutral-900 transition-colors px-4 py-2 rounded-xl bg-white/40 backdrop-blur-md border border-white/30 shadow-md"
          style={{boxShadow: "0 4px 24px 0 rgba(27,27,58,0.08)", WebkitBackdropFilter: "blur(12px)"}}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center pb-4 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl h-full max-h-[calc(100vh-64px)] flex items-center justify-center">
          {/* Desktop Layout - Enhanced Layered Transition */}
          <div className="hidden lg:flex relative overflow-hidden rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.2)] h-162.5 max-h-[calc(100vh-96px)] min-h-135 w-full bg-white">
            
            {/* Sliding Panel (The "Mover") */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-50 transition-all duration-[850ms] cubic-bezier(0.7, 0, 0.2, 1)"
              style={{
                transform: isLogin ? "translateX(50%)" : "translateX(0)",
              }}
            >
              <div className="w-1/2 h-full absolute left-0 top-0 pointer-events-auto shadow-[0_0_80px_rgba(0,0,0,0.4)] border-x border-white/10 overflow-hidden">
                <AuthPanel isLogin={isLogin} onToggle={toggleAuthMode} />
              </div>
            </div>

            {/* Content Containers with Parallax Reveal */}
            {/* Sign In Content (visible when panel is on the right) */}
            <div className={`absolute top-0 left-0 w-1/2 h-full flex items-center justify-center transition-all duration-700 delay-100 ease-in-out z-30 ${isLogin ? "opacity-100 translate-x-0 scale-100" : "opacity-0 -translate-x-20 scale-95 pointer-events-none"}`}>
              <div className="relative z-10 w-full px-12 sm:px-16 max-w-xl">
                <div className="mb-10 space-y-3">
                  <h1 className="text-5xl font-heading font-black text-neutral-900 leading-none tracking-tighter">Welcome Back</h1>
                  <div className="h-1.5 w-14 bg-accent rounded-full" />
                  <p className="text-neutral-500 font-black text-[10px] uppercase tracking-[0.3em] pt-2">Access your elite dashboard</p>
                </div>
                <AuthForm isLogin={true} />
                <p className="text-center text-neutral-400 text-[10px] font-black uppercase tracking-[0.25em] mt-10">
                  New here?{' '}
                  <button
                    onClick={toggleAuthMode}
                    className="font-black text-accent hover:text-accent-dark transition-all duration-300 cursor-pointer underline underline-offset-8"
                  >
                    Create Account
                  </button>
                </p>
              </div>
            </div>

            {/* Sign Up Content (visible when panel is on the left) */}
            <div className={`absolute top-0 right-0 w-1/2 h-full flex items-center justify-center transition-all duration-700 delay-100 ease-in-out z-30 ${!isLogin ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-20 scale-95 pointer-events-none"}`}>
              <div className="relative z-10 w-full px-12 sm:px-16 max-w-xl">
                <div className="mb-10 space-y-3">
                  <h1 className="text-5xl font-heading font-black text-neutral-900 leading-none tracking-tighter">Join Us</h1>
                  <div className="h-1.5 w-14 bg-accent rounded-full" />
                  <p className="text-neutral-500 font-black text-[10px] uppercase tracking-[0.3em] pt-2">Begin your premium journey</p>
                </div>
                <AuthForm isLogin={false} />
                <p className="text-center text-neutral-400 text-[10px] font-black uppercase tracking-[0.25em] mb-4 mt-4">
                  Already a member?{' '}
                  <button
                    onClick={toggleAuthMode}
                    className="font-black text-accent hover:text-accent-dark transition-all duration-300 cursor-pointer underline underline-offset-8"
                  >
                    Log In
                  </button>
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Layout - Single Professional Sliding Card */}
          <div className="lg:hidden w-full max-w-md mx-auto px-4 py-8 flex flex-col h-screen max-h-[900px]">
            <div className="relative overflow-hidden bg-white rounded-[2.5rem] shadow-[0_30px_70px_rgba(0,0,0,0.15)] border border-neutral-100 flex-1 flex flex-col min-h-0">
              {/* Back Button for Mobile Card */}
              <Link 
                href="/" 
                className="absolute top-4 left-4 z-50 w-10 h-10 bg-black/20 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-black/40 transition-all border border-white/20"
              >
                <ArrowLeft className="w-5 h-5" />
              </Link>

              {/* Header Panel for Mobile */}
              <div className="h-32 shrink-0 relative overflow-hidden">
                <AuthPanel isLogin={isLogin} onToggle={toggleAuthMode} />
              </div>

              {/* Sliding Form Container */}
              <div className="flex-1 relative overflow-hidden">
                <div
                  className="flex h-full transition-transform duration-700 cubic-bezier(0.645, 0.045, 0.355, 1)"
                  style={{
                    transform: isLogin ? "translateX(-100%)" : "translateX(0)",
                  }}
                >
                  {/* Sign Up Slide */}
                  <div className={`w-full shrink-0 p-6 sm:p-8 flex flex-col h-full overflow-y-auto transition-opacity duration-500 ${!isLogin ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                    <div className="mb-6">
                      <h2 className="text-3xl font-heading font-black text-neutral-900 mb-1 tracking-tighter">Register</h2>
                      <p className="text-neutral-500 text-[10px] font-black uppercase tracking-[0.2em]">Start your journey</p>
                    </div>
                    <div className="flex-1">
                      <AuthForm isLogin={false} />
                    </div>
                    <div className="mt-4 pt-4 text-center border-t border-neutral-50 shrink-0">
                      <p className="text-neutral-500 text-[10px] font-black uppercase tracking-widest">
                        Have an account?{" "}
                        <button
                          onClick={toggleAuthMode}
                          className="text-accent hover:text-accent-dark transition-colors underline underline-offset-4"
                        >
                          Log In
                        </button>
                      </p>
                    </div>
                  </div>

                  {/* Sign In Slide */}
                  <div className={`w-full shrink-0 p-6 sm:p-8 flex flex-col h-full overflow-y-auto transition-opacity duration-500 ${isLogin ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                    <div className="mb-6">
                      <h2 className="text-3xl font-heading font-black text-neutral-900 mb-1 tracking-tighter">Sign In</h2>
                      <p className="text-neutral-500 text-[10px] font-black uppercase tracking-[0.2em]">Welcome back traveler</p>
                    </div>
                    <div className="flex-1">
                      <AuthForm isLogin={true} />
                    </div>
                    <div className="mt-4 pt-4 text-center border-t border-neutral-50 shrink-0">
                      <p className="text-neutral-500 text-[10px] font-black uppercase tracking-widest">
                        New here?{" "}
                        <button
                          onClick={toggleAuthMode}
                          className="text-accent hover:text-accent-dark transition-colors underline underline-offset-4"
                        >
                          Join Now
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
