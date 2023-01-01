
import React from 'react';

const TextSizes = {
  xsmall: "var(--text-xsmall, '1rem')",
  small: "var(--text-small, '1.2rem')",
  normal: "var(--text-normal, '1.6rem')",
  large: "var(--text-large, '3.2rem')",
  xlarge: "var(--text-xlarge, '3.2rem')",
  xxlarge: "var(--text-xxlarge, '4rem')",
}

export interface TextProps {
  size?: keyof typeof TextSizes;
  children?: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6
}

export default function Text({ size, children, level }: TextProps) {
  const fontSize = TextSizes[size || 'normal']
  return (
    <>
      {!level && <span style={{ fontSize: fontSize }}>{children}</span>}
      {level === 1 && <h1 style={{ fontSize: size || TextSizes['xxlarge'] }}>{children}</h1>}
      {level === 2 && <h2 style={{ fontSize: size || TextSizes['xlarge'] }}>{children}</h2>}
      {level === 3 && <h3 style={{ fontSize: size || TextSizes['large'] }}>{children}</h3>}
      {level === 4 && <h4 style={{ fontSize: size || TextSizes['normal'] }}>{children}</h4>}
      {level === 5 && <h5 style={{ fontSize: size || TextSizes['small'] }}>{children}</h5>}
      {level === 6 && <h6 style={{ fontSize: size || TextSizes['xsmall'] }}>{children}</h6>}
    </>
  )
}