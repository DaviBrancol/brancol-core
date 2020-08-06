import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

interface BrancolProviderProps {
  theme: {
    colors: any;
    fonts: Array<string>;
  };
  children: ReactNode;
}

function BrancolProvider({
  theme = {
    colors: null,
    fonts: null,
  },
  children = null,
}: BrancolProviderProps) {
  const defaultTheme = {
    colors: {
      primary: "#7d2d88",
      secondary: "#5977AC",
      info: "#245DD8",
      success: "#28c960",
      warning: "#f49716",
      danger: "#fc5050",
    },
    fonts: ["Poppins", "sans-serif"],
  };

  const mainTheme = {
    ...theme,
    colors: {
      ...defaultTheme.colors,
      ...theme.colors,
    },
    fonts: theme.fonts || defaultTheme.fonts,
  };
  return <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>;
}

export default BrancolProvider;
