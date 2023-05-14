import { useMediaQuery } from '@mui/material'
import Stack from '@mui/material/Stack'

function NewsArticle({ children, sx }) {
  const isMobileView = useMediaQuery((theme) =>
    theme.breakpoints.down('mobile')
  )
  return (
    <Stack
      sx={sx}
      bgcolor={'Background'}
      borderRadius={'12px'}
      minHeight={'fit-content'}
      overflow={'hidden'}
      boxSizing={'unset'}
      p={2}
      width={'618px'}
      gap={3}
      order={isMobileView ? -1 : 0}
    >
      {children}
    </Stack>
  )
}

export default NewsArticle
