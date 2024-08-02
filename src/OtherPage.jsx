import styles from "./style";
import { Navbar, OW2, Footer, Designs, Photography } from './components'

const OtherPage = () => (
  <div className="w-full overflow-hidden">
    <Navbar />

    <div className={`border-b border-dimBlack ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <OW2 />
        <Designs />
        <Photography />
      </div>
    </div>

    <Footer />
  </div>
)

export default OtherPage;
