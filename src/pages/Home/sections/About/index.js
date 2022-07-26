// mui.js components
import Box from '@mui/material/Box'
import { styled } from '@mui/system'

// components
import Avatar from './components/Avatar'
import Socials from './components/Socials'

// styled components
const Title = styled('p')({
  color: 'rgb(52, 71, 103)',
  padding: 8,
  fontFamily: 'Roboto Slab',
  fontWeight: '700',
  fontSize: '2rem',
  marginBottom: '10px',
})

const Description = styled('p')({
  color: 'rgb(123, 128, 154)',
  padding: 8,
  fontFamily: 'Roboto',
  lineHeight: '1.5',
  fontWeight: '300',
  fontSize: '1.2rem',
})

const Bold = styled('span')({
  fontWeight: '700',
})

const About = () => {
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Avatar />
      </Box>
      <Box sx={{ marginTop: '75px' }}>
        <Title>Samet Koyuncu</Title>
        <Description>
          Merhaba ben Samet. Bilgisayar mühendisliği mezunu, iOS Geliştirici ve
          küçükbaş hayvancılıkla uğraşan biriyim. Hafta içleri yazılım alanında
          çalışıp, hafta sonları koyunlara bakıyorum. İşim gereği çoğunlukla{' '}
          <Bold>Swift</Bold> dili ile geliştirmeler yapsam da{' '}
          <Bold>JavaScript (❤️)</Bold> ile uğraşmayı seviyorum..
        </Description>
        <Socials />
      </Box>
    </>
  )
}

export default About
