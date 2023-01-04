import { createContext } from "react";
import { Screen } from "../types/screen";

export interface Theme {
  colors?: {
    accent?: string;
    black?: string;
    body?: string;
    error?: string;
    lightGray?: string;
    primary?: string;
    secondary?: string;
    success?: string;
    warning?: string;
    white?: string;
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
    borderRadius?: string;
    gap?: string;
    padding?: string;
  };
}

// Carrega todas as constantes padrão que são utilizadas no desenvolvimento dos componentes
export const DEFAULT_STATES: Theme = {
  colors: {
    accent: "#f72585",
    black: "#333333",
    body: "#f5f5f5",
    error: "#D32F2F",
    lightGray: "#bbbbbb",
    primary: "#0288D1",
    secondary: "#616161",
    success: "#689F38",
    warning: "#FBC02D",
    white: "#ffffff",
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
    borderRadius: ".5rem",
    gap: "1rem",
    padding: "1rem",
  },
};

// Armazena em tempo de execução o screen Width e Height,
// o estado inicial começa com um objeto vazio por padrão.
const SCREEN = {} as Screen;

export const ThemeContext = createContext({
  ...DEFAULT_STATES,
  ...SCREEN,
});
