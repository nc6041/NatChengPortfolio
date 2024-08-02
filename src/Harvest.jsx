import styles from "./style";
import {
  Navbar,
  Footer,
  HarvestHero,
  HarvestHero2,
  HarvestWhy,
} from './components'

const Harvest = () => (
  <div className="w-full overflow-hidden">
    <Navbar />

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

    <Footer />
  </div>
)

export default Harvest;
