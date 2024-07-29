// mui.js components
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import SectionAction from '../../../../components/SectionAction'

// components
import SectionContainer from '../../../../components/SectionContainer'
import SectionTitle from '../../../../components/SectionTitle'
import Card from './components/Card'

// data
const projects = [
  {
    title: 'RouteTown',
    description:
      'RouteTown, iOS uygulamalarında ekran yönlendirmelerini kolayca yönetmeyi amaçlar.',
    image: 'https://miro.medium.com/max/1400/1*ZkTGSWndPXqA22szh1Jl-A.webp',
    url: 'https://medium.com/@sametkoyuncu/routetown-ios-uygulamalar%C4%B1n%C4%B1z-i%CC%87%C3%A7in-g%C3%BC%C3%A7l%C3%BC-ve-esnek-navigasyon-y%C3%B6netimi-bdde3c9a129c',
    githubUrl: 'https://github.com/sametkoyuncu/RouteTown',
    tags: ['Swift', 'UIKit', 'Router'],
    likesCount: 47,
  },
  {
    title: 'SideTown',
    description:
      'ColorTown, kullanıcıların sisteme kayıt olup rastgele renk, renk gradyanı veya renk paleti oluşturabileceği ve bu renkleri diğer kullanıcılarla paylaşabileceği bir uygulamadır.',
    image: 'https://miro.medium.com/max/1400/1*VlbmOlPk_IihNMoEF6sHkQ.webp',
    url: 'https://medium.com/@sametkoyuncu/sidetown-nedir-nasıl-kullanılır-84545c5d1fd1',
    githubUrl: 'https://github.com/sametkoyuncu/SideTown',
    tags: ['Swift', 'UIKit'],
    likesCount: 77,
  },
  // ---
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
        <SectionTitle>Son projelerime göz atın</SectionTitle>

        <Grid container spacing={2}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} lg={3} key={project.title}>
              <Card key={index} project={project} />
            </Grid>
          ))}
        </Grid>

        <SectionAction
          href="https://github.com/sametkoyuncu?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          Daha fazlası için tıklayınız..
        </SectionAction>
      </Box>
    </SectionContainer>
  )
}

export default Projects
