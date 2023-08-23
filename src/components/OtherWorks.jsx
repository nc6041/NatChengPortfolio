import styles from "../style";
import { arrowUp } from "../assets";

const OtherWorks = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col rounded-[20px]`}>
    <div className="flex-1 flex flex-col">
      <h2 className={`${styles.heading3} text-primary`}>Other Works</h2>
      <p className={`${styles.paragraph} text-primary mt-5`}>
        On top of UX design, I enjoy exercising my creativity through various outlets. Although I've
         dabbled in many mediums from drawing and painting to collage and animation, I particularly enjoy
         graphic design and photography. 
      </p>
      <a href={`${"other"}`} className="text-dimCyan font-bold mt-3 flex">
        View other works
        <img src={arrowUp} alt="otherworks" className="-translate-x-5 w-[70px] h-[18px] rotate-40 mt-1" />
      </a>
    </div>

  </section>
);

export default OtherWorks;
