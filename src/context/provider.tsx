import React, { useEffect, useState } from "react"
import { ThemeContext, DEFAULT_STATES as D } from "./context"

import { Screen } from "../types/screen"
import { Theme } from "./context"

interface IProps {
  children: React.ReactNode
  theme?: Theme
}

export const ThemeContextProvider = ({ children, theme }: IProps) => {

  // Subscreve as variáveis padrão de acordo com as novas definições
  // aqui informadas
  const USER = { ...theme } as Theme;

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

    <ThemeContext.Provider value={{ ...D, ...SCREEN }}>
      <style type="text/css">
        {`
          :root{
            --accent:       ${USER.colors?.accent || D.colors?.accent};
            --bg:           ${USER.colors?.body || D.colors?.body};
            --black:        ${USER.colors?.black || D.colors?.black};
            --danger:       ${USER.colors?.danger || D.colors?.danger};
            --lightGray:    ${USER.colors?.lightGray || D.colors?.lightGray};
            --primary:      ${USER.colors?.primary || D.colors?.primary};
            --secondary:    ${USER.colors?.secondary || D.colors?.secondary};
            --success:      ${USER.colors?.success || D.colors?.success};
            --warning:      ${USER.colors?.warning || D.colors?.warning};
            --white:        ${USER.colors?.white || D.colors?.white};

            /* Components vars*/
            --component-card--filter: ${USER.components?.card?.filter || D.components?.card?.filter};

            --size-text:    ${USER.sizes?.text || D.sizes?.text};
            --borderRadius: ${USER.layout?.borderRadius || D.layout?.borderRadius};
            --gap:          ${USER.layout?.gap || D.layout?.gap};
            --padding:      ${USER.layout?.padding || D.layout?.padding};
          }

          html {
            font-size: 62.5%;            
          }

          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }

          body { 
            font-weight: normal;           
            text-rendering: optimizeSpeed;
            line-height: 1.5;
            font-size: ${USER.sizes?.text || D.sizes?.text};
            font-weight: 400;
            background: ${USER.colors?.body || D.colors?.body};            
            color: ${USER.colors?.black || D.colors?.black};            
          }

          h1,h2,h3,h4,h5,h6 {            
            margin: 1.6rem 0;
          }

          h1 {
            font-size: ${USER.sizes?.h1 || D.sizes?.h1};
            font-weight: 400;
          }

          h2 {
            font-size: ${USER.sizes?.h2 || D.sizes?.h2}; 
            font-weight: 400;           
          }

          h3 {
            font-size: ${USER.sizes?.h3 || D.sizes?.h3}; 
            font-weight: 400;           
          }

          h4 {
            font-size: ${USER.sizes?.h4 || D.sizes?.h4};
            font-weight: 400;            
          }
          
          h5 {
            font-size: ${USER.sizes?.h5 || D.sizes?.h5};
            font-weight: 400;            
          }
          
          h6 {
            font-size: ${USER.sizes?.h6 || D.sizes?.h6};
            font-weight: 400;            
          }

          a{
            color: inherit;
            text-decoration: none;
          }          

          body,p,figure,blockquote,dl,dd {  margin: 0;  }

          ol, ul {
            padding: 0;
            margin: 0;
            list-style: none;
          }

          html:focus-within {
            scroll-behavior: smooth;
          }         

          img,
          picture {
            max-width: 100%;
            height: auto;
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
      `}
      </style>
      {children}
    </ThemeContext.Provider>
  )
}