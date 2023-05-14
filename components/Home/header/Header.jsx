import {
  AppBar,
  Box,
  Container,
  FormControlLabel,
  IconButton,
  Stack,
  Switch,
  Toolbar,
  useMediaQuery,
} from '@mui/material'
import Image from 'next/image'
import React from 'react'
import logo from '@/public/logo.svg'
import { FiTwitter } from 'react-icons/fi'
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from 'react-icons/ai'
import { BiSearchAlt } from 'react-icons/bi'
import { Search, SignUpBtn } from '@/utils/CustomComponents'

const iconStyles = {
  color: '#fff',
  size: 23,
}

function Header() {
  const isMobileView = useMediaQuery((theme) =>
    theme.breakpoints.down('tablet')
  )
  return (
    <AppBar position='static'>
      <Container>
        <Toolbar
          sx={{
            justifyContent: 'space-between',
            paddingY: 2,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <Box
              component={'figure'}
              sx={{
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  right: 0,
                  width: '1px',
                  bgcolor: '#fff',
                  height: '50%',
                  top: '50%',
                  transform: 'translateY(-50%)',
                },
                position: 'relative',
                maxWidth: 'fit-content',
                paddingRight: 3,
                marginRight: 3,
              }}
            >
              <Image src={logo} alt='Cricket' />
            </Box>
            <FormControlLabel control={<Switch />} />
          </Box>
          {!isMobileView && (
            <Search
              InputProps={{
                startAdornment: (
                  <Box paddingRight={1.3}>
                    <BiSearchAlt color='#788698' />
                  </Box>
                ),
                disableUnderline: true,
              }}
              variant='standard'
              placeholder='Search by players, series, etc...'
              type='search'
            />
          )}
          <Stack direction={'row'} spacing={1.2}>
            {!isMobileView && (
              <Stack direction={'row'}>
                <IconButton size='small'>
                  <FiTwitter {...iconStyles} />
                </IconButton>
                <IconButton size='small'>
                  <AiFillLinkedin {...iconStyles} />
                </IconButton>
                <IconButton size='small'>
                  <AiOutlineInstagram {...iconStyles} />
                </IconButton>
                <IconButton size='small'>
                  <AiOutlineYoutube {...iconStyles} />
                </IconButton>
                <IconButton size='small'>
                  <AiFillFacebook {...iconStyles} />
                </IconButton>
              </Stack>
            )}
            <SignUpBtn>Sign Up</SignUpBtn>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
