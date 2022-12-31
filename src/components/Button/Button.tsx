import React, { InputHTMLAttributes } from "react";
import styled from 'styled-components'

export interface OwnProps extends InputHTMLAttributes<HTMLButtonElement> {
  label?: string
}

const ButtonWrapper = (props: OwnProps) => {
  return (
    <div>
      <Button>{props.label}</Button>
    </div>
  )
}

const Button = styled.button`
  background-color: #000;
  color: #fff;
`

export default ButtonWrapper;