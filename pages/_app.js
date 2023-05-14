import lightTheme from '@/styles/theme/lightTheme'
import createEmotionCache from '@/utils/createEmotionCahe'
import { CacheProvider } from '@emotion/react'
import { GlobalStyles, ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'

const clientSideEmotionCache = createEmotionCache()

export default function App({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) {
  return (
    <>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <GlobalStyles
            styles={{
              body: {
                backgroundColor: '#F5F5F5',
                overflowX: 'hidden',
                fontWeight: 500,
              },
              '*': {
                margin: 0,
                padding: 0,
                boxSizing: 'border-box',
              },
              a: {
                color: 'inherit',
              },
            }}
          />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </>
  )
}
