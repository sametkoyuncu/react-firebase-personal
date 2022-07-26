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

const projects = [
  {
    title: 'ColorTown App',
    description:
      'ColorTown, kullanıcıların sisteme kayıt olup rastgele renk, renk gradyanı veya renk paleti oluşturabileceği ve bu renkleri diğer kullanıcılarla paylaşabileceği bir uygulamadır.',
    image:
      'https://github.com/sametkoyuncu/react-colortown/blob/master/public/screenshots/colors.png?raw=true',
    url: 'https://colortown.netlify.app/colors',
    githubUrl: 'https://github.com/sametkoyuncu/react-colortown',
    tags: ['React', 'Firebase', 'Mui.js'],
    likesCount: 1,
  },
  {
    title: 'Book Search App',
    description: `İSMEK, Zemin İstanbul, Kodluyoruz, Patika.dev ve Microsoft iş birliği ile gerçekleştirilen "Front-End Developer Eğitim Programı" için bitirme projesi olarak takım arkadaşlarım Nurselin Çavdar ve Onur Aylanç ile birlikte Book Searching adlı bir kitap arama uygulaması geliştirdik. Geliştirmiş olduğumuz uygulama ile kullanıcı kitap veya yazar ismi yazarak istediği kitabı arayabilecektir. Girilen sözcüğe uygun kitaplar listelenirken, bu kitaplara ait kısa bilgiler modal ile birlikte kullanıcıya sunulmaktadır. Kullanıcı, dilerse bu kitabın tüm detaylarına "preview" butonuna tıklayarak kolayca erişebilmektir.`,
    image:
      'https://github.com/nrslncvdr/book-search/raw/master/Screenshot_searching.png',
    url: 'https://booksearchingg.netlify.app/',
    githubUrl: 'https://github.com/nrslncvdr/book-search',
    tags: ['React', 'Mui.js'],
    likesCount: 3,
  },
  {
    title: 'Nodeblog',
    description:
      'Node.js, express.js ve mongodb kullanarak geliştirmiş olduğum bir blog uygulamasıdır. Kullanıcı yönetim panelini kullanarak içerikler ekleyebilir, varolan içerikleri düzenleyebilir veya silebilir.',
    image:
      'https://github.com/sametkoyuncu/nodeblog/blob/main/screenshots/homepageSmall2.png?raw=true',
    url: 'https://node-js-blog-app.herokuapp.com/',
    githubUrl: 'https://github.com/sametkoyuncu/nodeblog',
    tags: ['Node.js', 'MongoDB'],
    likesCount: 8,
  },
  {
    title: 'Redux Notes App',
    description: `Patika.dev üzerinde bulunan Redux modülünün ilk ödevi olan 'Notes App' projesi. Uygulamada kullanıcıların notlarını ekleyebilir, düzenleyebilir veya silebilir. Eklenen notları arasında arama alanını kullanarak arama yapabilirsiniz. Notlara tanımlı sekiz renk arasından atama yapabilirsiniz. Eklenen notlar kullanıcıların internet tarayıcılarında saklanır. `,
    image:
      'https://github.com/sametkoyuncu/redux-notes-app/raw/master/public/screenshots/notlar.png?raw=true',
    url: 'https://redux-notes-sk.netlify.app/',
    githubUrl: 'https://github.com/sametkoyuncu/redux-notes-app',
    tags: ['React', 'Redux', 'Mui.js'],
    likesCount: 170,
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
          maxWidth: { xs: '95%', md: '85%' },
        }}
      >
        <Title>Son projelerime göz atın</Title>

        <Grid container spacing={2}>
          {projects.map((blog, index) => (
            <Grid item xs={12} sm={6} md={3} key={blog.title}>
              <Card key={index} blog={blog} />
            </Grid>
          ))}
        </Grid>

        <ActionLink
          href="https://github.com/sametkoyuncu?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          Daha fazlası için tıklayınız..
        </ActionLink>
      </Box>
    </SectionContainer>
  )
}

export default Projects
