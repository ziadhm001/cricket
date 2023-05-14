import { SecondaryBtn } from '@/utils/CustomComponents'
import { useTheme } from '@mui/material/styles'
import React from 'react'

function QuickChip({ active, txt }) {
  const theme = useTheme()
  return (
    <SecondaryBtn
      sx={{
        cursor: 'pointer',
        color: active ? '#fff' : theme.palette.text.primary,
        bgcolor: active
          ? theme.palette.primary.main
          : theme.palette.background.default,
      }}
    >
      {txt}
    </SecondaryBtn>
  )
}

export default QuickChip
