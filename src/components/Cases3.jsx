import styles from "../style";
import { arrowUp, medicoin } from "../assets";

const Cases3 = () => (
  <section id="harvest" className={`flex lg:flex-row flex-col rounded-[20px]`}>
    <div className="flex-1 flex flex-col lg:pl-0 pl-16 lg:pt-0 pt-16">
        <img src={medicoin} alt={"medicoin"} className="w-[100%] h-[100%] relative" />    
    </div>

    <div className="justify-between flex-1 flex flex-col ml-16">
      <div>
        <h2 className={`${styles.heading3} text-dimBlack mt-5`}>Harvest Church App</h2>
        <p className={`${styles.paragraph} text-dimBlack mt-5`}>
          Providing a consolidated space for Harvest church members to communicate and obtain information.
        </p>
        <a href={`${"otherworks"}`} className="text-dimCyan mt-3 flex">
          View study
          <img src={arrowUp} alt="viewstudy" className="-translate-x-5 w-[70px] h-[18px] rotate-40 mt-1" />
        </a>
      </div>

      <h2 className={`${styles.heading3} text-dimBlack mt-10 mb-5`}>Harvest Church of Madison</h2>
    </div>

  </section>
);

export default Cases3;
