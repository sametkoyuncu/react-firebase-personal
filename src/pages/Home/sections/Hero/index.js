import React from 'react'

// mui.js components
import Box from '@mui/material/Box'

// my components
import Navbar from './components/Navbar'

// assets
import BgImage from '../../../../assets/images/bg-coworking.jpeg'

const Hero = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: { xs: '40vh', md: '60vh' },
        backgroundImage: `url(${BgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Navbar />
    </Box>
  )
}

export default Hero
