import React from 'react'

// mui.js components
import Box from '@mui/material/Box'
import { styled } from '@mui/system'

// icons
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'

// assest
import { boxShadow } from '../../../../../assets/theme/baseStyles'

// styled components
const ListItem = styled('li')({
  display: 'inline-block',
  backgroundColor: 'transparent',
  padding: '10px',
  margin: '0 10px',
  borderRadius: '50%',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    backgroundColor: 'rgba(52, 71, 103, 0.1)',
    color: '#5800FF',
    boxShadow,
  },
})

const Account = styled('a')({
  color: 'rgb(52, 71, 103)',
  textDecoration: 'none',
})

// data
const iconStyles = { width: '32px', height: '32px' }
const accounts = [
  {
    name: 'Github',
    url: 'https://github.com/',
    icon: <GitHubIcon sx={iconStyles} />,
  },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/samet-koyuncu/',
    icon: <LinkedInIcon sx={iconStyles} />,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/sametkoyuncu_/',
    icon: <InstagramIcon sx={iconStyles} />,
  },
]

const Socials = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: '10px',
      }}
    >
      <ul>
        {accounts.map((account) => (
          <ListItem key={account.name}>
            <Account href={account.url} target="_blank" rel="noreferrer">
              {account.icon}
            </Account>
          </ListItem>
        ))}
      </ul>
    </Box>
  )
}

export default Socials
