import React, { InputHTMLAttributes } from "react";
import css from './Button.module.css'

//export interface OwnProps extends InputHTMLAttributes<HTMLButtonElement> {
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  btnAccent?: boolean
  btnError?: boolean
  btnInverted?: boolean
  //children?: React.ReactNode
  btnPrimary?: boolean
  btnSecondary?: boolean
  btnSuccess?: boolean
  btnWarning?: boolean
  btnBorderNone?: boolean
}

const ButtonWrapper = ({
  btnAccent = false,
  btnError = false,
  btnInverted = false,
  btnPrimary = false,
  btnSecondary = false,
  btnWarning = false,
  btnSuccess = false,
  btnBorderNone = false,
  ...ButtonProps }: ButtonProps) => {
  function buttonClasses() {

    let objCSS = []

    if (btnInverted) {
      objCSS.push(css['button'])

      btnAccent && objCSS.push(css['button-accent--inverted'])
      btnError && objCSS.push(css['button-error--inverted'])
      btnPrimary && objCSS.push(css['button-primary--inverted'])
      btnSecondary && objCSS.push(css['button-secondary--inverted'])
      btnSuccess && objCSS.push(css['button-success--inverted'])
      btnWarning && objCSS.push(css['button-warning--inverted'])
      btnBorderNone && objCSS.push(css['button-border--none'])
    } else {
      objCSS.push(css['button--shadow'])

      btnAccent && objCSS.push(css['button-accent'])
      btnError && objCSS.push(css['button-error'])
      btnPrimary && objCSS.push(css['button-primary'])
      btnSecondary && objCSS.push(css['button-secondary'])
      btnSuccess && objCSS.push(css['button-success'])
      btnWarning && objCSS.push(css['button-warning'])
    }
    let cssString = ''
    objCSS.map(prop => cssString += `${prop} `)
    return cssString;
  }
  return <button className={buttonClasses()} {...ButtonProps}>{ButtonProps.children}</button>
}

export default ButtonWrapper;