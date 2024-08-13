import { benefitdesign, blue, PureGreenHero, uline } from '@/assets'
import CaseCard from '@/components/CaseCard'
import PageSection from '@/components/PageSection'

const CaseStudies = () => (
  <PageSection
    id="studies"
    className={`flex flex-row items-center flex-wrap sm:mb-20 mb-6 pt-6`}
  >
    <h2 className="font-work-sans font-medium uppercase xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] mt-0 mb-20">
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
