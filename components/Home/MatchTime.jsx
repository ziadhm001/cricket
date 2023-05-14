import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import { HiOutlineClock } from 'react-icons/hi'
import { GoLocation } from 'react-icons/go'

function MatchTime({ sx }) {
  return (
    <Stack
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      sx={{
        ...sx,
        '& *': {
          color: '#494C61',
        },
      }}
      px={2.3}
      py={1.2}
    >
      <Stack
        direction='row'
        justifyContent='center'
        alignItems='center'
        spacing={0.6}
      >
        <HiOutlineClock />
        <MatchTimeTypography txt={'26 March, 7:30 PM'} />
      </Stack>
      <Stack
        direction='row'
        gap={0.6}
        justifyContent='center'
        alignItems='center'
      >
        <GoLocation />
        <MatchTimeTypography txt='Gujarat' />
      </Stack>
    </Stack>
  )
}

const MatchTimeTypography = ({ txt }) => {
  return (
    <Typography component='div' fontSize='13px'>
      {txt}
    </Typography>
  )
}

export default MatchTime
