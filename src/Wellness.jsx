import styles from "./style";
import {
  WellnessHero,
  WellnessHero2,
  WellnessHero3,
  WellnessWhy,
  WellnessSketchStory,
} from './components'

const Wellness = () => (
  <div className="w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <WellnessHero />
      </div>
    </div>

    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <WellnessWhy />
      </div>
    </div>

    <div className={`${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <WellnessHero2 />
      </div>
    </div>

    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <WellnessSketchStory />
      </div>
    </div>

    <div
      className={`border-b border-dimBlack ${styles.paddingX} ${styles.flexStart}`}
    >
      <div className={`${styles.boxWidth}`}>
        <WellnessHero3 />
      </div>
    </div>
  </div>
)

export default Wellness;
