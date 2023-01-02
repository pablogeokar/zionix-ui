import { createContext, useEffect, useState } from "react";

interface Screen {
  width: number;
  height: number;
}

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
    size300: "0.75rem",
    size400: "1rem",
    size500: "1.33rem",
    size600: "1.77rem",
    size700: "2.36rem",
    size800: "3.15rem",
    size900: "4.2rem",
  },
  layout: {
    gap: "1rem",
    padding: "1rem",
    borderRadius: ".5rem",
  },
};

const SCREEN = {} as Screen;

export const ThemeContext = createContext({ ...INITIAL_STATE, ...SCREEN });
