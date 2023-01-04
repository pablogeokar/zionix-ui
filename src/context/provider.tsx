import React, { useEffect, useState } from "react"
import { ThemeContext, DEFAULT_STATES } from "./context"

import { Screen } from "../types/screen"
import { Theme } from "./context"

interface IProps {
  children: React.ReactNode
  theme?: Theme
}

export const ThemeContextProvider = ({ children, theme }: IProps) => {

  // Subscreve as variáveis padrão de acordo com as novas definições
  // aqui informadas
  const USER_THEME = { ...theme } as Theme;

  const [SCREEN, setSCREEN] = useState<Screen>({ screen: { width: 0, height: 0 } });

  //const [THEME, setTHEME] = useState<Theme>({} as Theme);

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setSCREEN({ screen: { width, height } });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <ThemeContext.Provider value={{ ...DEFAULT_STATES, ...SCREEN }}>
      <style type="text/css">
        {`
          :root{
            --accent:       ${USER_THEME.colors?.accent || DEFAULT_STATES.colors?.accent};
            --bg:           ${USER_THEME.colors?.body || DEFAULT_STATES.colors?.body};
            --black:        ${USER_THEME.colors?.black || DEFAULT_STATES.colors?.black};
            --error:        ${USER_THEME.colors?.error || DEFAULT_STATES.colors?.error};
            --lightGray:    ${USER_THEME.colors?.lightGray || DEFAULT_STATES.colors?.lightGray};
            --primary:      ${USER_THEME.colors?.primary || DEFAULT_STATES.colors?.primary};
            --secondary:    ${USER_THEME.colors?.secondary || DEFAULT_STATES.colors?.secondary};
            --success:      ${USER_THEME.colors?.success || DEFAULT_STATES.colors?.success};
            --warning:      ${USER_THEME.colors?.warning || DEFAULT_STATES.colors?.warning};
            --white:        ${USER_THEME.colors?.white || DEFAULT_STATES.colors?.white};

            --size-300: ${USER_THEME.fontSizes?.size300 || DEFAULT_STATES.fontSizes?.size300};
            --size-400: ${USER_THEME.fontSizes?.size400 || DEFAULT_STATES.fontSizes?.size400};
            --size-500: ${USER_THEME.fontSizes?.size500 || DEFAULT_STATES.fontSizes?.size500};
            --size-600: ${USER_THEME.fontSizes?.size600 || DEFAULT_STATES.fontSizes?.size600};
            --size-700: ${USER_THEME.fontSizes?.size700 || DEFAULT_STATES.fontSizes?.size700};
            --size-800: ${USER_THEME.fontSizes?.size800 || DEFAULT_STATES.fontSizes?.size800};
            --size-900: ${USER_THEME.fontSizes?.size900 || DEFAULT_STATES.fontSizes?.size900};

            --borderRadius: ${USER_THEME.layout?.borderRadius || DEFAULT_STATES.layout?.borderRadius};
            --gap:          ${USER_THEME.layout?.gap || DEFAULT_STATES.layout?.gap};
            --padding:      ${USER_THEME.layout?.padding || DEFAULT_STATES.layout?.padding};
          }

          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }

          body,p,figure,blockquote,dl,dd {  margin: 0; }

          ol, ul {
            padding: 0;
            margin: 0;
            list-style: none;
          }

          html:focus-within {
            scroll-behavior: smooth;
          }

          body {
            min-height: 100vh;
            text-rendering: optimizeSpeed;
            line-height: 1.5;
            background: ${USER_THEME.colors?.body || DEFAULT_STATES.colors?.body};
            color: ${USER_THEME.colors?.black || DEFAULT_STATES.colors?.black};
          }

          img,
          picture {
            max-width: 100%;
            display: block;
          }

          input, button, textarea, select {
            font: inherit;
          }

          @media (prefers-reduced-motion: reduce) {
            html:focus-within {
              scroll-behavior: auto;
          }  
          
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
          
          button{
            cursor: pointer;
          }

          main:focus {
            outline: none;
          }

          a{
            color: inherit;
            text-decoration: none;
          }          

          h2, h3, h4 { line-height: 1.3; }

          h1 { font-weight: 800; }

          h1 {
            font-size: ${USER_THEME.fontSizes?.size700 || DEFAULT_STATES.fontSizes?.size700};         
          }          

          h2 {
            font-size: ${USER_THEME.fontSizes?.size600 || DEFAULT_STATES.fontSizes?.size600};
            font-weight: 700;
          }

          h3 {
            font-size: ${USER_THEME.fontSizes?.size500 || DEFAULT_STATES.fontSizes?.size500};
            font-weight: 500;
          }
          h4, h5, h6{
            font-weight: 400;
          }         
      `}
      </style>
      {children}
    </ThemeContext.Provider>
  )
}