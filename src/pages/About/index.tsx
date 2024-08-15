import classNames from 'classnames'

import ivIntern from '@/assets/iv-intern.jpg'

import PageSection from '@/components/PageSection'
import Text from '@/components/Text'
import BoldLabeled from '@/components/BoldLabeled'
import Layout from '@/components/Layout'
import Title from '@/components/Title'
import AccentSpan from '@/components/AccentSpan'
import Hero from '@/components/Hero'

import ThingsILoveItem from './ThingsILoveItem'

const About = () => (
  <Layout>
    <Hero
      title1="About "
      title2="Me"
      buttonHref="https://drive.google.com/file/d/1OHuqarcNXapF3gIT-WfRb6nOd6vDGxBq/view"
      buttonText="Resume"
    />

    <div className="flex flex-col gap-24 mb-24">
      <PageSection id="who-is-nat" className="w-full pt-6">
        <Title style="funky">
          Who is <AccentSpan>Nat</AccentSpan>?
        </Title>
        <img
          src={ivIntern}
          alt="Nat Cheng at InterVarsity holding a teddy bear"
          className={classNames(
            'rounded-full my-6',
            'xs:float-right xs:w-1/3 xs:mt-0 xs:mb-4 xs:ml-4',
            'md:w-2/5 md:rounded-3xl md:ml-16',
            'lg:ml-32',
          )}
        />
        <div className="md:text-2xl">
          <Text>
            I'm currently a first-year graduate student pursuing a Master&apos;s
            in <b>information experience design</b> at Pratt Institute in New
            York City. I recently graduated from the University of
            Wisconsin&ndash;Madison with a B.A. in <b>computer science</b> and a
            certificate in <b>graphic design</b>.
          </Text>

          <Text>
            My most recent role was at ULINE as a web design intern where I
            created brand-consistent designs for their web homepage, internal
            platform, and emails to increase user engagement with the site and
            product sales across multiple industries.
          </Text>

          <Text>
            I grew up loving all things creative and was raised in a culture
            that's all about caring for others. In college, I discovered the
            field of user experience design where I fell in love with the
            concept of designing for people. It was the perfect professional
            intersection between my passions and my skills.
          </Text>
        </div>
      </PageSection>

      <PageSection className="w-full md:text-2xl">
        <Title style="funky">
          Tech <AccentSpan>Stack</AccentSpan>
        </Title>
        <BoldLabeled label="Design Tools">
          Figma, Illustrator, InDesign, Photoshop, Lightroom
        </BoldLabeled>
        <BoldLabeled label="Programming">
          Java, Python, HTML, CSS, JavaScript, React
        </BoldLabeled>
        <BoldLabeled label="Things I dabble in">
          Photography, videography, video editing, collage
        </BoldLabeled>
      </PageSection>

      <PageSection className="flex flex-col items-center gap-16 max-w-4xl">
        <Title style="funky">
          <span
            className="font-nat font-normal text-[200px] relative top-6"
            aria-hidden
          >
            ;
          </span>{' '}
          some things i <AccentSpan>love</AccentSpan>
        </Title>

        <div className="flex flex-row gap-24 flex-wrap justify-center">
          <ThingsILoveItem symbol="4" description="graphic design" accent />
          <ThingsILoveItem symbol="3" description="photography" />
          <ThingsILoveItem symbol="1" description="longboarding" accent />
          <ThingsILoveItem symbol="6" description="gaming" />
          <ThingsILoveItem symbol="2" description="stargazing" accent />
          <ThingsILoveItem symbol="7" description="music" />
          <ThingsILoveItem symbol="5" description="scrapbooking" accent />
        </div>
      </PageSection>
    </div>
  </Layout>
)

export default About
