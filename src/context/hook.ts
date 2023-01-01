import { useContext } from "react";
import { ThemeContext } from "./context";

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  return context;
};
