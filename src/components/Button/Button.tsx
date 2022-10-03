import React from 'react'
import ButtonStyle from './style'

export interface ButtonProps {
  label: string
}

const Button = (props: ButtonProps) => {
  return <ButtonStyle>{props.label}</ButtonStyle>
}

export default Button
