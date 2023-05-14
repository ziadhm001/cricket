import { NavLink } from '@/utils/CustomComponents'
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import { RxHamburgerMenu } from 'react-icons/rx'
import React, { useCallback, useState } from 'react'
import { Container, useMediaQuery } from '@mui/material'
import Image from 'next/image'
import liveScore from '@/public/live-score.svg'
import Drawer from './Drawer'

function NavLinks() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const isMobileView = useMediaQuery((theme) =>
    theme.breakpoints.down('tablet')
  )
  const onClose = useCallback(() => setIsDrawerOpen(false), [])

  return (
    <Stack bgcolor={(theme) => theme.palette.background.default}>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          paddingY: '12px',
          gap: 1,
        }}
      >
        <Stack
          direction={'row'}
          overflow={'scroll'}
          justifyContent={'space-between'}
          gap={2}
          sx={{
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          <NavLink color={'text.primary'}>
            <Image src={liveScore} alt='score-live-img' /> Live scores
          </NavLink>
          <NavLink color={'text.primary'}>Fantacy Cricket Tips</NavLink>
          <NavLink color={'text.primary'}>Cricket News</NavLink>
          <NavLink color={'text.primary'}>IPL Points Table</NavLink>
          <NavLink color={'text.primary'}>IPL</NavLink>
          <NavLink color={'text.primary'}>IPL Orange Cap</NavLink>
          <NavLink color={'text.primary'}>Match Predictions</NavLink>
          <NavLink color={'text.primary'}>Analysis</NavLink>
          <NavLink color={'text.primary'}>Fixtures</NavLink>
        </Stack>
        {!isMobileView && (
          <IconButton size='small' onClick={() => setIsDrawerOpen(true)}>
            <RxHamburgerMenu />
          </IconButton>
        )}
      </Container>
      <Drawer close={onClose} isDrawerOpen={isDrawerOpen} />
    </Stack>
  )
}

export default NavLinks
