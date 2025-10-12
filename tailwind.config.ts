import type { Config } from "tailwindcss";
import type { CSSRuleObject } from "tailwindcss/types/config";
import plugin from "tailwindcss/plugin";

type VariantKey = "primary" | "secondary" | "ghost";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}", "./stories/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {}
  },
  plugins: [
    plugin(({ addComponents, addUtilities, theme }) => {
      const variants: Record<
        VariantKey,
        {
          background: string;
          text: string;
          hoverBackground: string;
          outline: string;
          border: string;
          placeholder: string;
        }
      > = {
        primary: {
          background: theme("colors.slate.900") as string,
          text: theme("colors.white") as string,
          hoverBackground: theme("colors.slate.800") as string,
          outline: theme("colors.slate.900") as string,
          border: "transparent",
          placeholder: theme("colors.slate.300") as string
        },
        secondary: {
          background: theme("colors.white") as string,
          text: theme("colors.slate.900") as string,
          hoverBackground: theme("colors.slate.50") as string,
          outline: theme("colors.slate.300") as string,
          border: theme("colors.slate.200") as string,
          placeholder: theme("colors.slate.400") as string
        },
        ghost: {
          background: "transparent",
          text: theme("colors.slate.900") as string,
          hoverBackground: theme("colors.slate.100") as string,
          outline: theme("colors.slate.200") as string,
          border: "transparent",
          placeholder: theme("colors.slate.400") as string
        }
      };

      const surfaceClasses = Object.entries(variants).reduce<
        Record<string, CSSRuleObject>
      >((acc, [variant, values]) => {
        acc[`.kokoa-variant-${variant}`] = {
          backgroundColor: values.background,
          color: values.text,
          "&:hover": {
            backgroundColor: values.hoverBackground
          },
          "&:focus-visible": {
            outlineColor: values.outline
          }
        };
        return acc;
      }, {});

      const borderUtilities = Object.entries(variants).reduce<
        Record<string, CSSRuleObject>
      >((acc, [variant, values]) => {
        acc[`.kokoa-border-${variant}`] = {
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: values.border
        };
        return acc;
      }, {});

      const placeholderUtilities = Object.entries(variants).reduce<
        Record<string, CSSRuleObject>
      >((acc, [variant, values]) => {
        acc[`.kokoa-placeholder-${variant}::placeholder`] = {
          color: values.placeholder,
          opacity: "1"
        };
        return acc;
      }, {});

      addComponents(surfaceClasses);
      addUtilities(borderUtilities);
      addUtilities(placeholderUtilities);
    })
  ]
};

export default config;
