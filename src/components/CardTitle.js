import { styled } from '@mui/system'

const Title = styled('h3')({
  fontSize: '1.25rem',
  fontWeight: '500',
  margin: '15px 0',
  padding: '0',
  color: 'rgb(52, 71, 103)',
  fontFamily: '"Roboto Slab", sans-serif',
})

const CardTitle = ({ children }) => {
  return <Title>{children}</Title>
}

export default CardTitle
