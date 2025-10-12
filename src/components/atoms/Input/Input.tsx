import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";
import {
  baseInteractiveClasses,
  composeVariantClasses,
  type ComponentVariant,
} from "../../../theme/variants";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: ComponentVariant;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", variant = "secondary", type = "text", ...props }, ref) => {
    const classes = [
      "block w-full rounded-md px-4 py-2 text-sm font-medium",
      baseInteractiveClasses,
      composeVariantClasses(variant, { includePlaceholder: true }),
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return <input ref={ref} type={type} className={classes} {...props} />;
  }
);

Input.displayName = "Input";
