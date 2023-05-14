import { NavLink } from '@/utils/CustomComponents'
import {
  Box,
  Divider,
  Stack,
  Tab,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useMediaQuery,
} from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import RankingTable from './RankingTable'
import { useState } from 'react'
import CardLastUpdate from '../CardLastUpdate'
function Ranking() {
  const [ranking, setRanking] = useState('')
  const [rankTab, setRankTab] = useState('teams')
  const isMobileView = useMediaQuery((theme) =>
    theme.breakpoints.down('mobile')
  )
  return (
    <Stack
      fontSize={'14px'}
      bgcolor={'Background'}
      borderRadius={'12px'}
      minHeight={'fit-content'}
      overflow={'hidden'}
      boxSizing={'unset'}
      width={isMobileView ? '100%' : '309px'}
      pb={2}
    >
      <Box
        p={2}
        display='flex'
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Typography component='h3' fontWeight={500} fontSize='20px'>
          Ranking
        </Typography>
        <NavLink>See All</NavLink>
      </Box>
      <Divider />
      <Stack justifyContent={'center'} alignItems={'center'} px={2} py={3}>
        <ToggleButtonGroup
          aria-label='Ranks'
          size='small'
          exclusive
          value={ranking}
          onChange={(e, value) => setRanking(value)}
        >
          <ToggleButton value={'test'}>Test</ToggleButton>
          <ToggleButton value='tdi'>ODI</ToggleButton>
          <ToggleButton value='alr'>ALR</ToggleButton>
        </ToggleButtonGroup>
      </Stack>
      <TabContext value={rankTab}>
        <TabList
          onChange={(e, value) => setRankTab(value)}
          variant='scrollable'
        >
          <Tab
            label='Teams'
            value='teams'
            sx={{
              fontSize: '14px',
              textTransform: 'none',
            }}
          />
          <Tab
            sx={{
              fontSize: '14px',
              textTransform: 'none',
            }}
            label='Batting'
            value='batting'
          />
          <Tab
            sx={{
              fontSize: '14px',
              textTransform: 'none',
            }}
            label='Bowling'
            value='bowling'
          />
          <Tab
            sx={{
              fontSize: '14px',
              textTransform: 'none',
            }}
            label='ALR'
            value='alr'
          />
        </TabList>
        <Divider />
        <TabPanel value='teams' sx={{ padding: 0, pt: 2 }}>
          <RankingTable />
        </TabPanel>
        <TabPanel value='batting'></TabPanel>
        <TabPanel value='bowling'></TabPanel>
        <TabPanel value='alr'></TabPanel>
      </TabContext>
      <CardLastUpdate />
    </Stack>
  )
}

export default Ranking
