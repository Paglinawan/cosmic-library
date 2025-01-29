import type { Meta, StoryObj } from "@storybook/react";
import FilmCard from "./FilmCard";
import { film_tags as filmTags, countries } from "./data";

const meta = {
  title: "display/FilmCard",
  component: FilmCard,
  parameters: {
    layout: "centered",
    backgrounds: { default: "dark" },
  },
  argTypes: {
    title: { control: "text" },
    review: { control: "number" },
    year: { control: "number" },
    country: {
      control: "select",
      options: countries.map((tag) => tag.label),
    },
    comment: { control: "text" },
    director: { control: "text" },
    cast: { control: "text" },
    tags: {
      control: "check",
      options: filmTags.map((tag) => tag.label),
    },
    isClassic: { control: "boolean" },
    isFavorite: { control: "boolean" },
  },
} satisfies Meta<typeof FilmCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "オリバー!",
    review: 3,
    year: 1968,
    country: "イギリス",
    comment:
      "華やかなダンスと名曲が溢れる名作ミュージカル。孤児オリバーの波乱に満ちた旅が、心を打つ感動のストーリーとともに描かれる。",
    director: "キャロル・リード",
    cast: "マーク・レスター、ジャック・ワイルド、シャニ・ウォリス",
    isClassic: true,
    isFavorite: true,
    tags: [],
  },
};
