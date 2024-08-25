import beach from '@/assets/beach.jpg'
import building from '@/assets/building.jpg'
import firework from '@/assets/firework.jpg'
import leaves from '@/assets/leaves.jpg'
import mayer from '@/assets/mayer.jpg'
import train from '@/assets/train.jpg'
import secondfloor from '@/assets/secondfloor.png'

import PageSection from '@/components/PageSection'
import Title from '@/components/Title'
import Text from '@/components/Text'

const imgClassName = 'w-full h-full min-w-0'
const rowClassName = 'flex flex-col sm:flex-row gap-2'

const Photography = () => {
  return (
    <PageSection id="photography" className="w-full">
      <Title style="funky">photography</Title>

      <div className="flex flex-col items-stretch gap-2">
        <div className={rowClassName}>
          <img src={beach} alt="beach" className={imgClassName} />
          <img src={building} alt="building" className={imgClassName} />
        </div>
        <div className={rowClassName}>
          <img src={mayer} alt="mayer" className={imgClassName} />
          <img src={train} alt="train" className={imgClassName} />
          <img src={secondfloor} alt="secondfloor" className={imgClassName} />
        </div>
        <div className={rowClassName}>
          <img src={leaves} alt="leaves" className={imgClassName} />
          <img src={firework} alt="firework" className={imgClassName} />
        </div>
      </div>
      <Text className="text-zinc-400 text-base mt-3">Shot on iPhone</Text>
    </PageSection>
  )
}

export default Photography
