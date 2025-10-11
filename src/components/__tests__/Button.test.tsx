import { render, screen } from "@testing-library/react";
import { createRef } from "react";

import { Button } from "../Button";
import { describe, expect, it } from "vitest";

describe("Button", () => {
  it("renders with default variant and type button", () => {
    render(<Button>Click me</Button>);

    const button = screen.getByRole("button", { name: "Click me" });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("type", "button");
    expect(button).toHaveClass("bg-slate-900");
  });

  it("applies variant styles and merges custom className", () => {
    render(
      <Button variant="secondary" className="custom-class">
        Submit
      </Button>
    );

    const button = screen.getByRole("button", { name: "Submit" });
    expect(button).toHaveClass("bg-white");
    expect(button).toHaveClass("custom-class");
    expect(button).not.toHaveClass("bg-slate-900");
  });

  it("forwards refs to the underlying button element", () => {
    const ref = createRef<HTMLButtonElement>();

    render(<Button ref={ref}>Ref test</Button>);

    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });
});
