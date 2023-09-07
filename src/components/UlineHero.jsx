import styles from "../style";
import { arrowUp, initialfinaldesign } from "../assets";

const UlineHero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>



      {/* <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}> */}
      <div className={`flex-1 flex-col xl:px-0 sm:px-16 px-6`}>

        <a href={`${"/"}`}>
          <img src={arrowUp} alt="designs" className={`sm:-translate-x-32 -translate-x-12 sm:mt-0 mt-10 mb-10 w-[130px] h-[38px] rotate-220`} />
        </a>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-nohemi font-bold text-start ss:text-[50px] text-[40px] text-dimBlack ss:leading-[100.8px] leading-[75px]">
            Uline New Customer Retention{" "}
          </h1>
        </div>

        <p className={`${styles.paragraph} mb-10 w-full`}>
          Rethinking Uline's welcome campaign by targetting specific industries in
           order to improve new customer retention.
        </p>

        <p className={`${styles.paragraph} mb-6 w-full`}>
          <span className="font-bold ">Team:</span>{" "}
          Uline Creative Interns
        </p>

        <p className={`${styles.paragraph} mb-6 w-full`}>
          <span className="font-bold ">My Role:</span>{" "}
          Web Design, Web Production, UX Design, Print Design
        </p>

        <p className={`${styles.paragraph} mb-6 w-full`}>
          <span className="font-bold ">Timeline:</span>{" "}
          June 2023 - August 2023
        </p>

        <p className={`${styles.paragraph} mb-6 w-full`}>
          <span className="font-bold ">Tools:</span>{" "}
          Adobe Photoshop, Adobe InDesign, VSCode
        </p>

        <p className={`${styles.paragraph} mb-6 w-full`}>
          In the summer of 2023, I worked as a{" "}
          <span className="font-bold text-dimCyan">web design intern</span>{" "}
          at{" "}
          <span className="font-bold text-dimCyan">Uline</span>
          , a shipping and distribution company. My job mainly consisted of designing
            emails, homepage banners, and internal site banners. However, the creative interns
            were also tasked with a project to complete over the couse of 2 months: creating
            a new welcome campaign targeted to a spcific industry to improve new customer
            retention from that industry. I was only required to{" "}
          <span className="font-bold text-dimCyan">design new emails</span>{" "}
          and{" "}
          <span className="font-bold text-dimCyan">landing page banners</span>{" "}
          for the project, but I also took on the role of coding the landing pages and designing
           a print piece since we didn't have a web production or print design intern. I will
           describe the overview and process of this project, but unfortunately, cannot share
           all the specifics.
        </p>

        <div className="flex-1 flex flex-col lg:px-20 lg:pb-0 pb-10 pt-20">
            <img src={initialfinaldesign} alt={"initialfinaldesign"} className="w-[100%] h-[100%] relative" />    
            <p className={`${styles.subtext} mt-5`}>
              Final Designs
            </p>
        </div>

      </div>

    </section>
  );
};

export default UlineHero;
