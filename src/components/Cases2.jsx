import styles from "../style";
import { arrowUp, benefitdesign } from "../assets";

const Cases2 = () => (
  <section id="educa11y" className={`flex lg:flex-row flex-col rounded-[20px]`}>

    <div className="justify-between flex-1 flex flex-col mr-16">
      <div>
        <h2 className={`${styles.heading3} text-primary mt-5`}>Digital Accessibility Website</h2>
        <p className={`${styles.paragraph} text-primary mt-5`}>
        Helping non-profits provide education and resources for digital accessibility.
        </p>
        <a href={`${"otherworks"}`} className="text-dimCyan mt-3 flex">
          View study
          <img src={arrowUp} alt="viewstudy" className="-translate-x-5 w-[70px] h-[18px] rotate-40 mt-1" />
        </a>
      </div>

      <h2 className={`${styles.heading3} text-primary mt-10 mb-5`}>educa11y</h2>
    </div>

    <div className="flex-1 flex flex-col lg:pr-0 pr-16 lg:pb-0 pb-16">
        <img src={benefitdesign} alt={"benefitdesign"} className="w-[100%] h-[100%] relative" />    
    </div>

  </section>
);

export default Cases2;
