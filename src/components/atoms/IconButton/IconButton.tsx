import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import {
  baseInteractiveClasses,
  composeVariantClasses,
  type ComponentVariant
} from "../../../theme/variants";

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ComponentVariant;
  size?: "sm" | "md" | "lg";
}

const sizeClasses: Record<NonNullable<IconButtonProps["size"]>, string> = {
  sm: "h-8 w-8 text-sm",
  md: "h-10 w-10 text-base",
  lg: "h-12 w-12 text-lg"
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className = "", variant = "primary", size = "md", type = "button", ...props }, ref) => {
    const classes = [
      "inline-flex items-center justify-center rounded-md",
      sizeClasses[size],
      baseInteractiveClasses,
      composeVariantClasses(variant, {
        includeBorder: { primary: false, ghost: false }
      }),
      className
    ]
      .filter(Boolean)
      .join(" ");

    return <button ref={ref} type={type} className={classes} {...props} />;
  }
);

IconButton.displayName = "IconButton";
