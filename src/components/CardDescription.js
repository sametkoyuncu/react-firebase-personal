import { styled } from '@mui/system'

const Description = styled('p')({
  fontSize: '1rem',
  fontWeight: '400',
  margin: '0',
  padding: '0',
  color: 'rgb(123, 128, 154)',
  fontFamily: '"Roboto Slab", sans-serif',
})

const CardDescription = ({ children }) => {
  return <Description>{children}</Description>
}

export default CardDescription
