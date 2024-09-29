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
        a designer dedicated to making life a little easier.{' '}
        {/* <br className="sm:block hidden" /> */}
      </Text>

      <Text className="max-w-[700px]">
        currently studying information experience design at{' '}
        <b>Pratt Institute</b> <br/>and ranking every lemon tea in New York City.
      </Text>
    </Hero>
    <CaseStudies />
  </Layout>
)

export default Home
