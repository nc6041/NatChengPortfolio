import styles from "../style";
import { paperprototype, taskflows, wireframes, video1, video2, video3 } from "../assets";

const UlineHero2 = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 flex-col xl:px-0 sm:px-16 px-6`}>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`${styles.heading2} flex-1 text-dimBlack`}>
            Final Decision
          </h1>
        </div>

        <p className={`${styles.paragraph} mb-10 w-full`}>
        We decided on creating an{" "}
          <span className="text-dimCyan font-bold ">AI assistant</span>{" "}
          that will help with all of the issues we found in our research including time management, accessibility, and healthcare. As AI is becoming increasingly prominent in our world and personal lives, we thought a chatbot was the most effective solution to being able to answer more specific questions from the user and addressed our problem statement.
        </p>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`font-nohemi font-light xs:text-[30px] text-[30px] xs:leading-[76.8px] leading-[66.8px] w-full flex-1 text-dimCyan`}>
            App Solutions
          </h1>
        </div>

        <p className={`${styles.paragraph} mb-3 ml-3 text-dimCyan w-full`}>
          1. Allows user to find doctors, specialists, classes, and more, that are perfectly fit to the users' needs by the user answering questions (e.g. male or female doctor, insurance, etc.). 
        </p>

        <p className={`${styles.paragraph} mb-3 ml-3 text-dimCyan w-full`}>
          2. AI will allow the user to automatically schedule the activities it recommends. 
        </p>

        <p className={`${styles.paragraph} mb-3 ml-3 text-dimCyan mb-32 w-full`}>
          3. The user can save and favorite activities that they participated in and enjoyed or want to view at a later date.
        </p>
        
        <div className="flex flex-row justify-between items-center w-full mb-10">
          <h1 className={`${styles.heading1} flex-1 text-dimCyan`}>
            Prototyping
          </h1>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`${styles.heading2} flex-1 text-dimBlack`}>
            Paper Prototyping
          </h1>
        </div>

        <p className={`${styles.paragraph} mb-6 w-full`}>
        To visualize what our design could end up looking like we made{" "}
        <span className="text-dimCyan font-bold ">paper prototypes</span>{" "}
        to{" "}
        <span className="text-dimCyan font-bold ">test</span>{" "}
        the design quickly and with low time commitment. We instructed participants to find a new doctor and schedule an appointment with them using the prototypes. We also had them voice out again their thought process as well as any feedback they had about using the prototype.
        </p>

        <div className="flex-1 flex flex-col lg:px-20 pt-20 mb-32">
            <img src={paperprototype} alt={"paperprototype"} className="w-[100%] h-[100%] relative" />    
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`${styles.heading2} flex-1 text-dimBlack`}>
            Task Flows
          </h1>
        </div>

        <p className={`${styles.paragraph} mb-6 w-full`}>
          We began digital prototyping by creating{" "}
          <span className="text-dimCyan font-bold ">task flows</span>{" "}
          and blocking out basic elements for the screens that would be needed to complete 3 different tasks.
        </p>

        <div className="flex-1 flex flex-col lg:px-20 pt-20 mb-32">
            <img src={taskflows} alt={"taskflows"} className="w-[100%] h-[100%] relative" />    
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`${styles.heading2} flex-1 text-dimBlack`}>
            Wireframes
          </h1>
        </div>

        <p className={`${styles.paragraph} mb-6 w-full`}>
          We created{" "}
          <span className="text-dimCyan font-bold ">low fidelity prototypes</span>{" "}
          of the previous task flow screens using actual icons, text, image placeholders, and components. The wireframes included interfaces that allow the user to quickly and easily add recommended activities and healthcare options to their schedules that would sync to the user's calendar.
        </p>

        <div className="flex-1 flex flex-col lg:px-20 pt-20 pb-24">
            <img src={wireframes} alt={"wireframes"} className="w-[100%] h-[100%] relative" />    
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`${styles.heading2} flex-1 text-dimBlack`}>
            Interactive Mockups
          </h1>
        </div>

        <p className={`${styles.paragraph} mb-10 w-full`}>
          After some revision we turned the low-level details into{" "}
          <span className="text-dimCyan font-bold ">high-fidelity wireframes</span>
          , implementing a color palette, text styles, logos, actual images, and more components. Our designs changed a bit with the menu bar initially being blue, but we changed it to pink and white to simplify the design. We also changed our info boxes and buttons to match throughout the app, as there were different styles of the same element across multiple screens. This helps the user{" "}
          <span className="text-dimCyan font-bold ">draw on past experiences</span>
          , like filling out the login boxes, to fill out boxes in the future such as insurance info.
        </p>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`${styles.heading2} flex-1 text-dimBlack`}>
            Flow 1: Onboard and Customization
          </h1>
        </div>

        <p className={`${styles.paragraph} mb-6 w-full`}>
          Users can easily create an account by entering their email and a password, or by using Google, Facebook, or Apple. The process is straightforward and quick so users can start chatting right away. We also included a feature for users to customize their AI to make it friendlier and easier to talk to.
        </p>

        <div className="flex-1 flex flex-col pb-32 pt-4">
          <video autoPlay loop muted playsInline>
            <source src={video1} alt={"video1"} className="w-[100%] h-[100%] relative" type="video/mp4"/>    
          </video>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`${styles.heading2} flex-1 text-dimBlack`}>
            Flow 2: Getting Help
          </h1>
        </div>

        <p className={`${styles.paragraph} mb-6 w-full`}>
          The recommended chat feature allows users to quickly find resources without even having to type. The personalized bot helps users find specialists that are perfect for them and users can explore, save, or even book appointments with the suggestions with just a few taps. 
        </p>

        <div className="flex-1 flex flex-col pb-32 pt-4">
          <video autoPlay loop muted playsInline>
            <source src={video2} alt={"video2"} className="w-[100%] h-[100%] relative" type="video/mp4"/>    
          </video>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`${styles.heading2} flex-1 text-dimBlack`}>
            Flow 3: Personal Info
          </h1>
        </div>

        <p className={`${styles.paragraph} mb-6 w-full`}>
          The profile section is what allows the chat bot to understand the user quickly and target their needs perfectly. Users can fill out their personal information such as insurance that lets them get exactly what they need, when they need it.
        </p>

        <div className="flex-1 flex flex-col pb-56 pt-4">
          <video autoPlay loop muted playsInline>
            <source src={video3} alt={"video3"} className="w-[100%] h-[100%] relative" type="video/mp4"/>    
          </video>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`${styles.heading1} flex-1 text-dimCyan`}>
            Reflection
          </h1>
        </div>

        <p className={`${styles.paragraph} mb-24 w-full`}>
          Looking back, this project has given me a strong grasp of how users and apps interact. Guided by established design heuristics, I was able to design an app to help people learn and integrate healthier habits into their lives. Testing our prototypes with users trying out different tasks was invaluable - they pointed out things we hadn't even considered, allowing us to improve our design before even really starting. I would have liked to test our high-fidelity mockups as well if time allowed, however my team and I were still able to create a design we can really be proud of.
        </p>

      </div>

    </section>
  );
};

export default UlineHero2;
