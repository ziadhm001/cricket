import { createTheme } from '@mui/material/styles'

const lightTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
  breakpoints: {
    values: {
      mobile: 768,
      tablet: 992,
      laptop: 1200,
      desktop: 1400,
    },
  },
  palette: {
    text: {
      primary: '#010101',
      secondary: '#494C61',
      light: '#788698',
    },
    mode: 'light',
    primary: {
      main: '#C1272D',
    },
  },
})

export default lightTheme
