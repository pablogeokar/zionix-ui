import { createContext } from "react";
import { Screen } from "../types/screen";

export interface Theme {
  colors: {
    body?: string;
    black?: string;
    white?: string;
    primary?: string;
    secondary?: string;
    accent?: string;
    lightGray?: string;
  };
  fontSizes: {
    size300?: string;
    size400?: string;
    size500?: string;
    size600?: string;
    size700?: string;
    size800?: string;
    size900?: string;
  };
  layout: {
    gap?: string;
    padding?: string;
    borderRadius?: string;
  };
}

// Carrega todas as constantes padrão que são utilizadas no desenvolvimento dos componentes
const DEFAULT_STATES = {} as Theme;

// Armazena em tempo de execução o screen Width e Height,
// o estado inicial começa com um objeto vazio por padrão.
const SCREEN = {} as Screen;

// Subscreve as variáveis padrão de acordo com as novas definições
// aqui informadas
const USER_THEME = {} as Theme;

export const ThemeContext = createContext({
  ...DEFAULT_STATES,
  ...SCREEN,
  theme: USER_THEME,
});
