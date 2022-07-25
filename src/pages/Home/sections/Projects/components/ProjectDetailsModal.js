import * as React from 'react'

// mui.js components
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Grid from '@mui/material/Grid'
import Modal from '@mui/material/Modal'
import { styled } from '@mui/system'

// mui.js icons
import ThumbUpAltOffIcon from '@mui/icons-material/ThumbUpOffAlt'
import CloseIcon from '@mui/icons-material/Close'
import VisibilityIcon from '@mui/icons-material/Visibility'
import GitHubIcon from '@mui/icons-material/GitHub'

// assets
import {
  borderRadiusForCard,
  boxShadow,
} from '../../../../../assets/theme/baseStyles'
import CardTitle from '../../../../../components/CardTitle'
import CardDescription from '../../../../../components/CardDescription'
import Tags from '../../../../../components/Tags'
import { LikeIcon, LikeSpan, LinkButton } from './ModalButtons'

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
  bgcolor: 'background.paper',
  width: { xs: '80%', sm: '60%', md: '50%', lg: '40%', xl: '30%' },
  boxShadow,
  borderRadius: borderRadiusForCard,
  '&:focus': {
    outline: 'none',
  },
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
            <Grid item xs={12} md={8} px={1}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'start',
                  justifyContent: 'space-between',
                }}
              >
                <CardTitle>{blog.title}</CardTitle>
                <IconButton
                  aria-label="close"
                  sx={{ width: '32px', height: '32px' }}
                  onClick={handleClose}
                >
                  <CloseIcon />
                </IconButton>
              </Box>
              <Box>
                <CardDescription>{blog.description}</CardDescription>
                <Tags tags={blog.tags} />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: '1rem',
                }}
              >
                <Box>
                  <LikeSpan>
                    <LikeIcon>
                      <ThumbUpAltOffIcon />
                    </LikeIcon>
                    &nbsp;{blog.likesCount}
                  </LikeSpan>
                </Box>
                <Box>
                  <LinkButton
                    href="https://github.com/sametkoyuncu"
                    target="_blank"
                    rel="noreferrer"
                    sx={{ marginRight: '5px' }}
                  >
                    <VisibilityIcon sx={{ marginRight: '5px' }} />
                    Önizleme
                  </LinkButton>
                  <LinkButton
                    href="https://github.com/sametkoyuncu"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GitHubIcon sx={{ marginRight: '5px' }} />
                    Kodu İncele
                  </LinkButton>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  )
}
