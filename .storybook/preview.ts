import type { Preview } from "@storybook/react";
import "../src/app/assets/css/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "default-background",
      values: [
        { name: "default-background", value: "#ffffff" },
        { name: "dark", value: "#0B0F2B" },
        { name: "light", value: "#ffffff" },
      ],
    },
  },
};

export default preview;
