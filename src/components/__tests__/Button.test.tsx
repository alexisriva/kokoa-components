import { render, screen } from "@testing-library/react";
import { createRef } from "react";

import { Button } from "../atoms/Button";
import { describe, expect, it } from "vitest";

describe("Button", () => {
  it("renders with default variant and type button", () => {
    render(<Button>Click me</Button>);

    const button = screen.getByRole("button", { name: "Click me" });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("type", "button");
    expect(button).toHaveClass("kokoa-variant-primary");
    expect(button).not.toHaveClass("kokoa-border-secondary");
    expect(button).toHaveClass("transition-colors");
  });

  it("applies variant styles and merges custom className", () => {
    render(
      <Button variant="secondary" className="custom-class">
        Submit
      </Button>
    );

    const button = screen.getByRole("button", { name: "Submit" });
    expect(button).toHaveClass("kokoa-variant-secondary");
    expect(button).toHaveClass("kokoa-border-secondary");
    expect(button).toHaveClass("custom-class");
    expect(button).not.toHaveClass("kokoa-variant-primary");
  });

  it("forwards refs to the underlying button element", () => {
    const ref = createRef<HTMLButtonElement>();

    render(<Button ref={ref}>Ref test</Button>);

    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });
});
