import { NavLink } from '@/utils/CustomComponents'
import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

function SingleTopPlayer({ name, photo }) {
  return (
    <ListItem
      sx={{
        mb: 1.4,
        borderRadius: '6px',
        bgcolor: '#F5F5F5',
      }}
      secondaryAction={
        <NavLink
          sx={{
            fontSize: '12px',
          }}
        >
          <AiOutlinePlus /> Follow
        </NavLink>
      }
    >
      <ListItemAvatar
        sx={{
          minWidth: '40px',
        }}
      >
        <Avatar
          src={photo || '/team1.svg'}
          alt='fottbal player'
          sx={{
            width: '32px',
            height: '32px',
          }}
        />
      </ListItemAvatar>
      <ListItemText
        primary={name || 'Ishant Sharma'}
        sx={{ fontSize: '10px' }}
      />
    </ListItem>
  )
}

export default SingleTopPlayer
