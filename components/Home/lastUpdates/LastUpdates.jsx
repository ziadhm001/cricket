import Box from '@mui/material/Box'
import SectionTitle from '../SectionTitle'
import TopPlayers from './TopPlayers'
import NewsArticle from '../NewsArticle'
import SingleNewsArticle from '../SingleNewsArticle'
import Button from '@mui/material/Button'
import InternationalRanking from './InternationalRanking'
import Stack from '@mui/material/Stack'

function LastUpdates() {
  return (
    <Box mt={10}>
      <SectionTitle />
      <Stack
        bgcolor={'transparent'}
        flexWrap={'wrap'}
        flexDirection={'row'}
        alignItems={'flex-start'}
        gap={4}
        justifyContent={'center'}
      >
        <TopPlayers />
        <NewsArticle>
          <SingleNewsArticle />
          <SingleNewsArticle />
          <SingleNewsArticle />
          <Box textAlign={'center'}>
            <Button variant='contained' disableElevation>
              More Updates
            </Button>
          </Box>
        </NewsArticle>
        <InternationalRanking />
      </Stack>
    </Box>
  )
}

export default LastUpdates
