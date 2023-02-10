import { Typography } from '@mui/material'
import React from 'react'

const FooterTitle = ({ text }) => {
  return (
    <Typography
    variant='h6'
    component='h6'
    sx={{
      fontWeight: '700',
      color: 'white',
      pb: 1,
    }}
    >
      { text }
    </Typography>
  )
}

export default FooterTitle
