import styles from "./style";
import { Navbar, FooterLight, About, Skills } from "./components";

const AboutPage = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary border-b border-dimBlack ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <About />
        <Skills />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <FooterLight />
      </div>
    </div>
  </div>
)

export default AboutPage;
