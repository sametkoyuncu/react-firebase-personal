import React from 'react'

// mui.js components
import Box from '@mui/material/Box'
import { styled } from '@mui/system'

// mui.js icons
import ThumbUpAltOffIcon from '@mui/icons-material/ThumbUpOffAlt'

// assets
import {
  borderRadiusForCard,
  boxShadow,
} from '../../../../../assets/theme/baseStyles'

// my components
import BlogDetailsModal from './BlogDetailsModal'
import CardTitle from '../../../../../components/CardTitle'
import CardDescription from '../../../../../components/CardDescription'
import Tags from '../../../../../components/Tags'

// styled components
const Image = styled('img')({
  width: '100%',
  height: '175px',
  objectFit: 'cover',
  display: 'inline-block',
  borderRadius: borderRadiusForCard,
  boxShadow,
})

const Actions = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '5px 0',
  padding: '0',
  color: 'rgb(123, 128, 154)',
  fontFamily: '"Roboto Slab", sans-serif',
})

const ActionIconSpan = styled('span')({
  display: 'flex',
  alignItems: 'center',
  fontWeight: 400,
  fontSize: '0.9rem',
  fontFamily: '"Roboto", sans-serif',
})

const ActionIcon = styled('a')({
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
  '&:hover': {
    color: '#D61C4E',
    backgroundColor: 'rgba(214, 28, 78,0.2)',
  },
})

const ActionLink = styled('a')({
  display: 'inline-block',
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
  '&:hover': {
    color: '#293462',
    backgroundColor: 'rgba(41, 52, 98, 0.2)',
  },
})

const Card = ({ blog }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: { xs: '85%', sm: '315px' },
        mx: 'auto',
      }}
    >
      <Image src={blog.image} alt={blog.title} />
      <CardTitle>{blog.title}</CardTitle>
      <CardDescription>
        {`${blog.description.slice(0, 100)}...`}
      </CardDescription>
      <Tags tags={blog.tags} />
      <Actions>
        <ActionIconSpan>
          <ActionIcon href={blog.url}>
            <ThumbUpAltOffIcon />
          </ActionIcon>{' '}
          &nbsp;{blog.likesCount}
        </ActionIconSpan>
        <BlogDetailsModal blog={blog} ActionLink={ActionLink} />
      </Actions>
    </Box>
  )
}

export default Card
