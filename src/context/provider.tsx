import React from "react"
import { ThemeContext, INITIAL_STATE } from "./context"

interface IProps {
  children: React.ReactNode
}

export const ThemeContextProvider = ({ children }: IProps) => {

  return (
    <ThemeContext.Provider value={INITIAL_STATE}>
      <style type="text/css">
        {`
          :root{
            --body-bg : ${INITIAL_STATE.colors.body};
            --text-black: ${INITIAL_STATE.colors.black};
          }
          html {
            box-sizing: border-box;
            font-size: 62.5%;
          }
          *, *:before, *:after {
            box-sizing: inherit;
          }
          body{
            background: ${INITIAL_STATE.colors.body};
            background: var(--body-bg, ${INITIAL_STATE.colors.body});
            color: ${INITIAL_STATE.colors.black};
            background: var(--text-black, ${INITIAL_STATE.colors.black});
            margin: 0;
            padding: 0;
            font-size: 1.6rem;
          }
          h1, h2, h3, h4, h5, h6, p, ol, ul {            
            font-weight: normal;
          }
          ol, ul {
            padding: 0;
            margin: 0;
            list-style: none;
          }
          img {
            max-width: 100%;
            height: auto;
          }
          button{
            cursor: pointer;
          }
          a{
            color: inherit;
            text-decoration: none;
          }
      `}
      </style>
      {children}
    </ThemeContext.Provider>
  )
}