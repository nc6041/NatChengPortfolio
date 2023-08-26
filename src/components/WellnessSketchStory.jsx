import styles from "../style";
import { sketch, storyboard } from "../assets";

const UlineWhy = () => {
  return (
    <section className={`flex lg:flex-row flex-col ${styles.paddingY}`}>
        <div className="basis-2/5 flex flex-col pb-10 xl:pr-3 lg:pr-3 lg:pl-16 xl:px-0 sm:px-16 px-6">
            <img src={sketch} alt={"sketch"} className="h-[100%] w-[100%] relative" />    
          </div>

          <div className="basis-3/5 flex flex-col pb-10 xl:px-0 lg:pr-16 lg:px-0 sm:px-16 px-6">
            <img src={storyboard} alt={"storyboard"} className="h-[100%] w-[100%] relative" />    
          </div>

    </section>
  );
};

export default UlineWhy;