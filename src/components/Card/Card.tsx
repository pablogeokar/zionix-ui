import React from 'react';
import css from './Card.module.css'

/*interface CardProps extends React.HTMLAttributes<HTMLDivElement> {*/
interface CardProps {
  children?: React.ReactNode
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

export function Container(props: CardProps) {
  //return <div className={`${css['card']} ${props.shadow === true && css['card--shadow']}`} {...props}>{props.children}</div>
  return <div className={`${css['card']} ${props.shadow === true && css['card--shadow']}`} style={{ maxWidth: props.maxWidth ? props.maxWidth : '100%' }} >{props.children}</div>
}

export function Row(props: RowProps) {
  return <div className={`${css['row']} ${props.end && css['row--end']}`} >{props.children}</div>
}

export function Column(props: ColumnProps) {
  //return <div className={css['column']} {...props}>{props.children}</div>
  return <div className={css['column']} >{props.children}</div>
}


