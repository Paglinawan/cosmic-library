import type { Meta, StoryObj } from "@storybook/react";
import FilmCard from "./FilmCard";
import { film_tags as filmTags } from "./data";

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
    country: { control: "text" },
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
    title: "ライフ・イズ・ビューティフル",
    review: 3,
    year: 1994,
    country: "アメリカ合衆国",
    comment:
      "「ライフ・イズ・ビューティフル」は、ユーモアと悲しみを巧みに融合させた感動的な映画です。戦争の恐怖の中での父親の愛と犠牲の物語は、心に響き、感動を与えます。特にロベルト・ベニーニの演技は素晴らしいです。この映画は人間の精神の強さを思い出させ、長く心に残ります。",
    director: "ロベルト・ベニーニ",
    cast: "ロベルト・ベニーニ、ニコレッタ・ブラスキ、ジョルジョ・カンタリーニ",
    isClassic: true,
    isFavorite: true,
    tags: [],
  },
};
