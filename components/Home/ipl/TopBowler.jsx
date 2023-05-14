import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { NavLink } from '@/utils/CustomComponents'
import TopBowlerTable from './TopBowlerTable'

function TopBowler() {
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
          International Ranking
        </Typography>
        <NavLink>See All</NavLink>
      </Box>
      <TopBowlerTable />
    </Stack>
  )
}

export default TopBowler
