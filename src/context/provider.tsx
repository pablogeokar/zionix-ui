import React, { useEffect, useState } from "react"
import { ThemeContext, INITIAL_STATE } from "./context"

interface IProps {
  children: React.ReactNode
}

export const ThemeContextProvider = ({ children }: IProps) => {


  interface Screen {
    width: number;
    height: number;
  }

  const [SCREEN, setSCREEN] = useState<Screen>({ width: 0, height: 0 });

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setSCREEN({ width, height });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <ThemeContext.Provider value={{ ...INITIAL_STATE, ...SCREEN }}>
      <style type="text/css">
        {`
          :root{
            --bg:           ${INITIAL_STATE.colors.body};
            --black:        ${INITIAL_STATE.colors.black};
            --white:        ${INITIAL_STATE.colors.white};
            --primary:      ${INITIAL_STATE.colors.primary};
            --secondary:    ${INITIAL_STATE.colors.secondary};
            --accent:       ${INITIAL_STATE.colors.accent};
            --lightGray:    ${INITIAL_STATE.colors.lightGray};

            --size-300: ${INITIAL_STATE.fontSizes.size300};
            --size-400: ${INITIAL_STATE.fontSizes.size400};
            --size-500: ${INITIAL_STATE.fontSizes.size500};
            --size-600: ${INITIAL_STATE.fontSizes.size600};
            --size-700: ${INITIAL_STATE.fontSizes.size700};
            --size-800: ${INITIAL_STATE.fontSizes.size800};
            --size-900: ${INITIAL_STATE.fontSizes.size900};

            --gap:          ${INITIAL_STATE.layout.gap};
            --padding:      ${INITIAL_STATE.layout.padding};
            --borderRadius: ${INITIAL_STATE.layout.borderRadius};
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
            background: ${INITIAL_STATE.colors.body};            
            color: ${INITIAL_STATE.colors.black};            
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
            font-size: ${INITIAL_STATE.fontSizes.size700};         
          }          

          h2 {
            font-size: ${INITIAL_STATE.fontSizes.size600};
            font-weight: 700;
          }

          h3 {
            font-size: ${INITIAL_STATE.fontSizes.size500};
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