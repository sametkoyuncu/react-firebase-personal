import { useState, useEffect } from 'react'

// mui.js components
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

// sections
import Hero from './sections/Hero'

// hooks
import { useWindowScrollPositions } from '../../hooks/useWindowScrollPositions'

// assests
import { boxShadow, borderRadiusForCard } from '../../assets/theme/baseStyles'
import About from './sections/About'
import Projects from './sections/Projects'

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useWindowScrollPositions()

  useEffect(() => {
    scrollY > 200 ? setIsScrolled(true) : setIsScrolled(false)
  }, [scrollY])

  return (
    <div>
      <Hero isScrolled={isScrolled} />
      <Container
        sx={{
          maxWidth: { xs: '100%', sm: '95%' },
          position: 'relative',
          top: '-75px',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          borderRadius: borderRadiusForCard,
          padding: '20px',
          minHeight: '300px',
          boxShadow,
        }}
      >
        <Box sx={{ maxWidth: { sm: '85%', md: '60%' }, margin: '0 auto' }}>
          <About />
        </Box>
        <Projects />
      </Container>
    </div>
  )
}

export default Home
