import { forwardRef, type ReactNode } from "react";
import type { ButtonHTMLAttributes } from "react";
import {
  baseInteractiveClasses,
  composeVariantClasses,
  type ComponentVariant,
} from "../../../theme/variants";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ComponentVariant;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = "",
      variant = "primary",
      type = "button",
      leadingIcon,
      trailingIcon,
      children,
      ...props
    },
    ref,
  ) => {
    const classes = [
      "inline-flex items-center justify-center gap-2 rounded-full px-6 py-2 text-sm font-medium",
      baseInteractiveClasses,
      composeVariantClasses(variant, {
        includeBorder: { primary: false, ghost: false },
      }),
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <button ref={ref} type={type} className={classes} {...props}>
        {leadingIcon && (
          <span className="flex items-center">{leadingIcon}</span>
        )}
        {children}
        {trailingIcon && (
          <span className="flex items-center">{trailingIcon}</span>
        )}
      </button>
    );
  },
);

Button.displayName = "Button";
