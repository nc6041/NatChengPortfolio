import {
  kasaseoul,
  kasaspring,
  worldcup,
  bobasocial,
  chasalunar,
  kirby,
} from '@/assets'

import Layout from '@/components/Layout'
import DefaultHero from '@/components/DefaultHero'
import Designs from './Designs'
import Photography from './Photography'
import Design from './Design'

const Other = () => (
  <Layout>
    <DefaultHero />

    <div className="flex flex-col gap-24 mb-32">
      <Designs id="designs" title="club designs">
        <Design img={kasaspring} title="KASA Spring Kickoff" year={2023} />
        <Design img={kasaseoul} title="KASA Feed Your Seoul" year={2022} />
        <Design img={chasalunar} title="CHASA Lunar New Year" year={2021} />
      </Designs>

      <Designs id="posters" title="posters">
        <Design img={kirby} title="Kirby" year={2023} />
        <Design img={worldcup} title="World Cup Qatar x SK" year={2022} />
        <Design img={bobasocial} title="AAIV Boba Social Flyer" year={2021} />
      </Designs>

      <Photography />
    </div>
  </Layout>
)

export default Other
