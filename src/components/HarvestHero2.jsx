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
          Design an app for PureGreen that allows users to conveniently select and order items ahead according to their needs while reinforcing brand identity and appeal.
        </p>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`font-nohemi font-light xs:text-[30px] text-[30px] xs:leading-[76.8px] leading-[66.8px] w-full flex-1 text-dimCyan`}>
            Actionables
          </h1>
        </div>

        <p className={`${styles.paragraph} mb-3 ml-3 text-dimCyan w-full`}>
          1. Define target audience and pain points when using other drink and food apps.
        </p>

        <p className={`${styles.paragraph} mb-3 ml-3 text-dimCyan w-full`}>
          2. Brainstorm helpful features and prioritize information to display in navigation.
        </p>

        <p className={`${styles.paragraph} mb-3 ml-3 text-dimCyan mb-32 w-full`}>
          3. Develop interfaces and prototypes aligned with PureGreen's currently style.
        </p>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`${styles.heading1} flex-1 text-dimCyan`}>
            Research
          </h1>
        </div>

        <p className={`${styles.paragraph} mb-12 w-full`}>
          To kick off this project each team member started by coming up with a set of interview questions that we would later ask to customers inside the store to better understand the demographic of customers and how they have interacted with food and drink ordering apps before. 
        </p>

        <p className={`${styles.paragraph} mb-6 w-full`}>
          We asked typical demographic questions like occupation, age, location on campus, etc. Some additional questions we asked related more to previous experience with apps such as, "What are the factors that influence your decision to order in person or mobile?" or "Walk me through your process of making a mobile order". 
          Questions like these provided us with valuable information and understanding of PureGreen's typical customers and what they might look for in a mobile app.
        </p>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`font-nohemi font-light xs:text-[30px] text-[30px] xs:leading-[76.8px] leading-[66.8px] w-full flex-1 text-dimCyan`}>
            Key Insights
          </h1>
        </div>

        <p className={`${styles.paragraph} mb-3 ml-3 text-dimCyan w-full`}>
          1. {" "}
          <span className="text-dimCyan font-bold ">Convenience</span>
          : People like apps because it's easier to view on mobile on the go versus opening a website that has been built mainly for desktop.
        </p>

        <p className={`${styles.paragraph} mb-3 ml-3 text-dimCyan mb-3 w-full`}>
          2. {" "}
          <span className="text-dimCyan font-bold ">Lifestyle</span>
          : Many customers are busy people who want something quick to get them through the day, but even waiting in the store for the smoothie to be made sometimes took up too much time. Additionally, we found it 
          was also important to customers the ingredients and macronutrients of an item, and they would often compare these things before making a decision.
        </p>

        <p className={`${styles.paragraph} mb-3 ml-3 text-dimCyan mb-6 w-full`}>
          3. {" "}
          <span className="text-dimCyan font-bold ">Familiarity</span>
          : Using a mobile app for ordering allows people to see their order history as well as deals and new items that would not be immediately obvious through the website or unavailable if ordering in person.
        </p>

        <p className={`${styles.paragraph} mb-6 w-full`}>
          After deriving these insights, we created user personas and user journey maps to further explore the minds of our potential users and identify highlights and pain points they might experience while engaging with the app.
        </p>

        {/* <p className={`${styles.paragraph} mb-24 w-full`}>
          As we finish up the research stage, we will begin ideating and brainstorming which pieces of information will be most important to display on the app upfront.
        </p> */}

      </div>

    </section>
  );
};

export default UlineHero2;
