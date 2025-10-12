import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { describe, expect, it } from "vitest";

import { Textarea } from "../atoms/Textarea";

describe("Textarea", () => {
  it("renders with default rows and variant", () => {
    render(<Textarea placeholder="Feedback" />);

    const textarea = screen.getByPlaceholderText("Feedback");
    expect(textarea).toHaveAttribute("rows", "4");
    expect(textarea).toHaveClass("kokoa-variant-secondary");
    expect(textarea).toHaveClass("kokoa-border-secondary");
    expect(textarea).toHaveClass("kokoa-placeholder-secondary");
  });

  it("applies variant styles, custom rows, and merges className", () => {
    render(
      <Textarea
        variant="primary"
        rows={6}
        className="custom-textarea"
        placeholder="Notes"
      />
    );

    const textarea = screen.getByPlaceholderText("Notes");
    expect(textarea).toHaveAttribute("rows", "6");
    expect(textarea).toHaveClass("kokoa-variant-primary");
    expect(textarea).toHaveClass("kokoa-border-primary");
    expect(textarea).toHaveClass("custom-textarea");
  });

  it("forwards refs to the underlying textarea element", () => {
    const ref = createRef<HTMLTextAreaElement>();

    render(<Textarea ref={ref} placeholder="Ref test" />);

    expect(ref.current).toBeInstanceOf(HTMLTextAreaElement);
  });
});
