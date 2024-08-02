import styles from "./style";
import { Navbar, FooterLight, About, Skills } from "./components";

const AboutPage = () => (
  <div className="w-full overflow-hidden">
    <Navbar />

    <div className={`border-b border-dimBlack ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <About />
        <Skills />
      </div>
    </div>

    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <FooterLight />
      </div>
    </div>
  </div>
)

export default AboutPage;
