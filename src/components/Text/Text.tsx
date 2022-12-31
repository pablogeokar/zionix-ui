import React from 'react';
import styled, { css } from "styled-components";
import '../../styles/Zionix.css'


interface TextProps {
  children: React.ReactNode
}

export default function Text({ children }: TextProps) {
  return (
    <span style={{color: 'var(--primary)'}}>
      {children}
    </span>
  )
}