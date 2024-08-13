import { benefitdesign, blue, PureGreenHero, uline } from '@/assets'
import PageSection from '@/components/PageSection'
import CaseCard from './CaseCard'

const CaseStudies = () => (
  <PageSection
    id="studies"
    className={`flex flex-col items-center sm:mb-20 mb-6 pt-6`}
  >
    <h2 className="font-medium uppercase xs:text-4xl text-3xl mb-20">
      Case Studies
    </h2>
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
