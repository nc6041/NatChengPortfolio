import Layout from '@/components/Layout'
import Hero from '@/components/Hero'
import CaseStudies from './CaseStudies'
import AccentSpan from '@/components/AccentSpan'
import Text from '@/components/Text'

const Home = () => (
  <Layout>
    <Hero
      title1="Hi, "
      title2="I'm Nat;"
      img="homepage"
      buttonHref="#studies"
      buttonText="View My Work"
      
    >
      <Text className="max-w-[900px] text-xl md:text-xl">
        a UX & Product designer and playful spirit dedicated to creating {' '}
        <br className="sm:block hidden" />
        <b>simple</b> solutions for a <b>complex</b> world.
      </Text>

      <Text className="max-w-[700px]">
        currently studying information experience design at{' '}
        <b>Pratt Institute</b>
      </Text>
    </Hero>
    <CaseStudies />
  </Layout>
)

export default Home
