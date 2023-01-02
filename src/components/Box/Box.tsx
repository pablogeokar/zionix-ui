import React, { useEffect } from 'react';
import css from './box.module.css'
import { useThemeContext } from '../../context';


interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

export function Container(props: BoxProps) {
  return <div {...props} className={css['box']}>{props.children}</div>
}

export function Row(props: BoxProps) {
  const theme = useThemeContext();

  /*
  useEffect(() => {
    console.log('Mudou o tamanho da tela')
  }, [theme.screen.height, theme.screen.height])
  */

  return <div {...props} className={`${css['row']} ${theme.screen.width <= 480 ? css['row--mobile'] : ''}`}>{props.children}</div>
}


