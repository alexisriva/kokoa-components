import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { describe, expect, it } from "vitest";

import { Input } from "../atoms/Input";

describe("Input", () => {
  it("renders with default variant and type text", () => {
    render(<Input placeholder="Name" />);

    const input = screen.getByPlaceholderText("Name");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "text");
    expect(input).toHaveClass("kokoa-variant-secondary");
    expect(input).toHaveClass("kokoa-border-secondary");
    expect(input).toHaveClass("kokoa-placeholder-secondary");
    expect(input).toHaveClass("transition-colors");
  });

  it("applies variant styles and merges custom className", () => {
    render(
      <Input variant="primary" className="custom-input" placeholder="Email" />
    );

    const input = screen.getByPlaceholderText("Email");
    expect(input).toHaveClass("kokoa-variant-primary");
    expect(input).toHaveClass("kokoa-border-primary");
    expect(input).toHaveClass("kokoa-placeholder-primary");
    expect(input).not.toHaveClass("kokoa-border-secondary");
    expect(input).toHaveClass("custom-input");
  });

  it("forwards refs to the underlying input element", () => {
    const ref = createRef<HTMLInputElement>();

    render(<Input ref={ref} placeholder="Ref test" />);

    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});
