import styles from "../style";
import { arrowUp, benefitdesign } from "../assets";

const Cases2 = () => (
  <section className={`${styles.flexCenter} lg:flex-row flex-col rounded-[20px]`}>
    <div className="flex-1 flex flex-col mr-16">
      <h2 className={`${styles.heading3} text-white mt-5`}>Digital Accessibility Website</h2>
      <p className={`${styles.paragraph} text-white mt-5`}>
        Helping non-profits provide education and resources for digital accessibility.
      </p>
      <a href={`${"otherworks"}`} className="text-dimCyan mt-3 flex">
        View study
        <img src={arrowUp} alt="viewstudy" className="w-[62px] h-[16px] rotate-40 mt-1" />
      </a>
      <h2 className={`${styles.heading3} text-white mt-28 mb-10`}>educa11y</h2>
    </div>

    <div className="flex-1 flex flex-col lg:pr-0 pr-16 lg:pb-0 pb-16">
        <img src={benefitdesign} alt={"benefitdesign"} className="w-[100%] h-[100%] relative" />    
    </div>

  </section>
);

export default Cases2;
