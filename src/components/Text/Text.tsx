
import React from 'react';

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
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  lineHeight?: string | number;
}

export default function Text({ size, children, level, fontWeight, lineHeight }: TextProps) {
  return (
    <>
      {!level && <span style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: size || TextSizes['normal'], fontWeight: fontWeight || 400, lineHeight: lineHeight || 1.5 }}>{children}</span>}
      {level === 1 && <h1 style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: size || TextSizes['xxlarge'], fontWeight: fontWeight || 600, lineHeight: lineHeight || 1 }}>{children}</h1>}
      {level === 2 && <h2 style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: size || TextSizes['xlarge'], fontWeight: fontWeight || 500, lineHeight: lineHeight || 1.5 }}>{children}</h2>}
      {level === 3 && <h3 style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: size || TextSizes['large'], fontWeight: fontWeight || 400, lineHeight: lineHeight || 1.5 }}>{children}</h3>}
      {level === 4 && <h4 style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: size || TextSizes['normal'], fontWeight: fontWeight || 400, lineHeight: lineHeight || 1.5 }}>{children}</h4>}
      {level === 5 && <h5 style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: size || TextSizes['small'], fontWeight: fontWeight || 500, lineHeight: lineHeight || 1.5 }}>{children}</h5>}
      {level === 6 && <h6 style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: size || TextSizes['xsmall'], fontWeight: fontWeight || 600, lineHeight: lineHeight || 1.5 }}>{children}</h6>}
    </>
  )
}