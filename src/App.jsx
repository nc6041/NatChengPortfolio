import styles from "./style";
import { Navbar, OW, Hero, Footer, CaseStudies, Cases, Cases1, Cases2, Cases3 } from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`border-b border-dimBlack ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <CaseStudies />
      </div>
    </div>

    <div className={`bg-black pl-16 ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Cases />
      </div>
    </div>

    <div className={`bg-primary pr-16 ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Cases1 />
      </div>
    </div>

    <div className={`bg-black pl-16 ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Cases2 />
      </div>
    </div>

    <div className={`bg-primary pr-16 ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Cases3 />
      </div>
    </div>

    <div className={`bg-black border-b border-white ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <OW />
      </div>
    </div>

    <div className={`bg-black ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>

  </div>
);

export default App;
