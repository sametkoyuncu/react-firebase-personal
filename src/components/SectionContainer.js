import { styled } from '@mui/system'

const Section = styled('section')({
  padding: '10px 0',
})

const SectionContainer = ({ children, id }) => {
  return <Section id={id}>{children}</Section>
}

export default SectionContainer
