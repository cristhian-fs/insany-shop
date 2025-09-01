import { breakpoints } from "./breakpoints";

export const theme = {
  colors: {
    background: "#f3f7ff",
    foreground: "#000000",
    "muted-foreground": "#737380",
  },
  breakpoints,
} as const;

export type CustomTheme = typeof theme;
