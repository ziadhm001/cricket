import { CardMedia, Stack, Typography, useMediaQuery } from '@mui/material'

function SingleNewsArticle({ title, subtitle, date }) {
  const isMobileView = useMediaQuery((theme) =>
    theme.breakpoints.down('mobile')
  )
  return (
    <Stack direction='row' spacing={2} alignItems='center'>
      <CardMedia
        component='img'
        image={'/image.png'}
        sx={{ borderRadius: '4px', maxWidth: isMobileView ? '135px' : '220px' }}
      />
      <Stack spacing={1}>
        <Typography variant='caption' color='primary' fontSize={'13px'}>
          {date || '27 April 2023'}
        </Typography>
        <Typography variant='h5' gutterBottom fontSize={'15px'}>
          {title ||
            'Dedicate this POTM to my new-born son: Varun Chakravarthy to my new-born son...'}
        </Typography>
        {!isMobileView && (
          <Typography
            variant='subtitle1'
            gutterBottom
            color='text.secondary'
            fontSize={'13px'}
          >
            {subtitle ||
              'It is a long established fact that a reader will be distracted by the readable...'}
          </Typography>
        )}
      </Stack>
    </Stack>
  )
}

export default SingleNewsArticle
