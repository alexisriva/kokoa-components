import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../src";

const meta: Meta<typeof Input> = {
  title: "Atoms/Input",
  component: Input,
  args: {
    placeholder: "Enter text",
    variant: "primary"
  }
};

export default meta;
type Story = StoryObj<typeof Input>;

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
