import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { NavLink } from '@/utils/CustomComponents'
import UpcomingMatchCard from './UpcomingMatchCard'
import { useMediaQuery } from '@mui/material'

function UpcomingMatches() {
  const isMobileView = useMediaQuery((theme) =>
    theme.breakpoints.down('mobile')
  )
  const isDesktopView = useMediaQuery((theme) => theme.breakpoints.up('tablet'))
  return (
    <Stack
      borderRadius={'12px'}
      minHeight={'fit-content'}
      overflow={'hidden'}
      boxSizing={'unset'}
      width={isMobileView ? '100%' : '309px'}
      pb={2}
      gridColumn={isMobileView || isDesktopView ? 'unset' : 'span 2'}
    >
      <Box
        p={2}
        display='flex'
        justifyContent={'space-between'}
        alignItems={'center'}
        mb={2}
      >
        <Typography component='h3' fontWeight={500} fontSize='20px'>
          Upcoming Match
        </Typography>
        <NavLink>See All</NavLink>
      </Box>
      <Stack
        direction={isMobileView ? 'row' : 'column'}
        gap={2}
        overflow={'scroll'}
        sx={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        <UpcomingMatchCard />
        <UpcomingMatchCard />
        <UpcomingMatchCard />
      </Stack>
    </Stack>
  )
}

export default UpcomingMatches
