import styles from "../style";
import { arrowUp, PGFinals } from "../assets";

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
            PureGreen App
          </h1>
        </div>

        <p className={`mb-10 w-full`}>
          A simple way to view, compare, and order items from PureGreen.
        </p>

        <p className={`mb-6 w-full`}>
          <span className="font-bold ">Team:</span> Atilano Escobar, Caroline
          Marx, Jamie Wolfson
        </p>

        <p className={`mb-6 w-full`}>
          <span className="font-bold ">My Role:</span> Team Lead, UI/UX Design,
          Research
        </p>

        <p className={`mb-6 w-full`}>
          <span className="font-bold ">Timeline:</span> September 2023 -
          December 2023
        </p>

        <p className={`mb-6 w-full`}>
          <span className="font-bold ">Tools:</span> Figma
        </p>

        <p className={`mb-6 w-full`}>
          In the 2023 fall semester, I enrolled in a class called User
          Experience for Graphic Design which allowed graphic design students to
          explore the field of UX. In the beginning of a class, each team picked
          a local coffee or smoothie shop to design an app for and we took off.
          My team was tasked with creating an app for PureGreen, a new smoothie
          shop in town. Although PureGreen is a chain, it does not have an app
          yet. Stepping through each phase of the design process, our team
          identified a natural user base, pain points, and possible solutions.
          We finished the semester with working prototypes of our app, following
          a task flow for a pre-identified user persona.
        </p>

        <div className="flex-1 flex flex-col lg:px-20 pt-20">
          <img
            src={PGFinals}
            alt={'puregreen finals'}
            className="w-[100%] h-[100%] relative"
          />
        </div>
      </div>
    </section>
  )
};

export default WellnessHero;
