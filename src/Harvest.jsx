import styles from "./style";
import { HarvestHero, HarvestHero2, HarvestWhy } from './components'

const Harvest = () => (
  <div className="w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <HarvestHero />
      </div>
    </div>

    <div className={`${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <HarvestWhy />
      </div>
    </div>

    <div
      className={`border-b border-dimBlack ${styles.paddingX} ${styles.flexStart}`}
    >
      <div className={`${styles.boxWidth}`}>
        <HarvestHero2 />
      </div>
    </div>
  </div>
)

export default Harvest;
