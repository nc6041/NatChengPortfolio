import styles from "../style";
import { sketch, storyboard } from "../assets";

const UlineWhy = () => {
  return (
    <section className={`flex lg:flex-row flex-col ${styles.paddingY}`}>
        <div className="flex-1 flex flex-col pb-10 sm:pr-3 pr-0">
            <img src={sketch} alt={"sketch"} className="w-[100%] h-[100%] relative" />    
          </div>

          <div className="flex-1 flex flex-col pb-10">
            <img src={storyboard} alt={"storyboard"} className="w-[100%] h-[100%] relative" />    
          </div>

    </section>
  );
};

export default UlineWhy;