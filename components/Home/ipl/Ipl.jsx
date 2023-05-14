import Box from '@mui/material/Box'
import SectionTitle from '../SectionTitle'
import IplChips from './IplChips'
import NewsArticle from '../NewsArticle'
import SingleNewsArticle from '../SingleNewsArticle'
import Ranking from './Ranking'
import TopScore from './TopScore'
import TopBowler from './TopBowler'

function Ipl() {
  return (
    <Box mt={10}>
      <SectionTitle txt={`IPL ${new Date().getFullYear()}`} />
      <IplChips />
      <Box
        sx={{
          display: 'grid',
        }}
      >
        <Ranking />
        <Ranking />
        <NewsArticle sx={{}}>
          <SingleNewsArticle />
          <SingleNewsArticle />
          <SingleNewsArticle />
          <SingleNewsArticle />
        </NewsArticle>
        <TopScore />
        <TopBowler />
      </Box>
    </Box>
  )
}

export default Ipl
