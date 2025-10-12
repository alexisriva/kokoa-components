import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "../src";

const Star = () => (
  <span aria-hidden="true" className="text-current">
    ★
  </span>
);

const meta: Meta<typeof IconButton> = {
  title: "Atoms/IconButton",
  component: IconButton,
  args: {
    "aria-label": "Favorite",
    children: <Star />,
    variant: "primary"
  }
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Primary: Story = {};

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

export const Large: Story = {
  args: {
    size: "lg"
  }
};

export const Small: Story = {
  args: {
    size: "sm"
  }
};
