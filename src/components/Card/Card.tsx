import React from 'react';
import css from './Card.module.css'
//import { useThemeContext } from '../../context';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  shadow?: boolean
}

export function Container(props: CardProps) {
  return <div className={`${css['card']} ${props.shadow === true && css['card--shadow']}`} {...props}>{props.children}</div>
}

export function Row(props: CardProps) {
  //const theme = useThemeContext();

  //return <div {...props} className={`${css['row']} ${theme.screen.width <= 500 ? css['row--mobile'] : ''}`}>{theme.screen.width}{props.children}</div>
  return <div className={`${css['row']}`} {...props}>{props.children}</div>
}

export function Column(props: CardProps) {
  return <div className={css['column']} {...props}>{props.children}</div>
}


