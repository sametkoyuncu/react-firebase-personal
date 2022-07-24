import { Box } from '@mui/material'
import React from 'react'

// assets
import Image from '../../../../../assets/images/avatar.png'
import { boxShadow } from '../../../../../assets/theme/baseStyles'

const Avatar = () => {
  return (
    <Box
      sx={{
        width: '100px',
        height: '100px',
        backgroundImage: `url(${Image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '50%',
        position: 'absolute',
        top: '-50px',
        boxShadow,
      }}
    />
  )
}

export default Avatar
