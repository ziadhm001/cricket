import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { Divider } from '@mui/material'

function SectionTitle({ txt = 'Last Updates' }) {
  return (
    <Box component='div' position={'relative'} mb={2}>
      {Array(3)
        .fill(0)
        .map((el, i) => (
          <Divider sx={{ mb: 0.4, borderColor: '#D0D0D0' }} key={i + 1} />
        ))}

      <Divider />
      <Typography
        left={'50%'}
        top='50%'
        variant='h1'
        position='absolute'
        sx={(theme) => ({
          backgroundColor: '#F5F5F5',
          px: 1.2,
          fontSize: '32px',
          transform: 'translate(-50%, -50%)',
          [theme.breakpoints.down('tablet')]: {
            fontSize: '26px',
          },
        })}
      >
        {txt}
      </Typography>
    </Box>
  )
}

export default SectionTitle
