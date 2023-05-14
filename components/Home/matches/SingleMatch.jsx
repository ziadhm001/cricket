import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { SecondaryBtn } from '@/utils/CustomComponents'
function SingleMatch({ data }) {
  return (
    <Stack
      boxShadow={'0px 4px 15px rgba(0, 0, 0, 0.08)'}
      borderRadius={'10px'}
      overflow={'hidden'}
      height={'224px'}
      minWidth={'287px'}
    >
      <Box
        p={'5px 10px'}
        textAlign={'center'}
        color={'Background'}
        height={'26px'}
        fontSize={'12px'}
        bgcolor={
          data.status.isEnded
            ? '#78E372'
            : data.status.inProgress
            ? '#FF8D7D'
            : data.status.isComing
            ? '#7775FF'
            : ''
        }
      >
        {data.status.isEnded
          ? 'Result'
          : data.status.inProgress
          ? 'Live'
          : data.status.isComing
          ? 'Upcoming'
          : ''}
      </Box>
      <Box
        height={'32px'}
        bgcolor={'#F5F5F5'}
        color='#FF513A'
        fontSize={'12px'}
        textAlign={'center'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        {data.status.message}
      </Box>
      <Stack flex={1} p={1.4}>
        <Stack
          flexDirection={'row'}
          justifyContent={'space-between'}
          mb={1.3}
          fontSize={'14px'}
        >
          <Box
            display={'flex'}
            flexDirection={'row'}
            justifyContent={'center'}
            alignItems={'center'}
            gap={0.5}
          >
            <Avatar
              src={'/team1.svg'}
              alt='team 1'
              sx={{
                height: '26px',
                width: '26px',
              }}
            />{' '}
            <Typography>{data.teams[0]}</Typography>
          </Box>
          <Typography>266/3</Typography>
        </Stack>
        <Stack
          flexDirection={'row'}
          justifyContent={'space-between'}
          mb={1.3}
          fontSize={'14px'}
        >
          <Box
            display={'flex'}
            flexDirection={'row'}
            justifyContent={'center'}
            alignItems={'center'}
            gap={0.5}
          >
            <Avatar
              src={'/team2.svg'}
              alt='team 2'
              sx={{
                height: '26px',
                width: '26px',
              }}
            />{' '}
            <Typography>{data.teams[1]}</Typography>
          </Box>
          <Typography>260/2</Typography>
        </Stack>
        <Typography color={'text.secondary'} fontSize={'12px'}>
          {data.tournament}
        </Typography>
        <Stack
          direction={'row'}
          flex={1}
          justifyContent={'center'}
          alignItems={'flex-end'}
          spacing={1.3}
        >
          <SecondaryBtn
            sx={{
              flex: 1,
              fontSize: '12px',
            }}
          >
            Fixtures
          </SecondaryBtn>
          <SecondaryBtn
            sx={{
              fontSize: '12px',
              flex: 1,
            }}
          >
            Standings
          </SecondaryBtn>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default SingleMatch
