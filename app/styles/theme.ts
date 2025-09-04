import { breakpoints } from "./breakpoints";

export const theme = {
  colors: {
    background: "#f3f7ff",
    foreground: "#000000",
    "muted-foreground": "#737380",
    "header-background": "#ffffff",
    "header-logo-foreground": "#5D5D6D",
    // It's the same as background-color and muted-foreground, but I choose to keep it for future reference
    "header-search-background": "#F3F7FF",
    "header-search-foreground": "#737380",
    "bag-button-span-background": "#DE3838",
    "bag-button-span-foreground": "#ffffff",
    "focus-visible-outline": "#3b82f6",
  },
  breakpoints,
} as const;

export type CustomTheme = typeof theme;
