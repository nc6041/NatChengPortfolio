import benefitdesign from '@/assets/benefitdesign.png'
import blue from '@/assets/blue.png'
import PureGreenHero from '@/assets/PGHero.png'
import uline from '@/assets/uline.png'

import PageSection from '@/components/PageSection'
import CaseCard from './CaseCard'
import Title from '@/components/Title'

const CaseStudies = () => (
  <PageSection
    id="studies"
    className="flex flex-col items-center sm:mb-20 mb-6 pt-6"
  >
    <Title style="homepage">CASE STUDIES</Title>
    <div className="flex flex-col gap-9">
      <CaseCard
        id="puregreen"
        title="PureGreen App"
        description="A mobile app that allows users to smoothly and quickly order from PureGreen, a smoothie shop."
        whatFor="Art 575: UX for Graphic Design"
        imgSrc={PureGreenHero}
      />
      <CaseCard
        id="uline"
        title="New Customer Retention"
        description="Rethinking Uline's welcome campaign to keep new customers coming back for more."
        whatFor="Uline Intern Project"
        imgSrc={uline}
      />
      <CaseCard
        id="wellness"
        title="Health & Wellness Chatbot"
        description="A personalized chat AI to help users find accessible healthcare and wellness options fit for them."
        whatFor="LIS 470: Interaction Design"
        imgSrc={blue}
      />
      <CaseCard
        id="educa11y"
        title="Digital Accessibility Website"
        description="Helping non-profits provide education and resources for digital accessibility."
        whatFor="educa11y"
        imgSrc={benefitdesign}
        href="/benefit"
      />
    </div>
  </PageSection>
)

export default CaseStudies
