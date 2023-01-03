import React, { useEffect, useState } from "react"
import { ThemeContext } from "./context"

import { Screen } from "../types/screen"
import { Theme } from "./context"

interface IProps {
  children: React.ReactNode
}

export const ThemeContextProvider = ({ children }: IProps) => {

  const DEFAULT_STATES: Theme = {
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

  const [SCREEN, setSCREEN] = useState<Screen>({ screen: { width: 0, height: 0 } });

  const [THEME, setTHEME] = useState<Theme>({} as Theme);

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
    <ThemeContext.Provider value={{ ...DEFAULT_STATES, ...SCREEN, theme: THEME }}>
      <style type="text/css">
        {`
          :root{
            --bg:           ${DEFAULT_STATES.colors.body};
            --black:        ${DEFAULT_STATES.colors.black};
            --white:        ${DEFAULT_STATES.colors.white};
            --primary:      ${DEFAULT_STATES.colors.primary};
            --secondary:    ${DEFAULT_STATES.colors.secondary};
            --accent:       ${DEFAULT_STATES.colors.accent};
            --lightGray:    ${DEFAULT_STATES.colors.lightGray};

            --size-300: ${DEFAULT_STATES.fontSizes.size300};
            --size-400: ${DEFAULT_STATES.fontSizes.size400};
            --size-500: ${DEFAULT_STATES.fontSizes.size500};
            --size-600: ${DEFAULT_STATES.fontSizes.size600};
            --size-700: ${DEFAULT_STATES.fontSizes.size700};
            --size-800: ${DEFAULT_STATES.fontSizes.size800};
            --size-900: ${DEFAULT_STATES.fontSizes.size900};

            --gap:          ${DEFAULT_STATES.layout.gap};
            --padding:      ${DEFAULT_STATES.layout.padding};
            --borderRadius: ${DEFAULT_STATES.layout.borderRadius};
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
            background: ${DEFAULT_STATES.colors.body};            
            color: ${DEFAULT_STATES.colors.black};            
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
            font-size: ${DEFAULT_STATES.fontSizes.size700};         
          }          

          h2 {
            font-size: ${DEFAULT_STATES.fontSizes.size600};
            font-weight: 700;
          }

          h3 {
            font-size: ${DEFAULT_STATES.fontSizes.size500};
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