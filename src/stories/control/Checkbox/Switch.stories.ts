import type { Meta, StoryObj } from "@storybook/react";
import Switch from "./Switch";

const meta = {
  title: "control/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
    backgrounds: { default: "dark" },
  },
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      description: "無効化にする",
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    disabled: false,
  },
};
