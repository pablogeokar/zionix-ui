import React, { InputHTMLAttributes } from "react";
import css from './Button.module.scss'

//export interface OwnProps extends InputHTMLAttributes<HTMLButtonElement> {
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  accent?: boolean
  error?: boolean
  inverted?: boolean
  primary?: boolean
  secondary?: boolean
  success?: boolean
  warning?: boolean
  BorderNone?: boolean
}

const ButtonWrapper = ({
  accent = false,
  error = false,
  inverted = false,
  primary = false,
  secondary = false,
  warning = false,
  success = false,
  BorderNone = false,
  ...ButtonProps }: ButtonProps) => {

  function buttonClasses() {
    let objCSS = []

    if (inverted) {
      objCSS.push(css['button'])

      accent && objCSS.push(css['button-accent--inverted'])
      error && objCSS.push(css['button-error--inverted'])
      primary && objCSS.push(css['button-primary--inverted'])
      secondary && objCSS.push(css['button-secondary--inverted'])
      success && objCSS.push(css['button-success--inverted'])
      warning && objCSS.push(css['button-warning--inverted'])
      BorderNone && objCSS.push(css['button-border--none'])
    } else {
      objCSS.push(css['button--shadow'])

      accent && objCSS.push(css['button-accent'])
      error && objCSS.push(css['button-error'])
      primary && objCSS.push(css['button-primary'])
      secondary && objCSS.push(css['button-secondary'])
      success && objCSS.push(css['button-success'])
      warning && objCSS.push(css['button-warning'])
    }
    let cssString = ''
    objCSS.map(prop => cssString += `${prop} `)
    return cssString.substring(0, cssString.length - 1);
  }
  return <button className={buttonClasses()} {...ButtonProps}>{ButtonProps.children}</button>
}

export default ButtonWrapper;