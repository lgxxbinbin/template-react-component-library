import * as React from 'react'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'

const CustomizeButton = styled(Button)`
  color: #20b2aa;
  border-color: #20b2aa;

  :hover {
    color: #2e8b57;
    border: 1px solid #2e8b57;
  }
`

type NVButtonProps = {
  variant?: string | 'text'
  defaultValue?: number
  children: React.ReactNode
}

export default function NVButton(props: NVButtonProps | any) {
  return <CustomizeButton {...props}></CustomizeButton>
}
