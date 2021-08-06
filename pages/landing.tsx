import Footer from '@component/landing/Footer'
import Section2 from '@component/landing/Section2'
import Section8 from '@component/landing/Section8'
import Section9 from '@component/landing/Section9'
import { Box } from '@material-ui/system'

const IndexPage = () => {
  return (
    <Box id="top" overflow="hidden" bgcolor="background.paper">
      <Section8 />
      <Section9 />
      <Section2 />
      
      
     { /* <Section3 /> */}
      { /* <Section4 /> */}
      {/* <Section5 /> */}
      <Footer />
      {/* <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer /> */}
    </Box>
  )
}

export default IndexPage
