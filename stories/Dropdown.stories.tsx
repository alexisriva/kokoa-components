import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "../src";

const options = [
  { value: "vanilla", label: "Vanilla" },
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" }
];

const meta: Meta<typeof Dropdown> = {
  title: "Molecules/Dropdown",
  component: Dropdown,
  args: {
    options,
    "aria-label": "Favorite flavor",
    variant: "primary"
  }
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Primary: Story = {
  args: {}
};

export const Secondary: Story = {
  args: {
    variant: "secondary"
  }
};

export const Ghost: Story = {
  args: {
    variant: "ghost"
  }
};
