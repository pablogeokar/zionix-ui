import React from "react";
import css from './Button.module.scss'
import { IconsType } from '../Icon/IconsType';
import Icon from '../Icon'
import { cssValidation } from '../../helpers';


export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  accent?: boolean
  accentInverted?: boolean
  bordernone?: boolean
  danger?: boolean
  dangerInverted?: boolean
  icon?: IconsType[keyof IconsType]
  isLoading?: boolean
  label?: string
  primary?: boolean
  primaryInverted?: boolean
  secondary?: boolean
  secondaryInverted?: boolean
  shadow?: boolean
  success?: boolean
  successInverted?: boolean
  warning?: boolean
  warningInverted?: boolean
}

export default function Button(props: ButtonProps) {

  const styles = cssValidation([
    { name: css['accent--inverted'], validation: props.accentInverted === true },
    { name: css['accent'], validation: props.accent === true },
    { name: css['border--none'], validation: props.bordernone === true },
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
    { name: css['shadow'], validation: props.shadow === true },
  ])

  return (
    <button type={props.type || 'button'} disabled={props.isLoading} className={styles} onClick={props.onClick} >
      {props.label &&
        <span className={css['text']}>{props.label}</span>
      }
      {
        props.isLoading &&
        <div className={css['loading']}>
          <div className={css['spin']} />
        </div>
      }
      {props.icon &&
        <Icon iconName={props.icon} className={css['icon']} />
      }
    </button>
  )
}