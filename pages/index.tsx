import Section1 from '@component/home-1/Section1'
import Section12 from '@component/home-1/Section12'
import Section3 from '@component/home-1/Section3'
import Section5 from '@component/home-1/Section5'

//import "@vf-alchemy/vattenfall-design-system/scss/main.scss";
import AppLayout from '@component/layout/AppLayout'


const IndexPage = () => {
  return (
    <AppLayout>
      <Section1 /> 
      <Section12 />
      <Section3 />
      <Section5 />
      <Section12 />
    </AppLayout>
  )
}

export default IndexPage
