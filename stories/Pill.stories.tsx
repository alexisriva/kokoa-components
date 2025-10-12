import type { Meta, StoryObj } from "@storybook/react";
import { Pill } from "../src";

const meta: Meta<typeof Pill> = {
  title: "Atoms/Pill",
  component: Pill,
  args: {
    children: "New",
    variant: "primary"
  }
};

export default meta;
type Story = StoryObj<typeof Pill>;

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
