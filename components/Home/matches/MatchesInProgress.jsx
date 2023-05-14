import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import React from 'react'
import QuickChip from '../QuickChip'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'
import SingleMatch from './SingleMatch'
import matches from '@/data/matches'
import useMediaQuery from '@mui/material/useMediaQuery'

function MatchesInProgress() {
  const isMobileView = useMediaQuery((theme) =>
    theme.breakpoints.down('mobile')
  )
  return (
    <Paper
      component={'section'}
      sx={(theme) => ({
        [theme.breakpoints.down('mobile')]: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
        },
      })}
    >
      <Stack
        direction={'row'}
        spacing={1}
        px={2}
        py={isMobileView ? 0 : 3}
        overflow={'scroll'}
        sx={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        <QuickChip txt={'All Matches (06)'} active />
        <QuickChip txt={'IPL 2023'} />
        <QuickChip txt={'SL vs IRE'} />
        <QuickChip txt={'Cool and Smooth T20'} />
        <QuickChip txt={'THI-W vs ZIM-W'} />
        <QuickChip txt={'ACC Mens Premier Cup'} />
        <QuickChip txt={'See All'} />
      </Stack>
      {!isMobileView && <Divider />}
      <Box
        py={3}
        px={isMobileView ? 0 : 3}
        ml={isMobileView ? 2 : 0}
        display={'flex'}
        alignItems={'center'}
        gap={2}
        overflow='scroll'
        sx={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {matches.map((match, key) => (
          <SingleMatch key={key} data={match} />
        ))}
      </Box>
    </Paper>
  )
}

export default MatchesInProgress
