import {
  beach,
  building,
  firework,
  leaves,
  mayer,
  train,
  secondfloor,
} from '@/assets'
import PageSection from '@/components/PageSection'
import FunkyHeading from '@/components/FunkyHeading'

const imgClassName = 'w-full h-full'
const rowClassName = 'flex flex-col sm:flex-row gap-2'

const Photography = () => {
  return (
    <PageSection id="photography" className="w-full">
      <FunkyHeading>photography</FunkyHeading>

      <div className="flex flex-col items-stretch gap-2">
        <div className={rowClassName}>
          <img src={beach} alt={'beach'} className={imgClassName} />
          <img src={building} alt={'building'} className={imgClassName} />
        </div>
        <div className={rowClassName}>
          <img src={mayer} alt={'mayer'} className={imgClassName} />
          <img src={train} alt={'train'} className={imgClassName} />
          <img src={secondfloor} alt={'secondfloor'} className={imgClassName} />
        </div>
        <div className={rowClassName}>
          <img src={leaves} alt={'leaves'} className={imgClassName} />
          <img src={firework} alt={'firework'} className={imgClassName} />
        </div>
      </div>
      <p className="text-zinc-400 text-2xl mt-3">Shot on iPhone</p>
    </PageSection>
  )
}

export default Photography
