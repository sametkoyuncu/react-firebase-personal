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
import ProjectDetailsModal from './ProjectDetailsModal'
import CardTitle from '../../../../../components/CardTitle'
import CardDescription from '../../../../../components/CardDescription'
import Tags from '../../../../../components/Tags'

// styled components
const Image = styled('img')({
  width: '100%',
  height: '175px',
  objectFit: 'cover',
  display: 'inline-block',
  border: '1px solid rgb(52, 71, 103, .1)',
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
    textDecoration: 'underline',
  },
})

const Card = ({ project }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: { xs: '85%', sm: '315px' },
        mx: 'auto',
      }}
    >
      <Image src={project.image} alt={project.title} />
      <div
        style={{
          padding: '15px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <CardTitle>{project.title}</CardTitle>
          <CardDescription>
            {`${project.description.slice(0, 100)}...`}
          </CardDescription>
          <Tags tags={project.tags} />
        </div>
        <Actions>
          <ActionIconSpan>
            <ActionIcon href={'#projects'}>
              <ThumbUpAltOffIcon />
            </ActionIcon>{' '}
            &nbsp;{project.likesCount}
          </ActionIconSpan>
          <ProjectDetailsModal project={project} ActionLink={ActionLink} />
        </Actions>
      </div>
    </Box>
  )
}

export default Card
