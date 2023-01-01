import { createContext } from "react";

export const INITIAL_STATE = {
  colors: {
    body: "#f7f1e3",
    black: "#333333",
  },
};

export const ThemeContext = createContext(INITIAL_STATE);
