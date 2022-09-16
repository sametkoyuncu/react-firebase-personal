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
    title: 'title here',
    body: 'body here',
    imageUrl:
      'https://github.com/sametkoyuncu/redux-notes-app/raw/master/public/screenshots/notlar.png',
    actionUrl: 'url here',
  },
  {
    id: 2,
    title: 'title here',
    body: 'body here',
    imageUrl:
      'https://github.com/sametkoyuncu/redux-notes-app/raw/master/public/screenshots/notlar.png',
    actionUrl: 'url here',
  },
  {
    id: 3,
    title: 'title here',
    body: 'body here',
    imageUrl:
      'https://github.com/sametkoyuncu/redux-notes-app/raw/master/public/screenshots/notlar.png',
    actionUrl: 'url here',
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
