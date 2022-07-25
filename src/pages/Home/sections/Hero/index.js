import React from 'react'

// mui.js components
import Box from '@mui/material/Box'

// my components
import Navbar from './components/Navbar'

// assets
import BgImage from '../../../../assets/images/bg-coworking.jpeg'

const Hero = ({ isScrolled }) => {
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
      <Box
        sx={{
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}
      >
        <Navbar isScrolled={isScrolled} />
      </Box>
    </Box>
  )
}

export default Hero
