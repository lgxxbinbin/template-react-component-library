import * as React from 'react'
import { styled } from '@mui/material/styles'

import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'

const CustomizeTooltip = styled(Tooltip)`
  color: #20b2aa;

  :hover {
    color: #2e8b57;
  }
`

type NVTooltipProps = {
  title: string
  children: React.ReactNode
}

export default function NVTooltip(props: NVTooltipProps | any) {
  return (
    <CustomizeTooltip {...props}>
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </CustomizeTooltip>
  )
}
