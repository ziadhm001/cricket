import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import React from 'react'
import { NavLink } from '@/utils/CustomComponents'
import SingleTopPlayer from './SingleTopPlayer'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import { useMediaQuery } from '@mui/material'

function TopPlayers() {
  const isMobileView = useMediaQuery((theme) =>
    theme.breakpoints.down('mobile')
  )
  return (
    <Stack
      width={isMobileView ? '100%' : '309px'}
      bgcolor={'Background'}
      borderRadius={'12px'}
      minHeight={'fit-content'}
      overflow={'hidden'}
      boxSizing={'unset'}
      pb={2}
    >
      <Box
        p={2}
        display='flex'
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Typography component='h3' fontWeight={500} fontSize='20px'>
          Top players
        </Typography>
        <NavLink>See All</NavLink>
      </Box>
      <Divider />
      <List
        disablePadding
        sx={{
          p: 2,
        }}
      >
        <SingleTopPlayer />
        <SingleTopPlayer />
        <SingleTopPlayer />
        <SingleTopPlayer />
        <SingleTopPlayer />
      </List>
      <Box textAlign={'center'}>
        <Button variant='contained' disableElevation size='small'>
          View More player
        </Button>
      </Box>
    </Stack>
  )
}

export default TopPlayers
