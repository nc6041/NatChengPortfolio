import styles from '../style'
import { arrowUp } from '../assets'

const OtherWork = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col rounded-[20px]`}
  >
    <div className="flex-1 flex flex-col ">
      <h2 className={`text-dimBlack`}>Other Work</h2>
      <p className={`text-dimBlack mt-5`}>
        On top of UX design, I enjoy exercising my creativity through various
        outlets. Although I've dabbled in many mediums from drawing and painting
        to collage and animation, I particularly enjoy graphic design and
        photography.
      </p>
      <a href={`${'other'}`} className="text-malibu-300 font-bold mt-3 flex">
        View other work
        <img
          src={arrowUp}
          alt="otherwork"
          className="-translate-x-5 w-[70px] h-[18px] rotate-40 mt-1"
        />
      </a>
    </div>
  </section>
)

export default OtherWork
