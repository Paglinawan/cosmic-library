import type { Meta, StoryObj } from "@storybook/react";
import Display from "./Display";

const meta = {
  title: "icons/Display",
  component: Display,
  parameters: {
    layout: "centered",
    backgrounds: { default: "dark" },
  },
  argTypes: {
    classSize: { control: "text" },
    classColor: {
      control: "select",
      options: ["", "text-body", "text-subtle"],
    },
    styleColor: { control: "color" },
  },
} satisfies Meta<typeof Display>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    classSize: "w-16 h-16",
    classColor: "",
    styleColor: "white",
  },
};
