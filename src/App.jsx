import styles from "./style";
import { Navbar, OW, Hero, Footer, CaseStudies } from './components'

const App = () => (
  <>
    <Navbar />

    <Hero />

    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <CaseStudies />
      </div>
    </div>

    <div
      className={`border-b border-white${styles.paddingX} ${styles.flexCenter}`}
    >
      <div className={`${styles.boxWidth}`}>
        <OW />
      </div>
    </div>

    <Footer />
  </>
)


export default App;
