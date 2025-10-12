import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import {
  composeVariantClasses,
  type ComponentVariant
} from "../../../theme/variants";

export interface PillProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: ComponentVariant;
}

export const Pill = forwardRef<HTMLSpanElement, PillProps>(
  ({ className = "", variant = "secondary", ...props }, ref) => {
    const classes = [
      "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium",
      composeVariantClasses(variant, {
        includeBorder: { primary: false, ghost: false }
      }),
      className
    ]
      .filter(Boolean)
      .join(" ");

    return <span ref={ref} className={classes} {...props} />;
  }
);

Pill.displayName = "Pill";
