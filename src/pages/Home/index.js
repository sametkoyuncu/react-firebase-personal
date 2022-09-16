import { useState, useEffect } from 'react'

// mui.js components
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

// icons
import FavoriteIcon from '@mui/icons-material/Favorite'

// sections
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Blog from './sections/Blog'
import Contact from './sections/Contact'

// hooks
import { useWindowScrollPositions } from '../../hooks/useWindowScrollPositions'

// assests
import { boxShadow, borderRadiusForCard } from '../../assets/theme/baseStyles'

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
      <Container>
        <Blog />
      </Container>
      <Container
        id="contact"
        sx={{
          maxWidth: { xs: '90%', sm: '80%' },
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          borderRadius: borderRadiusForCard,
          minHeight: '300px',
          marginBottom: '75px',
          boxShadow,
          padding: '0px !important',
        }}
      >
        <Contact />
      </Container>
      <Box>
        <Typography
          color="textSecondary"
          sx={{ textAlign: 'center', alignItems: 'center', margin: '20px 0' }}
        >
          <a
            href="https://github.com/sametkoyuncu"
            target="_blank"
            rel="noreferrer"
            style={{
              fontWeight: 'bold',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Samet Koyuncu
          </a>{' '}
          tarafından{' '}
          <FavoriteIcon
            sx={{ color: '#D61C4E', position: 'relative', bottom: '-5px' }}
          />{' '}
          ile oluşturulmuştur.
        </Typography>
      </Box>
    </div>
  )
}

export default Home
