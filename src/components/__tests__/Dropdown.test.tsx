import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { describe, expect, it } from "vitest";

import { Dropdown, type DropdownOption } from "../molecules/Dropdown";

const options: DropdownOption[] = [
  { value: "alpha", label: "Alpha" },
  { value: "beta", label: "Beta" }
];

describe("Dropdown", () => {
  it("renders provided options with default variant", () => {
    render(<Dropdown options={options} aria-label="Example" />);

    const dropdown = screen.getByRole("combobox", { name: "Example" });
    expect(dropdown).toBeInTheDocument();
    expect(dropdown).toHaveClass("kokoa-variant-secondary");
    expect(dropdown).toHaveClass("kokoa-border-secondary");
    expect(dropdown).toHaveClass("transition-colors");

    options.forEach(({ label }) => {
      expect(screen.getByRole("option", { name: label })).toBeInTheDocument();
    });
  });

  it("applies variant styles and merges custom className", () => {
    render(
      <Dropdown
        options={options}
        variant="primary"
        className="custom-dropdown"
        aria-label="Primary dropdown"
      />
    );

    const dropdown = screen.getByRole("combobox", { name: "Primary dropdown" });
    expect(dropdown).toHaveClass("kokoa-variant-primary");
    expect(dropdown).toHaveClass("kokoa-border-primary");
    expect(dropdown).not.toHaveClass("kokoa-border-secondary");
    expect(dropdown).toHaveClass("custom-dropdown");
  });

  it("forwards refs to the underlying select element", () => {
    const ref = createRef<HTMLSelectElement>();

    render(<Dropdown ref={ref} options={options} aria-label="Ref dropdown" />);

    expect(ref.current).toBeInstanceOf(HTMLSelectElement);
  });
});
