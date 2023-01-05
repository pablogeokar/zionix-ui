import { ThemeContext, Theme as ThemeType } from "./context";
import { ThemeContextProvider } from "./provider";
import { useThemeContext } from "./hook";

// Exibe a versão da biblioteca no console do navegador
const pkg = require("../../package.json");
const styles = [
  "color: white",
  "background: black",
  "padding: 5px",
  "border-radius: 4px",
].join(";");
const message = "ZIONIX ui";
console.log("%c%s", styles, message, pkg.version);

export { ThemeContext, ThemeContextProvider, useThemeContext, ThemeType };
