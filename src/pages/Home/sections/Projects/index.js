import React from 'react'

// mui.js components
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/system'

// components
import SectionContainer from '../../../../components/SectionContainer'
import Card from './components/Card'

// styled components
const Title = styled('h2')({
  fontSize: '1.75rem',
  fontWeight: '700',
  marginBottom: '30px',
  padding: '0',
  fontFamily: '"Roboto Slab", sans-serif',
  color: 'rgb(52, 71, 103)',
})

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

const blogs = [
  {
    title: 'The voodoo sacerdos flesh eater',
    description:
      'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.',
    image: 'https://source.unsplash.com/random/500x200',
    url: 'https://source.unsplash.com/random/500x200',
    tags: ['React', 'Firebase', 'CSS'],
    likesCount: 5,
  },
  {
    title: 'Sicut zeder apathetic malus voodoo',
    description:
      'Cum horribilem walking dead resurgere de crazed sepulcris creaturis, zombie sicut de grave feeding iride et serpens. Pestilentia, shaun ofthe dead scythe animated corpses ipsa screams. Pestilentia est plague haec decaying ambulabat mortuos. Sicut zeder apathetic malus voodoo. Aenean a dolor plan et terror soulless vulnerum contagium accedunt, mortui iam vivam unlife. Qui tardius moveri, brid eof reanimator sed in magna copia sint terribiles undeath legionis. Alii missing oculis aliorum sicut serpere crabs nostram. Putridi braindead odores kill and infect, aere implent left four dead.',
    image: 'https://source.unsplash.com/random/400x200',
    url: 'https://source.unsplash.com/random/400x200',
    tags: ['React', 'Firebase', 'CSS'],
    likesCount: 0,
  },
  {
    title: 'Kirkman Moore and Adlard caeruleum in locis',
    description:
      'Lucio fulci tremor est dark vivos magna. Expansis creepy arm yof darkness ulnis witchcraft missing carnem armis Kirkman Moore and Adlard caeruleum in locis. Romero morbo Congress amarus in auras. Nihil horum sagittis tincidunt, zombie slack-jawed gelida survival portenta. The unleashed virus est, et iam zombie mortui ambulabunt super terram. Souless mortuum glassy-eyed oculos attonitos indifferent back zom bieapoc alypse. An hoc dead snow braaaiiiins sociopathic incipere Clairvius Narcisse, an ante? Is bello mundi z?',
    image: 'https://source.unsplash.com/random/600x300',
    url: 'https://source.unsplash.com/random/600x300',
    tags: ['React', 'Firebase', 'CSS'],
    likesCount: 8,
  },
  {
    title: 'In Craven omni memoria patriae zombieland',
    description:
      'In Craven omni memoria patriae zombieland clairvius narcisse religionis sunt diri undead historiarum. Golums, zombies unrelenting et Raimi fascinati beheading. Maleficia! Vel cemetery man a modern bursting eyeballs perhsaps morbi. A terrenti flesh contagium. Forsitan deadgurl illud corpse Apocalypsi, vel staggering malum zomby poenae chainsaw zombi horrifying fecimus burial ground. Indeflexus shotgun coup de poudre monstra per plateas currere. Fit de decay nostra carne undead. Poenitentiam violent zom biehig hway agite RE:dead pœnitentiam! Vivens mortua sunt apud nos night of the living dead.',
    image: 'https://source.unsplash.com/random/700x300',
    url: 'https://source.unsplash.com/random/700x300',
    tags: ['React', 'Firebase', 'CSS'],
    likesCount: 3,
  },
]

const Projects = () => {
  return (
    <SectionContainer id="projects">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'center', sm: 'start' },
          justifyContent: 'center',
          margin: '0 auto',
          marginTop: '100px',
          marginBottom: '75px',
          maxWidth: { xs: '95%', md: '85%' },
        }}
      >
        <Title>Son projelerime göz atın</Title>

        <Grid container spacing={2}>
          {blogs.map((blog, index) => (
            <Grid item xs={12} sm={6} md={3} key={blog.title}>
              <Card key={index} blog={blog} />
            </Grid>
          ))}
        </Grid>

        <ActionLink
          href="https://github.com/sametkoyuncu?tab=repositories"
          target="_blank"
        >
          Daha fazlası için tıklayınız..
        </ActionLink>
      </Box>
    </SectionContainer>
  )
}

export default Projects
