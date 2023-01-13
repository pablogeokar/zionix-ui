import React from 'react';
import { cssValidation } from '../../helpers';
import Hr from '../Hr';
import css from './text.module.scss'

export interface TextProps {
  accent?: boolean
  children?: React.ReactNode;
  className?: {}
  color?: string
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  onClick?: () => void
  primary?: boolean
  secondary?: boolean
  separator?: boolean
  style?: {}
}

export default function Text({
  accent,
  children,
  className,
  color,
  fontWeight,
  level,
  onClick,
  primary,
  secondary,
  separator,
  style
}: TextProps) {

  const classList = cssValidation([
    { name: css.text, validation: true },
    { name: css['text--primary'], validation: primary === true },
    { name: css['text--seconday'], validation: secondary === true },
    { name: css['text--accent'], validation: accent === true },    
    { name: className, validation: className !== undefined }
  ])


  const styles = {
    span: {
      color: color, fontWeight: fontWeight ? fontWeight : 400
    },
    h1: {
      color: color, fontWeight: fontWeight ? fontWeight : 400
    },
    h2: {
      color: color, fontWeight: fontWeight ? fontWeight : 400
    },
    h3: {
      color: color, fontWeight: fontWeight ? fontWeight : 400
    },
    h4: {
      color: color, fontWeight: fontWeight ? fontWeight : 400
    },
    h5: {
      color: color, fontWeight: fontWeight ? fontWeight : 400
    },
    h6: {
      color: color, fontWeight: fontWeight ? fontWeight : 400
    }
  };
  return (
    <>
      {!level && <span className={classList} onClick={onClick} style={{ ...styles.span, ...style }}>{children}</span>}
      {level === 1 && <h1 className={classList} onClick={onClick} style={{ ...styles.h1, ...style }}>{children}</h1>}
      {level === 2 && <h2 className={classList} onClick={onClick} style={{ ...styles.h2, ...style }}>{children}</h2>}
      {level === 3 && <h3 className={classList} onClick={onClick} style={{ ...styles.h3, ...style }}>{children}</h3>}
      {level === 4 && <h4 className={classList} onClick={onClick} style={{ ...styles.h4, ...style }}>{children}</h4>}
      {level === 5 && <h5 className={classList} onClick={onClick} style={{ ...styles.h5, ...style }}>{children}</h5>}
      {level === 6 && <h6 className={classList} onClick={onClick} style={{ ...styles.h6, ...style }}>{children}</h6>}
      {separator && <Hr minimal/>}
    </>
  )
}