import { cssValidation } from '../../helpers';
import { FormHTMLAttributes } from 'react';
import css from './Form.module.css'

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  shadow?: boolean
  maxWidth?: string
}

interface RowProps {
  children?: React.ReactNode
  end?: boolean
}

interface ColumnProps {
  children?: React.ReactNode
}

export function Container(props: FormProps) {

  const styles = cssValidation([
    { name: css['form'], validation: true },
    { name: css['form--shadow'], validation: props.shadow === true }
  ])

  return (
    <form className={styles} style={{ maxWidth: props.maxWidth ? props.maxWidth : '100%' }}>
      {props.children}
    </form>
  )
}

export function Row(props: RowProps) {
  return <div className={`${css['row']} ${props.end && css['row--end']}`} >{props.children}</div>
}

export function Column(props: ColumnProps) {
  return <div className={css['column']} >{props.children}</div>
}
