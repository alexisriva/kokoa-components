import { fireEvent, render, screen } from "@testing-library/react";
import { createRef } from "react";
import { describe, expect, it, vi } from "vitest";

import { Dropdown, type DropdownOption } from "../molecules/Dropdown";

const options: DropdownOption[] = [
  { value: "alpha", label: "Alpha" },
  { value: "beta", label: "Beta" },
];

describe("Dropdown", () => {
  it("renders placeholder and opens options on click", () => {
    render(<Dropdown options={options} placeholder="Select item" />);

    const trigger = screen.getByText("Select item");
    expect(trigger).toBeInTheDocument();

    // Options should not be visible initially
    expect(screen.queryByText("Alpha")).not.toBeInTheDocument();

    // Click to open
    fireEvent.click(trigger);

    // Options should now be visible
    expect(screen.getByText("Alpha")).toBeInTheDocument();
    expect(screen.getByText("Beta")).toBeInTheDocument();
  });

  it("applies variant styles to trigger and merges custom className", () => {
    const { container } = render(
      <Dropdown
        options={options}
        variant="primary"
        className="custom-dropdown"
      />,
    );

    // Container should have custom class
    expect(container.firstChild).toHaveClass("custom-dropdown");

    // Click to find the button more easily or just select by role if strictly one button
    const buttons = screen.getAllByRole("button");
    const trigger = buttons[0]; // The first button is the trigger

    expect(trigger).toHaveClass("kokoa-variant-primary");
    expect(trigger).toHaveClass("kokoa-border-primary");
  });

  it("calls onChange when an option is selected", () => {
    const handleChange = vi.fn();
    render(<Dropdown options={options} onChange={handleChange} />);

    // Open dropdown
    fireEvent.click(screen.getByText("Select...")); // Default placeholder

    // Select option
    fireEvent.click(screen.getByText("Alpha"));

    expect(handleChange).toHaveBeenCalledWith("alpha");

    // Should close after selection
    expect(screen.queryByText("Beta")).not.toBeInTheDocument();
  });

  it("displays the selected value label", () => {
    render(<Dropdown options={options} value="beta" />);
    expect(screen.getByText("Beta")).toBeInTheDocument();
  });

  it("forwards refs to the container element", () => {
    const ref = createRef<HTMLDivElement>();
    render(<Dropdown ref={ref} options={options} />);

    // The ref is attached to the wrapper div
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
