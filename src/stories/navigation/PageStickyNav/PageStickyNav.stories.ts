import type { Meta, StoryObj } from "@storybook/react";
import PageStickyNav from "./PageStickyNav";
import { film_tags as filmTags } from "./data";

const meta = {
  title: "navigation/PageStickyNav",
  component: PageStickyNav,
  parameters: {
    layout: "centered",
    backgrounds: { default: "dark" },
  },
  argTypes: {},
} satisfies Meta<typeof PageStickyNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    filmTags: filmTags.map((tag) => ({
      id: tag.id,
      label: tag.label,
      isActive: false,
    })),
  },
};
