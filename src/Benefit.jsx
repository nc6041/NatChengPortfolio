import styles from "./style";
import { BenefitHero, BenefitHero2, BenefitWhy } from './components'

const Benefit = () => (
  <div className="w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <BenefitHero />
      </div>
    </div>

    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <BenefitWhy />
      </div>
    </div>

    <div className={`border-b border-dimBlack ddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <BenefitHero2 />
      </div>
    </div>
  </div>
)

export default Benefit;
