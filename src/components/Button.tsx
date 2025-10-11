import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
}

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-slate-900 text-white hover:bg-slate-800 focus-visible:outline-slate-900",
  secondary:
    "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 focus-visible:outline-slate-300",
  ghost:
    "bg-transparent text-slate-900 hover:bg-slate-100 focus-visible:outline-slate-200",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", type = "button", ...props }, ref) => {
    const classes = [
      "inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      variantStyles[variant],
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return <button ref={ref} type={type} className={classes} {...props} />;
  }
);

Button.displayName = "Button";
