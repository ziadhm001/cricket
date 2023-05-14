import { DrawerLink, IconDrawerBtn } from '@/utils/CustomComponents'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'
import MUIDrawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import React from 'react'
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from 'react-icons/ai'
import { FiTwitter } from 'react-icons/fi'
import { RxCross2 } from 'react-icons/rx'

function Drawer({ isDrawerOpen, close }) {
  return (
    <MUIDrawer
      open={isDrawerOpen}
      onClose={close}
      role='presentation'
      anchor='right'
    >
      <Stack width={'350px'}>
        <Stack
          direction={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
          height={'60px'}
          pl={2}
        >
          <Typography component={'span'} color={'#010101'} fontWeight={'500'}>
            More
          </Typography>
          <IconButton
            onClick={close}
            sx={(theme) => ({
              borderRadius: 0,
              height: '60px',
              width: '60px',
              backgroundColor: theme.palette.primary.main,
              '& svg': {
                color: '#fff',
              },
            })}
          >
            <RxCross2 />
          </IconButton>
        </Stack>
        <Divider />
        <DrawerLink>About us</DrawerLink>
        <Divider />
        <DrawerLink>Contact us</DrawerLink>
        <Divider />
        <DrawerLink>Careers</DrawerLink>
        <Divider />
        <DrawerLink>Advertise with Us</DrawerLink>
        <Divider />
        <DrawerLink>Privacy Policy</DrawerLink>
        <Divider />
        <DrawerLink>IPL Teams</DrawerLink>
        <Divider />
        <DrawerLink>Cricket States</DrawerLink>
        <Divider />
        <DrawerLink>Currant Series</DrawerLink>
        <Divider />

        <Box p={3}>
          <Typography
            component={'h5'}
            variant='body1'
            color='text.secondary'
            textTransform={'uppercase'}
            fontSize={'12px'}
            mb={1}
          >
            #Follow us
          </Typography>
          <Stack direction='row' spacing={1.3}>
            <IconDrawerBtn size='small'>
              <FiTwitter />
            </IconDrawerBtn>
            <IconDrawerBtn size='small'>
              <AiFillLinkedin />
            </IconDrawerBtn>
            <IconDrawerBtn size='small'>
              <AiOutlineInstagram />
            </IconDrawerBtn>
            <IconDrawerBtn size='small'>
              <AiOutlineYoutube />
            </IconDrawerBtn>
            <IconDrawerBtn size='small'>
              <AiFillFacebook />
            </IconDrawerBtn>
          </Stack>
        </Box>
      </Stack>
    </MUIDrawer>
  )
}

export default Drawer
