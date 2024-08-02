import styles from "./style";
import { Navbar, FooterLight, UlineHero, UlineHero2, UlineWhy } from "./components";

const Uline = () => (
  <div className="w-full overflow-hidden">
    <Navbar />

    <div className={`${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <UlineHero />
      </div>
    </div>

    <div className={`${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <UlineWhy />
      </div>
    </div>

    <div
      className={`border-b border-dimBlack ${styles.paddingX} ${styles.flexStart}`}
    >
      <div className={`${styles.boxWidth}`}>
        <UlineHero2 />
      </div>
    </div>

    <div className={`${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <FooterLight />
      </div>
    </div>
  </div>
)

export default Uline;
