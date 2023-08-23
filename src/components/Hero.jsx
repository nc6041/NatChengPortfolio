import styles from "../style";
import { arrowUp } from "../assets";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} mb-80`}>
      <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-nohemi font-bold text-center ss:text-[72px] text-[60px] text-dimBlack ss:leading-[100.8px] leading-[75px]">
            i'm{" "}
            <span className="text-dimCyan">nat</span>,
          </h1>
        </div>

        <p className={`${styles.paragraphCenterMedium} max-w-[600px] mt-10`}>
          a UX designer dedicated to creating{" "}
          <span className="text-dimCyan font-bold ">simple</span>{" "}
          solutions <br className="sm:block hidden" />for a{" "}
          <span className="text-dimCyan font-bold ">complex</span>{" "}
          world.
        </p>

        <p className={`${styles.paragraphCenter} max-w-[700px] mt-7`}>
          currently studying computer science & graphic design at UW-Madison
          {/* <span className="text-dimCyan">.</span>{" "} */}
        </p>
        
        <a href={`#${"studies"}`} className="mt-32">
          <img src={arrowUp} alt="studies" className="w-[124px] h-[32px] rotate-130 mt-20" />
        </a>

      </div>

    </section>
  );
};

export default Hero;
