import styles from "../style";
import { arrowUp, blue } from "../assets";

const Cases1 = () => (
  <section id="lis" className={`flex lg:flex-row flex-col rounded-[20px]`}>
    <a href={`${"wellness"}`} className="flex-1 flex flex-col lg:pl-0 pl-16 lg:pt-0 pt-16">
        <img src={blue} alt={"blue"} className="w-[100%] h-[100%] relative" />    
    </a>
    
    <div className="justify-between flex-1 flex flex-col ml-16">
      <div>
        <h2 className={`${styles.heading3} text-dimBlack mt-5`}>Health & Wellness Chatbot</h2>
        <p className={`${styles.paragraph} text-dimBlack mt-5`}>
          A personalized chat AI to help users find accessible healthcare and wellness options fit for them.
        </p>
        <a href={`${"wellness"}`}>
          <button type="button" className={`mt-10 py-2 pl-5 pr-7 font-poppins cursor-pointer font-semibold text-[18px] hover:text-dimBlack text-primary rounded-[10px] hover:bg-dimHover bg-dimBlack flex`}>
            View Study
            <svg className="translate-x-2 w-[25px] h-[25x]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
              <path className="stroke-1 stroke-current" fill="#101413" d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"/>
            </svg>
          </button>
        </a>
      </div>

      <h2 className={`${styles.heading3} text-dimBlack mt-10 mb-5`}>LIS 470: Interaction Design</h2>
    </div>


  </section>
);

export default Cases1;
