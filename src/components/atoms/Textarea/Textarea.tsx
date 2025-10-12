import { forwardRef } from "react";
import type { TextareaHTMLAttributes } from "react";
import {
  baseInteractiveClasses,
  composeVariantClasses,
  type ComponentVariant
} from "../../../theme/variants";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: ComponentVariant;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = "", variant = "secondary", rows = 4, ...props }, ref) => {
    const classes = [
      "block w-full rounded-md px-4 py-2 text-sm font-medium",
      baseInteractiveClasses,
      composeVariantClasses(variant, { includePlaceholder: true }),
      className
    ]
      .filter(Boolean)
      .join(" ");

    return <textarea ref={ref} className={classes} rows={rows} {...props} />;
  }
);

Textarea.displayName = "Textarea";
