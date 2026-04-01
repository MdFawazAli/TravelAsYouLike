"use client";

import { forwardRef, type ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "accent" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
}

const variants: Record<Variant, string> = {
  primary: "bg-primary hover:bg-primary-light text-white shadow-md hover:shadow-lg",
  secondary: "bg-gold hover:bg-gold-light text-primary-dark shadow-md hover:shadow-lg",
  accent: "bg-accent hover:bg-accent-light text-white shadow-md hover:shadow-[0_0_25px_rgba(255,107,44,0.3)]",
  outline: "border-2 border-neutral-200 text-neutral-900 hover:border-accent hover:text-accent",
  ghost: "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2.5 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", loading, disabled, className = "", children, ...props }, ref) => (
    <button
      ref={ref}
      disabled={disabled || loading}
      className={`inline-flex items-center justify-center font-bold rounded-xl
        cursor-pointer transition-all duration-300 active:scale-[0.97]
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {loading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
        </svg>
      )}
      {children}
    </button>
  )
);
Button.displayName = "Button";
export default Button;
