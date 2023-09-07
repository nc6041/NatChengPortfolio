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

        <p className={`${styles.paragraph} mb-3 w-full`}>
          Design an app for the Harvest Church community so that members can access all important information in one place.
        </p>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`font-nohemi font-light xs:text-[30px] text-[30px] xs:leading-[76.8px] leading-[66.8px] w-full flex-1 text-dimCyan`}>
            Actionables
          </h1>
        </div>

        <p className={`${styles.paragraph} mb-3 ml-3 text-dimCyan w-full`}>
          1. Understand member pain points and how they obtain information about church news and events.
        </p>

        <p className={`${styles.paragraph} mb-3 ml-3 text-dimCyan w-full`}>
          2. Brainstorm helpful features and prioritize information to display in navigation.
        </p>

        <p className={`${styles.paragraph} mb-3 ml-3 text-dimCyan mb-32 w-full`}>
          3. Design under the current style.
        </p>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`${styles.heading1} flex-1 text-dimCyan`}>
            Research
          </h1>
        </div>

        <p className={`${styles.paragraph} mb-12 w-full`}>
          To kick off this project I started by creating a survey to send out to the church members to better understand the demographic and where they get their information. We got about 25 responses from a variety of life stages.
        </p>

        <p className={`${styles.paragraph} mb-6 w-full`}>
          While looking at the different places that Harvest Church posts their news like their website and Facebook group page, I found that the website already has a lot of the information I was already thinking about including in the app. I added a question to the survey asking if members would prefer and app or a website revamp and why, and to my surprise more people than I expected answered with website.
        </p>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`font-nohemi font-light xs:text-[30px] text-[30px] xs:leading-[76.8px] leading-[66.8px] w-full flex-1 text-dimCyan`}>
            Key Insights
          </h1>
        </div>

        <p className={`${styles.paragraph} mb-3 ml-3 text-dimCyan w-full`}>
          1. {" "}
          <span className="text-dimCyan font-bold ">Convenience</span>
          : People like apps because it's easier to view on mobile on the go or in service versus opening a website that has been built mainly for desktop.
        </p>

        <p className={`${styles.paragraph} mb-3 ml-3 text-dimCyan mb-3 w-full`}>
          2. {" "}
          <span className="text-dimCyan font-bold ">Commitment</span>
          : Apps are too much of a commitment to those who are just checking out the church, it's a lot easier to just send a link. 
        </p>

        <p className={`${styles.paragraph} mb-3 ml-3 text-dimCyan mb-6 w-full`}>
          3. {" "}
          <span className="text-dimCyan font-bold ">Communication</span>
          : It's hard to reach out or communicate with members who don't have or aren't active on social media.
        </p>

        <p className={`${styles.paragraph} mb-6 w-full`}>
          After looking at all the survey answers I realized that both an app and website redesign may be beneficial for recurring members and newcomers, respectively. Currently we are targeting recurring members, but will be looking into targeting newcomers in the future!
        </p>

        <p className={`${styles.paragraph} mb-24 w-full`}>
          As we finish up the research stage, we will begin ideating and brainstorming which pieces of information will be most important to display on the app upfront.
        </p>

      </div>

    </section>
  );
};

export default UlineHero2;
