import { styled } from '@mui/system'
import {
  boxShadow,
  borderRadiusForCard,
} from '../../../../../assets/theme/baseStyles'

export const LinkButton = styled('a')({
  display: 'inline-flex',
  alignItems: 'center',
  fontSize: '1rem',
  fontWeight: '400',
  margin: '0',
  padding: '8px 12px',
  color: 'rgb(123, 128, 154)',
  transition: 'all 0.2s ease-in-out',
  fontFamily: '"Roboto Slab", sans-serif',
  textDecoration: 'none',
  borderRadius: borderRadiusForCard,
  cursor: 'pointer',
  border: '1px solid rgba(41, 52, 98, 0.1)',
  backgroundColor: 'transparent',
  boxShadow,
  '&:hover': {
    color: '#293462',
    backgroundColor: 'rgba(41, 52, 98, 0.2)',
  },
})

export const LikeIcon = styled('a')({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1rem',
  fontWeight: '400',
  margin: '0',
  padding: '8px',
  color: 'rgb(123, 128, 154)',
  transition: 'all 0.2s ease-in-out',
  borderRadius: '50%',
  cursor: 'pointer',
  '&:hover': {
    color: '#D61C4E',
    backgroundColor: 'rgba(214, 28, 78,0.2)',
  },
})

export const LikeSpan = styled('span')({
  display: 'flex',
  alignItems: 'center',
  fontWeight: 400,
  fontSize: '0.9rem',
  fontFamily: '"Roboto", sans-serif',
  color: 'rgb(123, 128, 154)',
})
