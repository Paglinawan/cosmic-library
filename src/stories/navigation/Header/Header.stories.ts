import type { Meta, StoryObj } from "@storybook/react";
import Header from "./Header";

const meta = {
  title: "navigation/Header",
  component: Header,
  parameters: {
    layout: "centered",
    backgrounds: { default: "dark" },
  },
  argTypes: {},
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
