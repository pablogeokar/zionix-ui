import { InputHTMLAttributes } from 'react';
import css from './input.module.css';

export interface OwnProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export default function Input(props: OwnProps) {
  return (
    <div className={css.container}>
      {props.label && <label>{props.label}</label>}
      <input type="text" {...props} className={`${css.input} ${props.className ? props.className : ''}`} />
    </div>
  )
}