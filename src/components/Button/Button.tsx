import React, { InputHTMLAttributes } from "react";
import css from './Button.module.css'

//export interface OwnProps extends InputHTMLAttributes<HTMLButtonElement> {
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isAccent?: boolean
  isError?: boolean
  isInverted?: boolean
  //children?: React.ReactNode
  isPrimary?: boolean
  isSecondary?: boolean
  isSuccess?: boolean
  isWarning?: boolean
}

const ButtonWrapper = ({
  isAccent = false,
  isError = false,
  isInverted = false,
  isPrimary = false,
  isSecondary = false,
  isWarning = false,
  isSuccess = false,
  ...ButtonProps }: ButtonProps) => {
  function buttonClasses() {

    let objCSS = []

    if (isInverted) {
      objCSS.push(css['button'])

      isAccent && objCSS.push(css['button-accent--inverted'])
      isError && objCSS.push(css['button-error--inverted'])
      isPrimary && objCSS.push(css['button-primary--inverted'])
      isSecondary && objCSS.push(css['button-secondary--inverted'])
      isSuccess && objCSS.push(css['button-success--inverted'])
      isWarning && objCSS.push(css['button-warning--inverted'])
    } else {
      objCSS.push(css['button--shadow'])

      isAccent && objCSS.push(css['button-accent'])
      isError && objCSS.push(css['button-error'])
      isPrimary && objCSS.push(css['button-primary'])
      isSecondary && objCSS.push(css['button-secondary'])
      isSuccess && objCSS.push(css['button-success'])
      isWarning && objCSS.push(css['button-warning'])
    }
    let cssString = ''
    objCSS.map(prop => cssString += `${prop} `)
    return cssString;
  }
  return <button className={buttonClasses()} {...ButtonProps}>{ButtonProps.children}</button>
}

export default ButtonWrapper;