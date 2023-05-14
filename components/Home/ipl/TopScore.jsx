import { NavLink } from '@/utils/CustomComponents'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TopScoreTable from './TopScoreTable'
import CardLastUpdate from '../CardLastUpdate'
import useMediaQuery from '@mui/material/useMediaQuery'

function TopScore() {
  const isMobileView = useMediaQuery((theme) =>
    theme.breakpoints.down('mobile')
  )
  const isTabletView = useMediaQuery((theme) =>
    theme.breakpoints.down('tablet')
  )
  return (
    <Stack
      bgcolor={'Background'}
      borderRadius={'12px'}
      minHeight={'fit-content'}
      overflow={'hidden'}
      boxSizing={'unset'}
      width={isMobileView ? '100%' : '309px'}
      gridRow={isTabletView ? 'unset' : 'span 2'}
      pb={2}
    >
      <Box
        p={2}
        display='flex'
        justifyContent={'space-between'}
        alignItems={'center'}
        mb={2}
      >
        <Typography component='h3' fontWeight={500} fontSize='20px'>
          Top Scorer
        </Typography>
        <NavLink>See All</NavLink>
      </Box>
      <TopScoreTable />
      <CardLastUpdate />
    </Stack>
  )
}

export default TopScore
