import * as React from 'react'

// mui.js components
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Grid from '@mui/material/Grid'
import Modal from '@mui/material/Modal'
import { styled } from '@mui/system'
import CloseIcon from '@mui/icons-material/Close'

// assets
import {
  borderRadiusForCard,
  boxShadow,
} from '../../../../../assets/theme/baseStyles'
import CardTitle from '../../../../../components/CardTitle'
import CardDescription from '../../../../../components/CardDescription'
import Tags from '../../../../../components/Tags'

// styled components
const Image = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: borderRadiusForCard,
  boxShadow,
})

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  miWidth: 400,
  bgcolor: 'background.paper',
  boxShadow,
  borderRadius: borderRadiusForCard,
  p: 2,
}

export default function BlogDetailsModal({ blog, ActionLink }) {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <ActionLink onClick={handleOpen}>Detaylar</ActionLink>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Image src={blog.image} alt={blog.title} />
            </Grid>
            <Grid item xs={12} md={8}>
              <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                <IconButton aria-label="close" onClick={handleClose}>
                  <CloseIcon />
                </IconButton>
              </Box>
              <Box px={1}>
                <CardTitle>{blog.title}</CardTitle>
                <CardDescription>{blog.description}</CardDescription>
                <Tags tags={blog.tags} />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  )
}
