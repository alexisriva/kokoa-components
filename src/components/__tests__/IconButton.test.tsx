import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { describe, expect, it } from "vitest";

import { IconButton } from "../atoms/IconButton";

const Icon = () => <span aria-hidden="true">★</span>;

describe("IconButton", () => {
  it("renders with default variant, size, and button type", () => {
    render(
      <IconButton aria-label="Favorite">
        <Icon />
      </IconButton>
    );

    const button = screen.getByRole("button", { name: "Favorite" });
    expect(button).toHaveAttribute("type", "button");
    expect(button).toHaveClass("kokoa-variant-primary");
    expect(button).toHaveClass("h-10");
    expect(button).toHaveClass("w-10");
    expect(button).toHaveClass("transition-colors");
  });

  it("applies variant styles, custom size, and merges className", () => {
    render(
      <IconButton
        aria-label="Delete"
        variant="ghost"
        size="sm"
        className="rounded-full"
      >
        <Icon />
      </IconButton>
    );

    const button = screen.getByRole("button", { name: "Delete" });
    expect(button).toHaveClass("kokoa-variant-ghost");
    expect(button).toHaveClass("h-8");
    expect(button).toHaveClass("w-8");
    expect(button).toHaveClass("rounded-full");
  });

  it("forwards refs to the underlying button element", () => {
    const ref = createRef<HTMLButtonElement>();

    render(
      <IconButton ref={ref} aria-label="Settings">
        <Icon />
      </IconButton>
    );

    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });
});
