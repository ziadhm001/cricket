import Stack from '@mui/material/Stack'
import QuickChip from '../QuickChip'

function IplChips() {
  return (
    <Stack
      direction={'row'}
      spacing={1}
      px={2}
      py={3}
      justifyContent={'center'}
      alignItems={'center'}
      overflow={'scroll'}
      sx={(theme) => ({
        [theme.breakpoints.down('mobile')]: {
          justifyContent: 'flex-start',
        },
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      })}
    >
      <QuickChip txt={'Fixtures'} active />
      <QuickChip txt={'Standings'} />
      <QuickChip txt={'SL vs IREStats'} />
      <QuickChip txt={'Squads'} />
      <QuickChip txt={'Fantasy Tips'} />
    </Stack>
  )
}

export default IplChips
