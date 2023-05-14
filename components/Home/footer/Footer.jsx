import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import { Container, Divider, Typography, useMediaQuery } from '@mui/material'
import { NavLink, SocialLinkFooter } from '@/utils/CustomComponents'
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from 'react-icons/ai'
import { FiTwitter } from 'react-icons/fi'

function Footer() {
  const isMobileView = useMediaQuery((theme) =>
    theme.breakpoints.down('mobile')
  )
  return (
    <Container
      maxWidth='xs'
      sx={{
        bgcolor: '#000',
      }}
      component={'footer'}
    >
      <Stack
        py={7}
        direction={isMobileView ? 'column' : 'row'}
        flexWrap={'wrap'}
        gap={3}
      >
        <Box flex={2}>
          <Box component={'img'} src='/logo.svg' alt='Cricket' />
          <Typography
            color={'#8C8C8C'}
            variant='caption'
            component={'div'}
            my={1}
            maxWidth={'70%'}
          >
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal.
          </Typography>
          <Stack direction={'row'} spacing={1.3}>
            <SocialLinkFooter size='small'>
              <FiTwitter />
            </SocialLinkFooter>
            <SocialLinkFooter size='small'>
              <AiFillLinkedin />
            </SocialLinkFooter>
            <SocialLinkFooter size='small'>
              <AiOutlineInstagram />
            </SocialLinkFooter>
            <SocialLinkFooter size='small'>
              <AiOutlineYoutube />
            </SocialLinkFooter>
            <SocialLinkFooter size='small'>
              <AiFillFacebook />
            </SocialLinkFooter>
          </Stack>
        </Box>
        <Box flex={1}>
          <Typography mb={2} component={'h4'} color={'#fff'}>
            IPL 2023 Teams
          </Typography>
          <Stack alignItems={'flex-start'}>
            <NavLink color='#8C8C8C'>Chennai Super Kings</NavLink>
            <NavLink color='#8C8C8C'>Rajasthan Royals</NavLink>
            <NavLink color='#8C8C8C'>Lucknow Super Giants</NavLink>
            <NavLink color='#8C8C8C'>Royal Challengers Bangalore</NavLink>
            <NavLink color='#8C8C8C'>Kolkata Knight Riders</NavLink>
          </Stack>
        </Box>
        <Box flex={1}>
          <Typography mb={2} component={'h4'} color={'#fff'}>
            IPL 2023 Teams
          </Typography>
          <Stack alignItems={'flex-start'}>
            <NavLink color='#8C8C8C'>Kolkata Knight Riders</NavLink>
            <NavLink color='#8C8C8C'>Delhi Capitals</NavLink>
            <NavLink color='#8C8C8C'>Gujarat Titans</NavLink>
            <NavLink color='#8C8C8C'>Sunrisers Hyderabad</NavLink>
          </Stack>
        </Box>
        <Box flex={1}>
          <Typography mb={2} component={'h4'} color={'#fff'}>
            Links
          </Typography>
          <Stack alignItems={'flex-start'}>
            <NavLink color='#8C8C8C'>About Us</NavLink>
            <NavLink color='#8C8C8C'>Contact Us</NavLink>
            <NavLink color='#8C8C8C'>Sitemap</NavLink>
          </Stack>
        </Box>
      </Stack>
      <Divider
        sx={{
          borderColor: '#343434',
        }}
      />
      <Stack
        direction={isMobileView ? 'column-reverse' : 'row'}
        fontSize={'14px'}
        gap={isMobileView ? 1 : 0}
        justifyContent={isMobileView ? 'center' : 'space-between'}
        py={2.3}
      >
        <Typography color={'#8C8C8C'} fontSize={'inherit'} textAlign={'center'}>
          {' '}
          © {new Date().getFullYear()} Cricket. All Rights Reserved.
        </Typography>
        <Stack direction={'row'} gap={'12px'} flexWrap={'wrap'}>
          <NavLink color={'#fff'} fontSize={'14px'}>
            Privacy Policy
          </NavLink>
          <NavLink color='#fff' fontSize={'14px'}>
            Terms & Conditions
          </NavLink>
          <NavLink color='#fff' fontSize={'14px'}>
            Disclaimer
          </NavLink>
          <NavLink color='#fff' fontSize={'14px'}>
            Editorial Policy
          </NavLink>
          <NavLink color='#fff' fontSize={'14px'}>
            Fact Check Policy
          </NavLink>
        </Stack>
      </Stack>
    </Container>
  )
}

export default Footer
