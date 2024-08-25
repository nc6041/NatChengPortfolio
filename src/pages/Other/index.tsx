import kasaseoul from '@/assets/kasaseoul.png'
import kasaspring from '@/assets/kasaspring.png'
import worldcup from '@/assets/worldcup.jpg'
import bobasocial from '@/assets/bobasocial.jpg'
import chasalunar from '@/assets/chasalunar.jpg'
import kirby from '@/assets/kirby.png'

import Hero from '@/components/Hero'
import Layout from '@/components/Layout'

import Designs from './Designs'
import Photography from './Photography'
import Design from './Design'

const Other = () => (
  <Layout>
    <Hero
      title1="Other "
      title2="Work"
      buttonHref="#designs"
      buttonText="View Work"
    />

    <div className="flex flex-col gap-24 mb-32">
      <Designs id="designs" title="club designs">
        <Design img={kasaspring} title="KASA Spring Kickoff" year={2023} />
        <Design img={kasaseoul} title="KASA Feed Your Seoul" year={2022} />
        <Design img={chasalunar} title="CHASA Lunar New Year" year={2021} />
      </Designs>

      <Designs id="posters" title="posters">
        <Design img={kirby} title="Kirby SSB" year={2023} />
        <Design img={worldcup} title="World Cup Qatar x SK" year={2022} />
        <Design img={bobasocial} title="AAIV Boba Social Flyer" year={2021} />
      </Designs>

      <Photography />
    </div>
  </Layout>
)

export default Other
