import { createContext } from "react";
import { Screen } from "../types/screen";

export interface Theme {
  colors?: {
    body?: string;
    black?: string;
    white?: string;
    primary?: string;
    secondary?: string;
    accent?: string;
    lightGray?: string;
  };
  fontSizes?: {
    size300?: string;
    size400?: string;
    size500?: string;
    size600?: string;
    size700?: string;
    size800?: string;
    size900?: string;
  };
  layout?: {
    gap?: string;
    padding?: string;
    borderRadius?: string;
  };
}

// Carrega todas as constantes padrão que são utilizadas no desenvolvimento dos componentes
export const DEFAULT_STATES: Theme = {
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

// Armazena em tempo de execução o screen Width e Height,
// o estado inicial começa com um objeto vazio por padrão.
const SCREEN = {} as Screen;

export const ThemeContext = createContext({
  ...DEFAULT_STATES,
  ...SCREEN,
});
