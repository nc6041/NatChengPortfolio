import styles from "../style";
import { arrowUp, finals } from "../assets";

const WellnessHero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>



      {/* <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}> */}
      <div className={`flex-1 flex-col xl:px-0 sm:px-16 px-6`}>

        <a href={`${"/"}`}>
          <img src={arrowUp} alt="designs" className={`sm:-translate-x-32 -translate-x-12 sm:mt-0 mt-10 mb-10 w-[130px] h-[38px] rotate-220`} />
        </a>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-nohemi font-bold text-start ss:text-[50px] text-[40px] text-dimBlack ss:leading-[100.8px] leading-[75px]">
          Harvest Church App
          </h1>
        </div>

        <p className={`${styles.paragraph} mb-10 w-full`}>
          A single space to access church news, live streams, events, get connected, and more.
        </p>

        <p className={`${styles.paragraph} mb-6 w-full`}>
          <span className="font-bold ">Team:</span>{" "}
          Kevin Lee, Jason Fu, Sangwon Lee, Sam Lu
        </p>

        <p className={`${styles.paragraph} mb-6 w-full`}>
          <span className="font-bold ">My Role:</span>{" "}
          UI/UX Design, Research
        </p>

        <p className={`${styles.paragraph} mb-6 w-full`}>
          <span className="font-bold ">Timeline:</span>{" "}
          July 2023 - Present
        </p>

        <p className={`${styles.paragraph} mb-6 w-full`}>
          <span className="font-bold ">Tools:</span>{" "}
          Figma
        </p>

        <p className={`${styles.paragraph} mb-6 w-full`}>
          I began working on this app after realizing that there is no singular and consistently updated place for Harvest Church's information. Most of the information about events, community group signups, and other things are communicated by word of mouth which can be unreliable and difficult to get a hold of. Getting information about a single thing could mean having to go to multiple people, sites, and social media pages. The app is primarily meant for regular/familiar members of the church to have a place they can confidently rely on to get any information they need.
        </p>

      </div>

    </section>
  );
};

export default WellnessHero;
