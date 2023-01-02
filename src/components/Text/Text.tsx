
import React from 'react';
import css from './text.module.css'

const TextSizes = {
  xsmall: "var(--text-xsmall, 1rem)",
  small: "var(--text-small, 1.2rem)",
  normal: "var(--text-normal, 1.6rem)",
  large: "var(--text-large, 2.1rem)",
  xlarge: "var(--text-xlarge, 3.2rem)",
  xxlarge: "var(--text-xxlarge, 4rem)",
}


export interface TextProps {
  size?: keyof typeof TextSizes;
  children?: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | "bold";
  lineHeight?: string | number;
  color?: string
  primary?: boolean
  secondary?: boolean
  accent?: boolean
  onClick?: () => void
  style?: {}
  className?: string
}

export default function Text({
  size,
  children,
  level,
  fontWeight,
  lineHeight,
  style,
  className,
  primary,
  secondary,
  accent,
  color,
  onClick
}: TextProps) {
  const styles = {
    span: {
      color: color, fontSize: TextSizes[size || 'normal'], fontWeight: fontWeight || 400, lineHeight: lineHeight || 1.5
    },
    h1: {
      color: color, fontSize: TextSizes[size || 'xxlarge'], fontWeight: fontWeight || 600, lineHeight: lineHeight || 1
    },
    h2: {
      color: color, fontSize: TextSizes[size || 'xlarge'], fontWeight: fontWeight || 500, lineHeight: lineHeight || 1.5
    },
    h3: {
      color: color, fontSize: TextSizes[size || 'large'], fontWeight: fontWeight || 400, lineHeight: lineHeight || 1.5
    },
    h4: {
      color: color, fontSize: TextSizes[size || 'normal'], fontWeight: fontWeight || 400, lineHeight: lineHeight || 1.5
    },
    h5: {
      color: color, fontSize: TextSizes[size || 'small'], fontWeight: fontWeight || 500, lineHeight: lineHeight || 1.5
    },
    h6: {
      color: color, fontSize: TextSizes[size || 'xsmall'], fontWeight: fontWeight || 600, lineHeight: lineHeight || 1.5
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