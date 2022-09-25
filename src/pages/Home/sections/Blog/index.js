import React from 'react'

// mui components
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

// my components
import SectionContainer from '../../../../components/SectionContainer'
import SectionTitle from '../../../../components/SectionTitle'
import SectionAction from '../../../../components/SectionAction'

import Card from './components/Card'

// data
const blogs = [
  {
    id: 1,
    title: 'Swift’te ‘Delegate Design Pattern’ Nedir? Nasıl Kullanılır?',
    body: 'Merhaba, arkadaşlar 👋. Bu yazımda sizlere ‘Delegate Desing Pattern’ nedir ve nasıl kullanılır onu anlatacağım.',
    imageUrl:
      'https://cdn-images-1.medium.com/max/1600/1*XkTAs9_CULzvLT4YDTwrFg.png',
    actionUrl:
      'https://medium.com/@sametkoyuncu/swiftte-the-delegate-design-pattern-nedir-nasıl-kullanılır-3e2cd9ea7019',
  },
  {
    id: 2,
    title: 'Değişken Boyuttaki İçeriklerle UIScrollView Kullanımı',
    body: 'Merhaba, arkadaşlar. Bugün, çözümünü bulana kadar epey vaktimi alan bir konuyu sizlerle paylaşmak istiyorum.”.',
    imageUrl: 'https://miro.medium.com/max/1400/1*L-mrqXrxtsjVHB8wuh2BvQ.png',
    actionUrl:
      'https://medium.com/@sametkoyuncu/de%C4%9Fi%C5%9Fken-boyuttaki-i%CC%87%C3%A7eriklerle-uiscrollview-kullan%C4%B1m%C4%B1-880d3cbbb631',
  },
]

const Blog = () => {
  return (
    <SectionContainer id="#blog">
      <Box>
        <SectionTitle text="Son Yazılarım" />

        <Grid container spacing={2}>
          {blogs.map((blog, index) => (
            <Grid item xs={12} md={6} lg={4} key={blog.id}>
              <Card key={index} blog={blog} />
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

export default Blog
