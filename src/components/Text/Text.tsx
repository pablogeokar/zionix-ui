import React from 'react';
import css from './text.module.css'
import { cssValidation } from '../../helpers'
import { cssValidationProps } from '../../helpers/cssValidation';


export interface TextProps {
  children?: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
  color?: string
  primary?: boolean
  secondary?: boolean
  accent?: boolean
  onClick?: () => void
  style?: {}
  className?: {}
}

export default function Text({
  children,
  level,
  fontWeight,
  style,
  className,
  primary,
  secondary,
  accent,
  color,
  onClick
}: TextProps) {

  const cssClasses = [
    { name: css.text, validation: true },
    { name: css['text--primary'], validation: primary === true },
    { name: css['text--seconday'], validation: secondary === true },
    { name: css['text--accent'], validation: accent === true },
  ]

  cssValidation(cssClasses)




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
      {!level && <span className={`${css.text} ${primary ? css['text--primary'] : ''} ${secondary ? css['text--seconday'] : ''} ${accent ? css['text--accent'] : ''} ${className ? className : ''}`} onClick={onClick} style={{ ...styles.span, ...style }}>{children}</span>}
      {level === 1 && <h1 className={`${css.text} ${primary ? css['text--primary'] : ''} ${secondary ? css['text--seconday'] : ''} ${accent ? css['text--accent'] : ''} ${className ? className : ''}`} onClick={onClick} style={{ ...styles.h1, ...style }}>{children}</h1>}
      {level === 2 && <h2 className={`${css.text} ${primary ? css['text--primary'] : ''} ${secondary ? css['text--seconday'] : ''} ${accent ? css['text--accent'] : ''} ${className ? className : ''}`} onClick={onClick} style={{ ...styles.h2, ...style }}>{children}</h2>}
      {level === 3 && <h3 className={`${css.text} ${primary ? css['text--primary'] : ''} ${secondary ? css['text--seconday'] : ''} ${accent ? css['text--accent'] : ''} ${className ? className : ''}`} onClick={onClick} style={{ ...styles.h3, ...style }}>{children}</h3>}
      {level === 4 && <h4 className={`${css.text} ${primary ? css['text--primary'] : ''} ${secondary ? css['text--seconday'] : ''} ${accent ? css['text--accent'] : ''} ${className ? className : ''}`} onClick={onClick} style={{ ...styles.h4, ...style }}>{children}</h4>}
      {level === 5 && <h5 className={`${css.text} ${primary ? css['text--primary'] : ''} ${secondary ? css['text--seconday'] : ''} ${accent ? css['text--accent'] : ''} ${className ? className : ''}`} onClick={onClick} style={{ ...styles.h5, ...style }}>{children}</h5>}
      {level === 6 && <h6 className={`${css.text} ${primary ? css['text--primary'] : ''} ${secondary ? css['text--seconday'] : ''} ${accent ? css['text--accent'] : ''} ${className ? className : ''}`} onClick={onClick} style={{ ...styles.h6, ...style }}>{children}</h6>}
    </>
  )
}