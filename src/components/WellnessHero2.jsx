import styles from "../style";
import { affinitydiagram, brainstorming } from "../assets";

const UlineHero2 = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 flex-col xl:px-0 sm:px-16 px-6`}>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`${styles.heading2} flex-1 text-dimBlack`}>
            The Goal
          </h1>
        </div>

        <p className={`${styles.paragraph} mb-10 w-full`}>
          Create an app that will help users to understand the importance of health and wellness, as well as find accessible resources to implement it into their lives.
        </p>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`font-nohemi font-light xs:text-[30px] text-[30px] xs:leading-[76.8px] leading-[66.8px] w-full flex-1 text-dimCyan`}>
            Actionables
          </h1>
        </div>

        <p className={`${styles.paragraph} mb-3 ml-3 text-dimCyan w-full`}>
          1. Understand different care routines and opinions on self-care through observational interviews. 
        </p>

        <p className={`${styles.paragraph} mb-3 ml-3 text-dimCyan mb-32 w-full`}>
          2. Design a mobile interface that uses an AI chatbot to give users the most personalized and relative information possible.
        </p>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`${styles.heading1} flex-1 text-dimCyan`}>
            Research
          </h1>
        </div>

        <p className={`${styles.paragraph} mb-6 w-full`}>
          We started our project with conducting 6{" "}
          <span className="text-dimCyan font-bold ">observational studies</span>{" "}
           and{" "}
          <span className="text-dimCyan font-bold ">interviews</span>{" "}
          with people of various ages and backgrounds to gain insight before settling on a main problem statement. During a season of sickness, we decided to evaluate how people take care of themselves. 
        </p>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`font-nohemi font-light xs:text-[30px] text-[30px] xs:leading-[76.8px] leading-[66.8px] w-full flex-1 text-dimCyan`}>
            Some of our interview quesitons:
          </h1>
        </div>

        <p className={`${styles.paragraph} mb-3 ml-3 text-dimCyan w-full`}>
          1. What are some ways that you take care of yourself?
        </p>

        <p className={`${styles.paragraph} mb-3 ml-3 text-dimCyan mb-3 w-full`}>
          2. What is self-care by your definition?
        </p>

        <p className={`${styles.paragraph} mb-3 ml-3 text-dimCyan mb-14 w-full`}>
          3. Do you think self-care is important? Why or why not?
        </p>

        <p className={`${styles.paragraph} mb-32 w-full`}>
          For the observational studies, our participants walked us through their “self-care” activities which ranged from things like their skin-care routine, to a session at the gym together. During the observation activities, we asked the participants to voice out their thoughts and actions while they performed the actions to eliminate any assumptions we may have had during the study.
        </p>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`${styles.heading2} flex-1 text-dimBlack`}>
            Data Collection
          </h1>
        </div>

        <p className={`${styles.paragraph} mb-10 w-full`}>
          We used{" "}
          <span className="text-dimCyan font-bold ">affinity diagramming</span>{" "}
           to organize the data we collected in our interview and observation notes. We used Miro to put single ideas and statements on digital post-it notes and group common thoughts together.
        </p>

        <div className="flex-1 flex flex-col pb-10 lg:px-20 pt-4">
            <img src={affinitydiagram} alt={"affinitydiagram"} className="w-[100%] h-[100%] relative" />    
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`font-nohemi font-light xs:text-[30px] text-[30px] xs:leading-[76.8px] leading-[66.8px] w-full flex-1 text-dimCyan`}>
            Key Insights
          </h1>
        </div>

        <p className={`${styles.paragraph} mb-3 ml-3 text-dimCyan w-full`}>
          1.{" "}
          <span className="text-dimCyan font-bold ">Accessible care</span>
          : We found that it is difficult for people to find accessible avenues to healthcare and wellness. These include things like finding doctors, hobbies to de-stress, managing time to put self-care into their schedule, and more.
        </p>

        <p className={`${styles.paragraph} mb-3 ml-3 text-dimCyan mb-3 w-full`}>
          2.{" "}
          <span className="text-dimCyan font-bold ">Self-care is not a priority</span>
          : Many of our participants did not see self-care as necessary, which most mentioned led to illness and burn out.
        </p>

        <p className={`${styles.paragraph} mb-24 ml-3 text-dimCyan mb-32 w-full`}>
          3.{" "}
          <span className="text-dimCyan font-bold ">Expansion of self-care</span>
          : Many of the participants included mental, emotional, and spiritual care under the umbrella of self-care as opposed to only physical care.
        </p>




        <div className="flex flex-row justify-between items-center w-full mb-10">
          <h1 className={`${styles.heading1} flex-1 text-dimCyan`}>
            Ideation
          </h1>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`${styles.heading2} flex-1 text-dimBlack`}>
            Brainstorming
          </h1>
        </div>

        <p className={`${styles.paragraph} mb-6 w-full`}>
          Using our insights and notes from affinity diagramming we started our{" "}
          <span className="text-dimCyan font-bold ">brainstorming</span>{" "}
          phase with a brain dump of any and all ideas. We put all of our ideas on post it notes and grouped them again similarly to the affinity diagramming. To settle on a few ideas, we used dot voting to select 3 main ideas to focus on. Most of the ideas emphasized personalization to the user because we found that people typically care for themselves in a way that is best suited to their lifestyle.
        </p>

        <div className="flex-1 flex flex-col mb-32 lg:px-20 pt-4">
            <img src={brainstorming} alt={"brainstorming"} className="w-[100%] h-[100%] relative" />    
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`${styles.heading2} flex-1 text-dimBlack`}>
            Sketching + Storyboarding
          </h1>
        </div>

        <p className={`${styles.paragraph} w-full`}>
          Each group member sketched out 3 potential ideas based on the main ideas we selected during brainstorming.
        </p>


      </div>

    </section>
  );
};

export default UlineHero2;
