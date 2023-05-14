import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import MatchTime from '../MatchTime'

function UpcomingMatchCard() {
  return (
    <Stack
      bgcolor='Background'
      borderRadius='12px'
      height='141px'
      mb={2}
      minWidth={'290px'}
    >
      <Stack
        direction='row'
        px={4}
        flex={1}
        justifyContent='space-between'
        alignItems='center'
      >
        <TeamShower />
        <Typography
          variant='caption'
          color='#DDDDDD'
          fontWeight={700}
          fontSize='24px'
        >
          VS
        </Typography>
        <TeamShower teamName='LSG' />
      </Stack>
      <Divider />
      <MatchTime />
    </Stack>
  )
}

const TeamShower = ({ img, teamName }) => (
  <Stack
    component='figure'
    justifyContent='center'
    alignItems='center'
    spacing={1.2}
  >
    <Box component='img' src={img || '/team1.svg'} width='36px' height='36px' />
    <Typography fontSize='18px' fontWeight={500} component='figcaption'>
      {teamName || 'PBKS'}
    </Typography>
  </Stack>
)

export default UpcomingMatchCard
