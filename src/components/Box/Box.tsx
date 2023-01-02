import React from 'react';
import css from './box.module.css'
import './box.module.css'


interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

export function Container(props: BoxProps) {
  return <div {...props} className={css['box']}>{props.children}</div>
}

export function Row(props: BoxProps) {
  return <div {...props} className={css['row']}>{props.children}</div>
}


