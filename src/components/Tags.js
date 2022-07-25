import { styled } from '@mui/system'

// assets
import { borderRadiusForCard } from '../assets/theme/baseStyles'

// styled components

const TagsContainer = styled('div')({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  margin: '0',
  padding: '0',
  color: 'rgb(123, 128, 154)',
  fontFamily: '"Roboto Slab", sans-serif',
})

const Tag = styled('span')({
  display: 'inline-block',
  fontSize: '0.9rem',
  fontWeight: '400',
  marginTop: '10px',
  marginRight: '5px',
  padding: '8px 12px',
  color: 'rgb(123, 128, 154)',
  transition: 'all 0.2s ease-in-out',
  fontFamily: '"Roboto Slab", sans-serif',
  textDecoration: 'none',
  borderRadius: borderRadiusForCard,
  backgroundColor: 'rgba(41, 52, 98, 0.1)',
  cursor: 'pointer',
  '&:hover': {
    color: '#293462',
    backgroundColor: 'rgba(41, 52, 98, 0.3)',
  },
})

const Tags = ({ tags }) => {
  return (
    <TagsContainer>
      {tags.map((tag, index) => (
        <Tag key={index}>{tag}</Tag>
      ))}
    </TagsContainer>
  )
}

export default Tags
