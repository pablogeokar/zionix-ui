import { createContext } from "react";
import { Screen } from "../types/screen";

export interface Theme {
  colors?: {
    accent?: string;
    black?: string;
    body?: string;
    danger?: string;
    gray?:string;
    lightGray?: string;
    primary?: string;
    secondary?: string;
    success?: string;
    warning?: string;
    white?: string;
  };
  components?: {
    card?: {
      filter?: string;
    };
  };
  layout?: {
    borderRadius?: string;
    gap?: string;
    padding?: string;
  };
  sizes?: {
    h1?: string;
    h2?: string;
    h3?: string;
    h4?: string;
    h5?: string;
    h6?: string;
    text?: string;
  };
}

// Carrega todas as constantes padrão que são utilizadas no desenvolvimento dos componentes
export const DEFAULT_STATES: Theme = {
  colors: {
    accent: "#f72585",
    black: "#333333",
    body: "#f5f5f5",
    danger: "#D32F2F",
    gray: '#95a5a6',
    lightGray: "#c4c4c4",
    primary: "#0288D1",
    secondary: "#616161",
    success: "#689F38",
    warning: "#FBC02D",
    white: "#ffffff",
  },
  components: {
    card: {
      filter: "drop-shadow(0 5px 4px var(--lightGray))",
    },
  },
  layout: {
    borderRadius: "0.8rem",
    gap: "1.6rem",
    padding: "1.6rem",
  },
  sizes: {
    text: "clamp(1.6rem, 1.250vw, 1.6rem)",
    h1: "clamp(3.6rem, 2.6vw, 4.2rem)",
    h2: "clamp(2.882rem, 2.08vw, 3.4rem)",
    h3: "clamp(2.1rem, 1.6vw, 2.7rem)",
    h4: "clamp(1.6rem, 1.3vw, 2rem)",
    h5: "clamp(1.3rem, 1vw, 1.5rem)",
    h6: "clamp(1rem, 0.7vw, 1.1rem)",
  },
};

// Armazena em tempo de execução o screen Width e Height,
// o estado inicial começa com um objeto vazio por padrão.
const SCREEN = {} as Screen;

export const ThemeContext = createContext({
  ...DEFAULT_STATES,
  ...SCREEN,
});
