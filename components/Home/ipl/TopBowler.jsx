import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { NavLink } from '@/utils/CustomComponents'
import TopBowlerTable from './TopBowlerTable'
import CardLastUpdate from '../CardLastUpdate'
import useMediaQuery from '@mui/material/useMediaQuery'

function TopBowler() {
  const isMobileView = useMediaQuery((theme) =>
    theme.breakpoints.down('mobile')
  )
  return (
    <Stack
      bgcolor={'Background'}
      borderRadius={'12px'}
      minHeight={'fit-content'}
      overflow={'hidden'}
      boxSizing={'unset'}
      width={isMobileView ? '100%' : '309px'}
      gridRow={isMobileView ? 'unset' : 'span 2'}
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
          Top Bowler
        </Typography>
        <NavLink>See All</NavLink>
      </Box>
      <TopBowlerTable />
      <CardLastUpdate />
    </Stack>
  )
}

export default TopBowler
