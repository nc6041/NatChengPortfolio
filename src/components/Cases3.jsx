import styles from "../style";
import { arrowUp, medicoin } from "../assets";

const Cases3 = () => (
  <section className={`${styles.flexCenter} lg:flex-row flex-col rounded-[20px]`}>
    <div className="flex-1 flex flex-col lg:pl-0 pl-16 lg:pt-0 pt-16">
        <img src={medicoin} alt={"medicoin"} className="w-[100%] h-[100%] relative" />    
    </div>
    
    <div className="flex-1 flex flex-col ml-16">
      <h2 className={`${styles.heading3} text-dimBlack mt-5`}>Health Goal Tracker</h2>
      <p className={`${styles.paragraph} text-dimBlack mt-5`}>
        A personalized chat AI to help users find accessible healthcare and wellness options fit for them.
      </p>
      <a href={`${"otherworks"}`} className="text-dimCyan mt-3 flex">
        View study
        <img src={arrowUp} alt="viewstudy" className="w-[62px] h-[16px] rotate-40 mt-1" />
      </a>
      <h2 className={`${styles.heading3} text-dimBlack mt-28 mb-10`}>Build 23' Hackathon</h2>
    </div>

  </section>
);

export default Cases3;
