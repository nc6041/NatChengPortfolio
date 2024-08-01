import styles from "./style";
import { Navbar, OW, Hero, FooterLight, CaseStudies, Cases, Cases1, Cases2, Cases3 } from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <Hero />

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <CaseStudies />
      </div>
    </div>

    <div className={`bg-primary pr-0 ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Cases3 />
      </div>
    </div>

    <div className={`bg-primary pl-0 ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Cases />
      </div>
    </div>

    <div className={`bg-primary pr-0 ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Cases1 />
      </div>
    </div>

    <div className={`bg-primary pl-0 ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Cases2 />
      </div>
    </div>

    <div
      className={`bg-primary border-b border-white${styles.paddingX} ${styles.flexCenter}`}
    >
      <div className={`${styles.boxWidth}`}>
        <OW />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <FooterLight />
      </div>
    </div>
  </div>
)

export default App;
