export type ComponentVariant = "primary" | "secondary" | "ghost";

interface VariantToken {
  surface: string;
  border: string;
  placeholder: string;
}

const variantTokens: Record<ComponentVariant, VariantToken> = {
  primary: {
    surface: "kokoa-variant-primary",
    border: "kokoa-border-primary",
    placeholder: "kokoa-placeholder-primary"
  },
  secondary: {
    surface: "kokoa-variant-secondary",
    border: "kokoa-border-secondary",
    placeholder: "kokoa-placeholder-secondary"
  },
  ghost: {
    surface: "kokoa-variant-ghost",
    border: "kokoa-border-ghost",
    placeholder: "kokoa-placeholder-ghost"
  }
};

type ConditionalSetting =
  | boolean
  | Partial<Record<ComponentVariant, boolean | undefined>>;

const resolveConditional = (
  variant: ComponentVariant,
  setting: ConditionalSetting | undefined,
  defaultValue: boolean
) => {
  if (typeof setting === "undefined") {
    return defaultValue;
  }

  if (typeof setting === "boolean") {
    return setting;
  }

  const value = setting[variant];
  return typeof value === "undefined" ? defaultValue : value;
};

export const baseInteractiveClasses =
  "transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

interface ComposeOptions {
  includeBorder?: ConditionalSetting;
  includePlaceholder?: ConditionalSetting;
}

export const composeVariantClasses = (
  variant: ComponentVariant,
  options: ComposeOptions = {}
) => {
  const tokens = variantTokens[variant];
  const includeBorder = resolveConditional(variant, options.includeBorder, true);
  const includePlaceholder = resolveConditional(
    variant,
    options.includePlaceholder,
    false
  );

  return [
    tokens.surface,
    includeBorder ? tokens.border : "",
    includePlaceholder ? tokens.placeholder : ""
  ]
    .filter(Boolean)
    .join(" ");
};
