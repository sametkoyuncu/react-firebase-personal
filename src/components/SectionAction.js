import React from 'react'
import styled from '@mui/system/styled'

const ActionLink = styled('a')({
  margin: '30px auto',
  fontSize: '1rem',
  fontWeight: '400',
  color: 'rgb(52, 71, 103)',
  fontFamily: '"Roboto Slab", sans-serif',
  transition: 'all 0.3s ease-in-out',
  textDecoration: 'none',
  '&:hover': {
    color: 'rgb(52, 71, 103)',
    textDecoration: 'underline',
  },
})

const SectionAction = ({ text, url }) => {
  return (
    <ActionLink href={url} target="_blank" rel="noreferrer">
      {text}
    </ActionLink>
  )
}

export default SectionAction
