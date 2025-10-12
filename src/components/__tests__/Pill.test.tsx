import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { describe, expect, it } from "vitest";

import { Pill } from "../atoms/Pill";

describe("Pill", () => {
  it("renders content with default variant", () => {
    render(<Pill>Beta</Pill>);

    const pill = screen.getByText("Beta");
    expect(pill).toHaveClass("kokoa-variant-secondary");
    expect(pill).toHaveClass("kokoa-border-secondary");
    expect(pill).toHaveClass("rounded-full");
  });

  it("applies variant styles and custom className", () => {
    render(
      <Pill variant="primary" className="custom-pill">
        Alpha
      </Pill>
    );

    const pill = screen.getByText("Alpha");
    expect(pill).toHaveClass("kokoa-variant-primary");
    expect(pill).toHaveClass("custom-pill");
  });

  it("forwards refs to the underlying span element", () => {
    const ref = createRef<HTMLSpanElement>();

    render(<Pill ref={ref}>Gamma</Pill>);

    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
  });
});
