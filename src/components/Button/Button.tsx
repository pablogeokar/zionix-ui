

/*
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  accent?: boolean
  error?: boolean
  inverted?: boolean
  primary?: boolean
  secondary?: boolean
  success?: boolean
  warning?: boolean
  borderNone?: boolean
}

/*
const ButtonWrapper = ({
  accent = false,
  error = false,
  inverted = false,
  primary = false,
  secondary = false,
  warning = false,
  success = false,
  borderNone = false,
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
      borderNone && objCSS.push(css['button-border--none'])
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


export default function Button({ label }: ButtonProps) {
  return (
    <button type='button' className={styles['button']}>
      {label &&
        <span className={styles['text']}>{label}</span>
      }
      <Icon iconName='DownloadSimple' size={28} className={styles.icon} weight='light' />
    </button>
  )
}

export default ButtonWrapper;*/

import React, { InputHTMLAttributes } from "react";
import css from './Button.module.scss'
import { IconsType } from '../Icon/IconsType';
import Icon from '../Icon'
import { cssValidation } from '../../helpers';


export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  accent?: boolean
  accentInverted?: boolean
  borderNone?: boolean
  danger?: boolean
  dangerInverted?: boolean
  iconName?: IconsType[keyof IconsType]
  label?: string
  primary?: boolean
  primaryInverted?: boolean
  secondary?: boolean
  secondaryInverted?: boolean
  success?: boolean
  successInverted?: boolean
  warning?: boolean
  warningInverted?: boolean
}

export default function Button(props: ButtonProps) {

  const styles = cssValidation([
    { name: css['accent--inverted'], validation: props.accentInverted === true },
    { name: css['accent'], validation: props.accent === true },
    { name: css['border--none'], validation: props.borderNone === true },
    { name: css['button'], validation: true },
    { name: css['danger--inverted'], validation: props.dangerInverted === true },
    { name: css['danger'], validation: props.danger === true },
    { name: css['primary--inverted'], validation: props.primaryInverted === true },
    { name: css['primary'], validation: props.primary === true },
    { name: css['secondary--inverted'], validation: props.secondaryInverted === true },
    { name: css['secondary'], validation: props.secondary === true },
    { name: css['success--inverted'], validation: props.successInverted === true },
    { name: css['success'], validation: props.success === true },
    { name: css['warning--inverted'], validation: props.warningInverted === true },
    { name: css['warning'], validation: props.warning === true },
  ])

  return (
    <button type='button' className={styles} {...props}>
      {props.label &&
        <span className={css['text']}>{props.label}</span>
      }
      {props.iconName &&
        <Icon iconName={props.iconName} className={css['icon']} />
      }
    </button>
  )
}