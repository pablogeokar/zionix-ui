import { createContext } from "react";

export const INITIAL_STATE = {
  colors: {
    body: "#f1f2f6",
    black: "#333333",
    primary: "#34ace0",
  },
  fontSizes: {
    xsmall: "1rem",
    small: "1.2rem",
    normal: "1.6rem",
    large: "2.1rem",
    xlarge: "3.2rem",
    xxlarge: "4rem",
  },
};

export const ThemeContext = createContext(INITIAL_STATE);
