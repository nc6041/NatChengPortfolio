import kasaseoul from '@/assets/kasaseoul.png'
import kasaspring from '@/assets/kasaspring.png'
import worldcup from '@/assets/worldcup.jpg'
// import bobasocial from '@/assets/bobasocial.jpg'
import chasalunar from '@/assets/chasalunar.jpg'
import kirby from '@/assets/kirby.png'
import winteretreat from '@/assets/AAIVWR.png'
import bobasocial from '@/assets/AAIVBS.png'

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
        <Design img={bobasocial} title="AAIV Boba Social" year={2023} />
        <Design img={kasaspring} title="KASA Spring Kickoff" year={2023} />
        <Design img={chasalunar} title="CHASA Lunar New Year" year={2021} />
      </Designs>

      <Designs id="posters" title="posters">
        <Design img={winteretreat} title="AAIV Winter Retreat Flyer" year={2024} />
        <Design img={kirby} title="Kirby SSBU" year={2023} />
        <Design img={worldcup} title="World Cup Qatar x SK" year={2022} />
      </Designs>

      <Photography />
    </div>
  </Layout>
)

export default Other
