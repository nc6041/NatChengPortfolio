import styles from "../style";
import { Frame4, Frame7, PGfinalwireframes, PGsketches, PGwireframes, Style, PGmocks, PGallmocks, PGDemo, } from "../assets";

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

        <p className={`${styles.paragraph} mb-32 w-full`}>
          After deriving these insights, we created user personas and user journey maps to further explore the minds of our potential users and identify highlights and pain points they might experience while engaging with the app.
        </p>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`${styles.heading2} flex-1 text-dimBlack`}>
            User Personas
          </h1>
        </div>

        <p className={`${styles.paragraph} mb-10 w-full`}>
          We created four{" "}
          <span className="text-dimCyan font-bold ">user personas</span>{" "}
          to help us visualize our target audience, including basic demographic information as well as a short bio, their core needs, and frustrations with other apps and ordering in person. We took each persona's needs into account, but ultimately focused in on one persona, Suzie, to base the rest of our flows on.
        </p>

        <div className="flex-1 flex flex-col pb-10 lg:px-20 pt-4">
            <img src={Frame7} alt={"userpersonas"} className="w-[100%] h-[100%] relative" />    
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`${styles.heading2} flex-1 text-dimBlack`}>
            User Journey Maps
          </h1>
        </div>

        <p className={`${styles.paragraph} mb-10 w-full`}>
          After drafting our personas, we created {" "}
          <span className="text-dimCyan font-bold ">user journey maps</span>{" "}
          for each of them to track their feelings throughout the possible app ordering process. Our journey map stages consisted of the sections awareness & needs, consideration, acquisition, and service & loyalty.
          For each stage we noted the steps, thoughts, actions, pain points and feelings, and opportunities for growth in the app.
        </p>

        <div className="flex-1 flex flex-col pb-10 lg:px-20 pt-4 mb-24">
            <img src={Frame4} alt={"userjourneymaps"} className="w-[100%] h-[100%] relative" />    
        </div>

        <div className="flex flex-row justify-between items-center w-full mb-10">
          <h1 className={`${styles.heading1} flex-1 text-dimCyan`}>
            Ideation
          </h1>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`${styles.heading2} flex-1 text-dimBlack`}>
            Sketching
          </h1>
        </div>

        <p className={`${styles.paragraph} mb-6 w-full`}>
          Using our insights and notes from personas and journey maps we started a timed{" "}
          <span className="text-dimCyan font-bold ">sketching</span>{" "}
          exercise to visuzlize possible solutions for our app. The short time span allowed us to get our ideas on paper without worrying about nitty-gritty details and helped us think about bigger picture ideas. To narrow things down,
          each classmate taped their sketches for their respective apps to a wall and we were given the opportunity to participate in{" "}
          <span className="text-dimCyan font-bold ">dot voting</span>{" "}to pick our favorite sketches.
        </p>
        <div className="flex-1 flex flex-col pb-10 lg:px-20 pt-4 mb-24">
            <img src={PGsketches} alt={"sketches"} className="w-[100%] h-[100%] relative" />    
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`${styles.heading2} flex-1 text-dimBlack`}>
            Wireframing
          </h1>
        </div>

        <p className={`${styles.paragraph} mb-10 w-full`}>
        Following the sketching, we moved into the{" "}
        <span className="text-dimCyan font-bold">wireframing</span>{" "}
        phase to generate even more ideas. Over the span of a few classes, each team member was given 45 minutes to develop about eight low-fidelity wireframes for 3 screens: the dashboard, menu, and checkout pages. After creating these wireframe sets, we would
        consolidate as a team and narrow down the designs we liked best, as well as design any other necessary screens for the task of placing an order.
        </p>

        <p className={`${styles.paragraph} mb-10 w-full`}>
        The following image shows the wireframes we narrowed down togethers from our sets. The first row, from left to right, contains a splash screen, two dashboard options, and one menu screen.
        The second row contains the second menu option, two checkout/order placed options, and an order completed screen.
        </p>
        <div className="flex-1 flex flex-col pb-10 lg:px-20 pt-4 mb-24">
            <img src={PGwireframes} alt={"wireframes"} className="w-[100%] h-[100%] relative" />    
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`${styles.heading2} flex-1 text-dimBlack`}>
            Continuing Wireframes
          </h1>
        </div>

        <p className={`${styles.paragraph} mb-10 w-full`}>
          After narrowing down our options, we polished these wireframes and created new{" "} 
          <span className="text-dimCyan font-bold">high-fidelity wireframes</span>.{" "} We also added new screens like product detail pages as well as implementing small styles like buttons and fonts.
          Additionally, we created overlay screens such as "item added" overlays to implement feedback to the user when they add an item, giving them confirmation instead of leaving them wondering if they added an item or not. 
          Our most important features from the wireframes lie in the dashboard, menu, and item detail pages.

        </p>
        <p className={`${styles.paragraph} mb-10 w-full`}>         
          The dashboard has hero shots and would contain different specials, announcements, and more, so that a user can easily see these things right when they open the app. The menu page allows users to
          expand each item into a card containing more nutrition facts and details about an item to minimize the time it takes to navigate to an item page, back out, and to another item page to compare ingredients and nutrition.
          The item detail page contains expandable information that goes much more in depth into the item. It has a full item description, an expandable ingredient list, an expandable customizations list with toggle switches, and 
          another expandable extended information section. This way the user only needs to see exactly what they want and can pry further if necessary.
        </p>
        <div className="flex-1 flex flex-col pb-10 lg:px-20 pt-4 mb-16">
            <img src={PGfinalwireframes} alt={"finalwireframes"} className="w-[100%] h-[100%] relative" />    
        </div>

        <div className="flex flex-row justify-between items-center w-full mb-10">
          <h1 className={`${styles.heading1} flex-1 text-dimCyan`}>
            Prototyping
          </h1>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`${styles.heading2} flex-1 text-dimBlack`}>
            Typography & Colors
          </h1>
        </div>

        <p className={`${styles.paragraph} mb-10 w-full`}>
          To start the prototyping stage, we began by implementing a style guide with colors and type. We chose typefaces that mimicked the ones on PureGreen's site and logo. 
          The colors also were taken from their website to promote brand identity and familiarity between the website and app. We finished off the prototypes by creating linkages and animations to turn
          our designs into a{" "}<span className="text-dimCyan font-bold">useable prototype</span>.{" "}
        </p>

        <div className="flex-1 flex flex-col pb-10 lg:px-20 pt-4 mb-24">
            <img src={Style} alt={"style"} className="w-[100%] h-[100%] relative" />    
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`${styles.heading2} flex-1 text-dimBlack`}>
            In-Depth Glance
          </h1>
        </div>

        <p className={`${styles.paragraph} mb-10 w-full`}>
          The mockups below offer some more in-depth descriptions on specific features of the app in some of our more important screens.
        </p>
        <div className="flex-1 flex flex-col pb-10 lg:px-20 pt-4 mb-24">
            <img src={PGmocks} alt={"mocks"} className="w-[100%] h-[100%] relative" />    
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`${styles.heading2} flex-1 text-dimBlack`}>
            Final Designs & Prototype
          </h1>
        </div>
        <div className="flex-1 flex flex-col pb-56 pt-4">
          <video autoPlay loop muted playsInline>
            <source src={PGDemo} alt={"PGDemo"} className="w-[100%] h-[100%] relative" type="video/mp4"/>    
          </video>
        </div>
        <div className="flex-1 flex flex-col pb-10 lg:px-20 pt-4 mb-24">
            <img src={PGallmocks} alt={"mocks"} className="w-[100%] h-[100%] relative" />    
        </div>

        <div className="flex flex-row justify-between items-center w-full mb-10">
          <h1 className={`${styles.heading1} flex-1 text-dimCyan`}>
            Reflection
          </h1>
        </div>

        <p className={`${styles.paragraph} mb-10 w-full`}>
          This project was a more unique process for me, as the team dynamic was slightly different than I have experienced before. The class is targeted towards graphic designers, so my team members
          did not have previous exposure to user experience design or Figma. Therefore, this case study had a bit of a learning curve for all of us. I guided the team through our different exercises and taught them
          how to use Figma. Each of the team members came with different skills, so it was up to me to delegate tasks that best fit each of them. I was privileged to be on a team with quick learners, as we were able to
          finish each step of the design process in a timely manner without too much difficulty.
        </p>

        <p className={`${styles.paragraph} mb-10 w-full`}>
          The more difficult part of the process for me was trying to coordinate four different design styles into one. As shown in the wireframes, we each have vastly different design styles, so when we were splitting up
          the final designs, we had to go through and make small changes to make sure the end designs were all cohesive and matched the original PureGreen style.
        </p>
        <p className={`${styles.paragraph} mb-10 w-full`}>
          In the end, this project was extremely valuable, as it taught me collaborative skills such as team leading and communication that I haven't had the opportunity to pick up
          in other projects. If we had more time, I would definitely like to test the app with more people or even ask PureGreen about the app and further consolidate with them.
        </p>

      </div>

    </section>
  );
};

export default UlineHero2;
