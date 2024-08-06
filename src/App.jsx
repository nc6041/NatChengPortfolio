import styles from "./style";
import { Navbar, OW, Hero, Footer, CaseStudies } from './components'

const App = () => (
  <div className="w-screen overflow-hidden flex flex-col items-stretch">
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
  </div>
)


export default App;
