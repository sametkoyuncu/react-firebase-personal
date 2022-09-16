import React from 'react'
import styled from '@mui/system/styled'

const Title = styled('p')({
  color: 'rgb(52, 71, 103)',
  padding: 8,
  fontFamily: 'Roboto Slab',
  fontWeight: '700',
  fontSize: '2rem',
  marginBottom: '10px',
})

const SectionTitle = ({ text }) => {
  return <Title>{text}</Title>
}

export default SectionTitle
