import React from 'react';

export interface SizesInterface {
  xsmall: "var(--xsmall, 1rem)";
  small: "var(--small, 1.2rem)";
  normal: "var(--normal, 1.6rem)";
  large: "var(--large, 3.2rem)";
  xlarge: "var(xlarge, 3.2rem)";
  xxlarge: "var(--xxlarge, 4rem)";
}

export interface TextProps {
  size?: keyof SizesInterface;
}

export default function Text({ size }: TextProps) {
  return (
    <span>{size}</span>
  )
}