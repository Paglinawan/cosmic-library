import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./Button";

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
    backgrounds: { default: "dark" },
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: "primary",
    size: "md",
    type: "filled",
    label: "Button",
    disabled: false,
  },
};

export const Secondary: Story = {
  args: {
    color: "secondary",
    size: "md",
    type: "filled",
    label: "Button",
    disabled: false,
  },
};

export const OutlinedPrimary: Story = {
  args: {
    color: "primary",
    size: "md",
    type: "outlined",
    label: "Button",
    disabled: false,
  },
};

export const OutlinedSecondary: Story = {
  args: {
    color: "secondary",
    size: "md",
    type: "outlined",
    label: "Button",
    disabled: false,
  },
};
