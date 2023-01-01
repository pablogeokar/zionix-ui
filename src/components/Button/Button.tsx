import React, { InputHTMLAttributes } from "react";
import styles from './Button.module.css'

export interface OwnProps extends InputHTMLAttributes<HTMLButtonElement> {
  label?: string
}

const ButtonWrapper = (props: OwnProps) => {
  return (
    <div>
      <button className={styles.button}>{props.label}</button>
    </div>
  )
}

export default ButtonWrapper;