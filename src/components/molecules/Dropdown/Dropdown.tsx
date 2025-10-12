import { forwardRef } from "react";
import type { ReactNode, SelectHTMLAttributes } from "react";
import {
  baseInteractiveClasses,
  composeVariantClasses,
  type ComponentVariant,
} from "../../../theme/variants";

export interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface DropdownProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  variant?: ComponentVariant;
  options?: DropdownOption[];
  children?: ReactNode;
}

export const Dropdown = forwardRef<HTMLSelectElement, DropdownProps>(
  (
    {
      className = "",
      variant = "secondary",
      options,
      children,
      ...props
    },
    ref
  ) => {
    const classes = [
      "block w-full min-w-[12rem] rounded-md px-4 py-2 text-sm font-medium appearance-none",
      baseInteractiveClasses,
      composeVariantClasses(variant),
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <select ref={ref} className={classes} {...props}>
        {options?.map(({ value, label, disabled }) => (
          <option key={value} value={value} disabled={disabled}>
            {label}
          </option>
        ))}
        {children}
      </select>
    );
  }
);

Dropdown.displayName = "Dropdown";
