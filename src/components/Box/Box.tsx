import React from 'react';
import css from './box.module.css'


interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

export default function Box(props: BoxProps) {
  return <div {...props} className={css.box}>{props.children}</div>
}