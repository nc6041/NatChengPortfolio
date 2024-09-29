import intervarsityhero from '@/assets/GiveSiteMockup.png'
import blue from '@/assets/WEMock.png'
import PureGreenHero from '@/assets/PGHero.png'
import uline from '@/assets/uline.png'
import UlineMockup from '@/assets/UlineMockup.png'


import PageSection from '@/components/PageSection'
import CaseCard from './CaseCard'
import Title from '@/components/Title'

const CaseStudies = () => (
  <PageSection
    id="studies"
    className="flex flex-col items-center sm:mb-20 mb-6 pt-6 p-global"
  >
    <Title style="homepage">CASE STUDIES</Title>
    <div className="flex flex-col gap-9">
    <CaseCard
        id="intervarsity"
        title="Give Site: Progress Tracker"
        description="Empowering donors by visualizing fundraising progress to enhance engagement and drive fundraising efforts."
        whatFor="InterVarsity"
        imgSrc={intervarsityhero}
        href="/intervarsity"
      />
      <CaseCard
        id="puregreen"
        title="PureGreen App"
        description="A mobile app that enables users to effortlessly order from PureGreen, a smoothie shop."
        whatFor="Art 575: UX for Graphic Design"
        imgSrc={PureGreenHero}
      />
      <CaseCard
        id="uline"
        title="New Customer Retention"
        description="Rethinking Uline's welcome campaign to keep new customers coming back for more."
        whatFor="Uline Intern Project"
        imgSrc={UlineMockup}
      />
      <CaseCard
        id="wellness"
        title="Health & Wellness Chatbot"
        description="Utilizing AI to make healthcare and wellness personal and accessible to everyone."
        whatFor="LIS 470: Interaction Design"
        imgSrc={blue}
      />

    </div>
  </PageSection>
)

export default CaseStudies
