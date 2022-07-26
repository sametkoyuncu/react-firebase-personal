import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/system'

import {
  boxShadow,
  borderRadiusForCard,
} from '../../../../../assets/theme/baseStyles'

const Button = styled('a')({
  type: 'submit',
  display: 'inline-flex',
  alignItems: 'center',
  fontSize: '1.2rem',
  fontWeight: '400',
  margin: '0',
  padding: '10px 12px',
  color: 'rgb(123, 128, 154)',
  transition: 'all 0.2s ease-in-out',
  fontFamily: '"Roboto Slab", sans-serif',
  textDecoration: 'none',
  borderRadius: borderRadiusForCard,
  cursor: 'pointer',
  border: '1px solid rgba(0, 0, 0, 0.6)',
  backgroundColor: 'transparent',
  boxShadow,
  '&:hover': {
    color: '#293462',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
})

const handleSent = (e) => {
  e.preventDefault()
  console.log('submit')
}

export default function Form() {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <TextField
            disabled
            fullWidth
            required
            id="name"
            label="Ad Soyad"
            placeholder="John Doe"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            disabled
            fullWidth
            required
            id="email"
            label="E-posta"
            type="email"
            placeholder="example@mail.com"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            disabled
            fullWidth
            required
            id="subject"
            label="Konu"
            placeholder="Mesajınızın konusu"
            variant="standard"
          />
        </Grid>
      </Grid>

      <TextField
        disabled
        fullWidth
        required
        id="message"
        label="Mesajınız"
        multiline
        rows={4}
        placeholder="Mesajınızı buraya yazın"
        variant="standard"
        sx={{ mt: 2 }}
      />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'end',
          mt: 3,
        }}
      >
        <Button onClick={handleSent} disabled>
          Gönder
        </Button>
      </Box>
    </Box>
  )
}
