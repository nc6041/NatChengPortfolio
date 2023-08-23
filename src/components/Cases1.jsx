import styles from "../style";
import { arrowUp, blue } from "../assets";

const Cases1 = () => (
  <section id="lis" className={`flex lg:flex-row flex-col rounded-[20px]`}>
    <div className="flex-1 flex flex-col lg:pl-0 pl-16 lg:pt-0 pt-16">
        <img src={blue} alt={"blue"} className="w-[100%] h-[100%] relative" />    
    </div>
    
    <div className="justify-between flex-1 flex flex-col ml-16">
      <div>
        <h2 className={`${styles.heading3} text-dimBlack mt-5`}>Health & Wellness Chatbot</h2>
        <p className={`${styles.paragraph} text-dimBlack mt-5`}>
          A personalized chat AI to help users find accessible healthcare and wellness options fit for them.
        </p>
        <a href={`${"otherworks"}`} className="text-dimCyan mt-3 flex font-bold">
          View study
          <img src={arrowUp} alt="viewstudy" className="-translate-x-5 w-[70px] h-[18px] rotate-40 mt-1" />
        </a>
      </div>

      <h2 className={`${styles.heading3} text-dimBlack mt-10 mb-5`}>LIS 470: Interaction Design</h2>
    </div>


  </section>
);

export default Cases1;
