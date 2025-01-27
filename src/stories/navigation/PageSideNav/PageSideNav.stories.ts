import type { Meta, StoryObj } from "@storybook/react";
import PageSideNav from "./PageSideNav";
import { film_tags as filmTags } from "./data";

const meta = {
  title: "navigation/PageSideNav",
  component: PageSideNav,
  parameters: {
    layout: "centered",
    backgrounds: { default: "dark" },
  },
  tags: ["autodocs"],
  argTypes: {
    filmTags: {
      control: {
        type: "object",
      },
    },
    maxDisplayCount: {
      control: {
        type: "number",
      },
    },
  },
} satisfies Meta<typeof PageSideNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    filmTags: filmTags.map((tag) => ({
      id: tag.id,
      label: tag.label,
      isActive: false,
      isDisplay: false,
    })),
    maxDisplayCount: 9,
  },
};
