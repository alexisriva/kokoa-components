import { forwardRef, useEffect, useRef, useState, type ReactNode } from "react";
import {
  baseInteractiveClasses,
  composeVariantClasses,
  type ComponentVariant,
} from "../../../theme/variants";

// Icons
const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const CheckIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface DropdownProps {
  /** List of options to display */
  options: DropdownOption[];
  /** Currently selected value */
  value?: string;
  /** Callback when an option is selected */
  onChange?: (value: string) => void;
  /** Label text when no value is selected */
  placeholder?: string;
  /** Icon to display on the left side of the trigger */
  icon?: ReactNode;
  /** Additional class names for the container */
  className?: string;
  /** Variant for styling */
  variant?: ComponentVariant;
  /** Disabled state */
  disabled?: boolean;
}

export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  (
    {
      options = [],
      value,
      onChange,
      placeholder = "Select...",
      icon,
      className = "",
      variant = "secondary",
      disabled = false,
    },
    ref,
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Handle click outside to close dropdown
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          containerRef.current &&
          !containerRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Sync forwarded ref with internal containerRef
    useEffect(() => {
      if (!ref) return;
      if (typeof ref === "function") {
        ref(containerRef.current);
      } else {
        (ref as React.MutableRefObject<HTMLDivElement | null>).current =
          containerRef.current;
      }
    }, [ref]);

    const selectedOption = options.find((opt) => opt.value === value);

    const handleSelect = (option: DropdownOption) => {
      if (option.disabled) return;
      onChange?.(option.value);
      setIsOpen(false);
    };

    const variantClasses = composeVariantClasses(variant);

    return (
      <div
        ref={containerRef}
        className={`relative inline-block text-left ${className}`}
      >
        <button
          type="button"
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
          className={`
            flex w-full min-w-[12rem] items-center justify-between rounded-lg px-4 py-2.5 text-sm font-medium
            ${baseInteractiveClasses}
            ${variantClasses}
            ${isOpen ? "ring-2 ring-slate-500 z-10" : ""}
          `}
        >
          <div className="flex items-center gap-3">
            {icon && (
              <span className="flex items-center justify-center opacity-70">
                {icon}
              </span>
            )}
            <span>{selectedOption ? selectedOption.label : placeholder}</span>
          </div>
          <ChevronDownIcon
            className={`ml-2 h-4 w-4 transition-transform duration-200 opacity-70 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>

        {isOpen && (
          <div className="absolute left-0 top-full z-50 mt-2 w-full min-w-[12rem] origin-top-left rounded-lg border border-slate-200 bg-white p-1 shadow-xl ring-1 ring-black/5 dark:border-slate-800 dark:bg-slate-950">
            <div className="flex flex-col gap-1 max-h-60 overflow-auto">
              {options.map((option) => {
                const isSelected = option.value === value;
                return (
                  <button
                    key={option.value}
                    onClick={() => handleSelect(option)}
                    disabled={option.disabled}
                    className={`
                      group flex w-full items-center justify-between rounded-md px-3 py-2.5 text-sm transition-colors text-left
                      ${
                        isSelected
                          ? "bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-slate-200"
                      }
                      ${option.disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
                    `}
                  >
                    <span className="font-medium">{option.label}</span>
                    {isSelected && (
                      <CheckIcon className="h-4 w-4 text-slate-500" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  },
);

Dropdown.displayName = "Dropdown";
