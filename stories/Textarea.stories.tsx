import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "../src";

const meta: Meta<typeof Textarea> = {
  title: "Atoms/Textarea",
  component: Textarea,
  args: {
    placeholder: "Share your thoughts…",
    variant: "primary",
    rows: 4
  }
};

export default meta;
type Story = StoryObj<typeof Textarea>;

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
