"use client";

import type { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "@/app/styles/globals";
import { theme } from "@/app/styles/theme";

interface StyledProviderProps {
  children: ReactNode;
}

export const StyledProvider = ({ children }: StyledProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
