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
        <a href={`${"benefit"}`}>
          <button type="button" className={`mt-10 py-2 pl-5 pr-7 font-poppins cursor-pointer font-semibold text-[18px] text-dimBlack rounded-[10px] hover:bg-dimHover bg-primary flex`}>
            View Study
            <svg className="translate-x-2 w-[25px] h-[25x]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
              <path className="stroke-1 stroke-current" fill="#101413" d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"/>
            </svg>
          </button>
        </a>
      </div>

      <h2 className={`${styles.heading3} text-primary mt-10 mb-5`}>educa11y</h2>
    </div>

    <a href={`${"benefit"}`} className="flex-1 flex flex-col lg:pr-0 pr-16 lg:pb-0 pb-16">
        <img src={benefitdesign} alt={"benefitdesign"} className="w-[100%] h-[100%] relative" />    
    </a>

  </section>
);

export default Cases2;
