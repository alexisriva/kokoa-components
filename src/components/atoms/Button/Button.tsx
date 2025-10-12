import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import {
  baseInteractiveClasses,
  composeVariantClasses,
  type ComponentVariant,
} from "../../../theme/variants";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ComponentVariant;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", type = "button", ...props }, ref) => {
    const classes = [
      "inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium",
      baseInteractiveClasses,
      composeVariantClasses(variant, {
        includeBorder: { primary: false, ghost: false },
      }),
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return <button ref={ref} type={type} className={classes} {...props} />;
  }
);

Button.displayName = "Button";
