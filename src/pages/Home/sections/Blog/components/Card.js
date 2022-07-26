import React from 'react'
import styled from '@mui/system/styled'

// mui components
import Box from '@mui/material/Box'

// my components
import CardTitle from '../../../../../components/CardTitle'
import CardDescription from '../../../../../components/CardDescription'
//import Tags from '../../../../../components/Tags'

// assets
import {
  borderRadiusForCard,
  boxShadow,
} from '../../../../../assets/theme/baseStyles'

// styled components
const Image = styled('img')({
  width: '100%',
  height: '200px',
  objectFit: 'cover',
  display: 'inline-block',
  left: '0',
  top: '0',
  border: '1px solid rgb(52, 71, 103, .1)',
  borderRadius: borderRadiusForCard,
  boxShadow,
})

const Button = styled('a')({
  fontSize: '1rem',
  display: 'inline-block',
  fontWeight: '400',
  padding: '15px 20px',
  margin: '0 auto',
  marginTop: '20px',
  border: 'none',
  cursor: 'pointer',
  boxShadow,
  borderRadius: borderRadiusForCard,
  backgroundColor: 'rgba(123, 128, 154, .1)',
  color: 'rgb(123, 128, 154)',
  transition: 'all 0.3s ease-in-out',
  fontFamily: '"Roboto Slab", sans-serif',
  textDecoration: 'none',
  '&:hover': {
    boxShadow: 'none',
  },
})

const Card = ({ blog }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: { xs: '90%', sm: '100%' },
        mx: 'auto',
        padding: '10px',
        backgroundColor: 'white',
        borderRadius: borderRadiusForCard,
        boxShadow,
      }}
    >
      <Image src={blog.imageUrl} alt={blog.title} />
      <div style={{ padding: '10px' }}>
        <CardTitle>{blog.title}</CardTitle>
        <CardDescription>{blog.body}</CardDescription>
        <Button href={blog.actionUrl} target="_blank">
          Devamını oku..
        </Button>
      </div>
    </Box>
  )
}

export default Card
