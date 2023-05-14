import Box from '@mui/material/Box'
import SectionTitle from '../SectionTitle'
import IplChips from './IplChips'
import NewsArticle from '../NewsArticle'
import SingleNewsArticle from '../SingleNewsArticle'
import Ranking from './Ranking'
import TopScore from './TopScore'
import TopBowler from './TopBowler'
import UpcomingMatches from './UpcomingMatches'
import useMediaQuery from '@mui/material/useMediaQuery'
import Button from '@mui/material/Button'

function Ipl() {
  const isMobileView = useMediaQuery((theme) =>
    theme.breakpoints.down('mobile')
  )
  const isTabletView = useMediaQuery((theme) =>
    theme.breakpoints.down('tablet')
  )
  return (
    <Box mt={10}>
      <SectionTitle txt={`IPL ${new Date().getFullYear()}`} />
      <IplChips />
      <Box
        sx={(theme) => ({
          display: 'grid',
          gridTemplateColumns: '309px 1fr 1fr 309px',
          gridTemplateRows: 'auto auto auto',
          justifyItems: 'center',
          gap: 3,
          [theme.breakpoints.down('tablet')]: {
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridAutoRows: 'auto',
          },
          [theme.breakpoints.down('mobile')]: {
            gridTemplateColumns: '1fr',
            gridAutoRows: 'auto',
          },
        })}
      >
        <UpcomingMatches />
        <NewsArticle
          sx={{
            order: 0,
            gridColumn: isMobileView ? 'unset' : 'span 2',
            gridRow: isTabletView ? 'unset' : 'span 2',
          }}
        >
          <SingleNewsArticle />
          <SingleNewsArticle />
          <SingleNewsArticle />
          <SingleNewsArticle />
          <Box textAlign={'center'}>
            <Button variant='contained' disableElevation>
              More Updates
            </Button>
          </Box>
        </NewsArticle>
        <Ranking />
        <TopScore />
        <TopBowler />
      </Box>
    </Box>
  )
}

export default Ipl
