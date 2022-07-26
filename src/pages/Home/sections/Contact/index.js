// mui.js components
import { Grid } from '@mui/material'
import { styled } from '@mui/system'

// assets
import BgImage from '../../../../assets/images/bg-coworking.jpeg'
import {
  boxShadow,
  borderRadiusForCard,
} from '../../../../assets/theme/baseStyles'

// my components
import Socials from './components/Socials'
import Form from './components/Form'

// styled components
const ImageBox = styled('div')({
  width: '100%',
  minHeight: '300px',
  height: '100%',
  backgroundImage: `url(${BgImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: borderRadiusForCard,
  boxShadow,
})

const Overlay = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  minHeight: '300px',
  borderRadius: borderRadiusForCard,
  backgroundColor: 'rgba(0,0,0,0.3)',
})

const Title = styled('h3')({
  fontSize: '1.8rem',
  letterSpacing: '0.1rem',
  fontWeight: '700',
  margin: '10px 0',
  padding: '0',
  color: 'white',
  fontFamily: '"Roboto Slab", sans-serif',
})

const Description = styled('p')({
  fontSize: '1.1rem',
  letterSpacing: '0.05rem',
  lineHeight: '1.2',
  textAlign: 'center',
  fontWeight: '300',
  margin: '10px 60px',
  padding: '0',
  color: 'rgba(255, 255, 255, 0.9)',
  fontFamily: '"Roboto Slab", sans-serif',
})

const Contact = () => {
  return (
    <Grid container>
      <Grid item xs={12} md={4}>
        <ImageBox>
          <Overlay>
            <Title>Bana Ulaşın</Title>
            <Description>
              Formu kullanarak bana yazabilir veya aşağıdaki bağlantılardan
              ulaşabilirsiniz.
            </Description>
            <Socials />
          </Overlay>
        </ImageBox>
      </Grid>
      <Grid item xs={12} md={8} sx={{ p: 4 }}>
        <Form />
      </Grid>
    </Grid>
  )
}

export default Contact
