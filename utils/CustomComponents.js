import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import IconButton from '@mui/material/IconButton'

export const SignUpBtn = styled(Button)(({ theme }) => {
  return {
    backgroundColor: theme.palette.background.default,
    color: '#000',
    fontWeight: 400,
    padding: '.3rem 1.1rem .3rem 1.1rem',
    whiteSpace: 'nowrap',
    '&:hover': {
      backgroundColor: theme.palette.background.default,
    },
  }
})

export const Search = styled(TextField)(({ theme }) => {
  return {
    backgroundColor: theme.palette.background.default,
    lineHeight: 1.1,
    borderRadius: '4px',
    fontSize: 4,
    padding: '6px',
    color: '#788698',
    width: '500px',
    '& input': {
      height: '13px',
    },
  }
})

export const NavLink = styled(Link)({
  whiteSpace: 'nowrap',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 5,
  minWidth: 'fit-content',
  textTransform: 'none',
  fontWeight: 500,
  cursor: 'pointer',
  lineHeight: '21.79px',
  textDecoration: 'none',
  fontSize: '15px',
})

export const DrawerLink = styled(NavLink)(({ theme }) => ({
  justifyContent: 'flex-start',
  padding: '14px 18px',
  color: theme.palette.text.primary,
}))

export const IconDrawerBtn = styled(IconButton)({
  backgroundColor: '#788698',
  padding: 6,
  '&:hover': {
    backgroundColor: '#788698',
  },
  '& svg': {
    color: '#fff',
  },
})

export const SecondaryBtn = styled(Button)(({ theme }) => ({
  border: `${theme.palette.grey['400']} solid 1px`,
  cursor: 'pointer',
  color: theme.palette.text.primary,
  bgcolor: theme.palette.background.default,
  textTransform: 'none',
  borderRadius: '40px',
  whiteSpace: 'nowrap',
  minWidth: 'fit-content',
  '&:hover': {
    color: '#fff',
    backgroundColor: theme.palette.primary.main,
  },
}))

export const SocialLinkFooter = styled(IconButton)({
  backgroundColor: '#252525',
  padding: 7,
  '& svg': {
    color: '#fff',
  },
})
