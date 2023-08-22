import styles from "../style";
import { arrowUp, uline } from "../assets";

const Cases = () => (
  <section className={`flex lg:flex-row flex-col rounded-[20px]`}>
    <div className="justify-between flex-1 flex flex-col mr-16">
      <div>
        <h2 className={`${styles.heading3} text-white mt-5`}>New Customer Retention</h2>
        <p className={`${styles.paragraph} text-white mt-5`}>
         Rethinking Uline's welcome campaign to keep new customers coming back for more.
        </p>
        <a href={`${"otherworks"}`} className="text-dimCyan mt-3 flex">
          View study
          <img src={arrowUp} alt="viewstudy" className="-translate-x-5 w-[70px] h-[18px] rotate-40 mt-1" />
        </a>
      </div>

      <h2 className={`${styles.heading3} text-white mt-10 mb-10`}>Uline Intern Project</h2>
    </div>

    <div className="flex-1 flex flex-col lg:pr-0 pr-16 lg:pb-0 pb-16">
        <img src={uline} alt={"uline"} className="w-[100%] h-[100%] relative" />    
    </div>

  </section>
);

export default Cases;
