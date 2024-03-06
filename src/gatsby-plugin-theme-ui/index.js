// Inside src/gatsby-plugin-theme-ui/index.js
import { merge } from "theme-ui";
import originalTheme from "@lekoarts/gatsby-theme-jodie/src/gatsby-plugin-theme-ui/index";

const theme = merge(originalTheme, {
  fonts: {
    body: `"Rubik", "Recursive", monospace`,
  },
});

export default theme;