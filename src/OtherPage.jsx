import styles from "./style";
import { Navbar, OW2, FooterLight, Designs, Photography} from "./components";

const OtherPage = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`border-b border-dimBlack ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary border-b border-dimBlack ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <OW2 />
        <Designs />
        <Photography />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <FooterLight />
      </div>
    </div>

  </div>
);

export default OtherPage;
