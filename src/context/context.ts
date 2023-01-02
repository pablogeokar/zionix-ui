import { createContext } from "react";

export const INITIAL_STATE = {
  colors: {
    body: "#f1f2f6",
    black: "#333333",
    white: "#ffffff",
    primary: "#227093",
    secondary: "#2c2c54",
    accent: "#ff5252",
    lightGray: "#bbbbbb",
  },
  fontSizes: {
    xsmall: "1rem",
    small: "1.2rem",
    normal: "1.6rem",
    large: "2.1rem",
    xlarge: "3.2rem",
    xxlarge: "4rem",
  },
  layout: {
    gap: "1.6rem",
    padding: "1.6rem",
    borderRadius: ".8rem",
  },
};

export const ThemeContext = createContext(INITIAL_STATE);
