import styles from "../style";
import { arrowUp, finals } from "../assets";

const WellnessHero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      {/* <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}> */}
      <div className={`flex-1 flex-col xl:px-0 sm:px-16 px-6`}>
        <a href={`${'/'}`}>
          <img
            src={arrowUp}
            alt="designs"
            className={`sm:-translate-x-32 -translate-x-12 sm:mt-0 mt-10 mb-10 w-[130px] h-[38px] rotate-220`}
          />
        </a>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-nohemi font-bold text-start ss:text-[50px] text-[40px] ss:leading-[100.8px] leading-[75px]">
            LIS 470: Interaction Design Case Study
          </h1>
        </div>

        <p className={`mb-10 w-full`}>
          Using AI to provide resources and education for accessible healthcare
          and wellness options for every kind of person.
        </p>

        <p className={`mb-6 w-full`}>
          <span className="font-bold ">Team:</span> Emma Freisberg, Megan Wu
        </p>

        <p className={`mb-6 w-full`}>
          <span className="font-bold ">My Role:</span> UI/UX Design
        </p>

        <p className={`mb-6 w-full`}>
          <span className="font-bold ">Timeline:</span> February 2023 - May 2023
        </p>

        <p className={`mb-6 w-full`}>
          <span className="font-bold ">Tools:</span> Figma, Miro
        </p>

        <p className={`mb-6 w-full`}>
          During my spring 2023 semester I took a class called Interaction
          Design Studio where we learned about the design process, user research
          techniques, design principles, and more. We spent the semester
          defining and solving a problem that we would discover through
          interviews with a wide demographic of people. We walked through each
          step of the design process and finished the project with 9 mockup app
          interfaces that solved the problem we initially defined.
        </p>

        <div className="flex-1 flex flex-col lg:px-20 pt-20">
          <img
            src={finals}
            alt={'finals'}
            className="w-[100%] h-[100%] relative"
          />
        </div>
      </div>
    </section>
  )
};

export default WellnessHero;
