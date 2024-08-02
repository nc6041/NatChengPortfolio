import styles from "./style";
import { Navbar, Footer, About, Skills } from './components'

const AboutPage = () => (
  <div className="w-full overflow-hidden">
    <Navbar />

    <div className={`border-b border-dimBlack ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <About />
        <Skills />
      </div>
    </div>

    <Footer />
  </div>
)

export default AboutPage;
