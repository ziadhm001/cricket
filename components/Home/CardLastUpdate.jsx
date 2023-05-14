import Typography from '@mui/material/Typography'

function CardLastUpdate({ txt }) {
  return (
    <Typography
      component='div'
      fontSize='12px'
      textAlign='center'
      pt={2}
      px={1}
    >
      {txt || 'Last Updated on Apr 28, 2023, 22:48 IST'}
    </Typography>
  )
}

export default CardLastUpdate
