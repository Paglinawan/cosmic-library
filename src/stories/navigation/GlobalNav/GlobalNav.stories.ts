import type { Meta, StoryObj } from "@storybook/react";
import GlobalNav from "./GlobalNav";

const meta = {
  title: "navigation/GlobalNav",
  component: GlobalNav,
  parameters: {
    layout: "centered",
    backgrounds: { default: "dark" },
  },
  argTypes: {
    screen: {
      control: "select",
      options: ["desktop", "mobile"],
    },
  },
} satisfies Meta<typeof GlobalNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { screen: "desktop" },
};
