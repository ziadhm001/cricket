import { NavLink } from '@/utils/CustomComponents'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TopScoreTable from './TopScoreTable'

function TopScore() {
  return (
    <Stack>
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
    </Stack>
  )
}

export default TopScore
