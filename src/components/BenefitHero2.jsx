import styles from "../style";
import { companalysis, userpersonas, userjourneymap1, userjourneymap2, home, about, services, resource, volunteers, contactus, donate } from "../assets";

const UlineHero2 = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div className={`flex-1 flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`${styles.heading2} flex-1 text-dimBlack`}>
            The Goal
          </h1>
        </div>

        <p className={`${styles.paragraph} mb-10 w-full`}>
          Redesign the current website that includes organization overview,
          donations, volunteer signups, services, and a contact form using the
          new brand style guidelines.
        </p>

        <div className="flex flex-row justify-between items-center w-full">
          <h1
            className={`font-nohemi font-light xs:text-[30px] text-[30px] xs:leading-[76.8px] leading-[66.8px] w-full flex-1 text-malibu-300`}
          >
            Actionables
          </h1>
        </div>

        <p className={`${styles.paragraph} mb-3 ml-3 text-malibu-300 w-full`}>
          1. Perform research to understand possible users and their pain
          points.
        </p>

        <p
          className={`${styles.paragraph} mb-3 ml-3 text-malibu-300 mb-3 w-full`}
        >
          2. Map user journey flows and conduct competitive analysis to better
          understand the market.
        </p>

        <p
          className={`${styles.paragraph} mb-44 ml-3 text-malibu-300 mb-3 w-full`}
        >
          3. Learn and iterate on designs as the design process proceeds.
        </p>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`${styles.heading1} flex-1 text-malibu-300`}>
            Research & Empathy
          </h1>
        </div>

        <p className={`${styles.paragraph} mb-6 w-full`}>
          Our research/empathy stage was broken into 3 parts. Some team members
          conducted competitive analysis to identify the strengths and
          weaknesses of competitors in order to develop strategies to improve
          educa11y products. Others worked on user personas to look at what kind
          of users would be using the site.
        </p>

        <p className={`${styles.paragraph} mb-36 w-full`}>
          Another team member and I were in charge of creating user journey maps
          to better understand how users will interact with the site. We
          highlighted pain points and ways people would use the site to enhance
          their experience and target their needs.
        </p>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`${styles.heading2} flex-1 text-dimBlack`}>
            Competitive Analysis
          </h1>
        </div>

        <div className="flex-1 flex flex-col pb-32 pt-6">
          <img
            src={companalysis}
            alt={'companalysis'}
            className="w-[100%] h-[100%] relative"
          />
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`${styles.heading2} flex-1 text-dimBlack`}>
            User Personas
          </h1>
        </div>

        <div className="flex-1 flex flex-col pb-32 pt-6">
          <img
            src={userpersonas}
            alt={'userpersonas'}
            className="w-[100%] h-[100%] relative"
          />
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`${styles.heading2} flex-1 text-dimBlack`}>
            User Journey Maps
          </h1>
        </div>

        <div className="flex-1 flex flex-col pb-10 pt-6">
          <img
            src={userjourneymap1}
            alt={'userjourneymap1'}
            className="w-[100%] h-[100%] relative"
          />
        </div>

        <div className="flex-1 flex flex-col pb-32 pt-6">
          <img
            src={userjourneymap2}
            alt={'userjourneymap2'}
            className="w-[100%] h-[100%] relative"
          />
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`${styles.heading1} flex-1 text-malibu-300`}>
            Ideation & Prototype
          </h1>
        </div>

        <p className={`${styles.paragraph} mb-32 w-full`}>
          Following our research and after some discussion with the stakeholder
          we moved on to the creation of the wireframes. Together we decided on
          a general style guide for the site and created our wireframes under
          that.
        </p>

        <div className="flex flex-row justify-between items-center w-full">
          <h1
            className={`${styles.heading2} flex justify-center text-dimBlack`}
          >
            Home Page
          </h1>
        </div>

        <div className="flex-1 flex flex-col pb-32 pt-6 lg:px-64 px-0">
          <img src={home} alt={'home'} className="w-[100%] h-[100%] relative" />
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1
            className={`${styles.heading2} flex justify-center text-dimBlack`}
          >
            About
          </h1>
        </div>

        <div className="flex-1 flex flex-col pb-32 pt-6 lg:px-64 px-0">
          <img
            src={about}
            alt={'about'}
            className="w-[100%] h-[100%] relative"
          />
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1
            className={`${styles.heading2} flex justify-center text-dimBlack`}
          >
            Services
          </h1>
        </div>

        <div className="flex-1 flex flex-col pb-32 pt-6 lg:px-64 px-0">
          <img
            src={services}
            alt={'services'}
            className="w-[100%] h-[100%] relative"
          />
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1
            className={`${styles.heading2} flex justify-center text-dimBlack`}
          >
            Resources
          </h1>
        </div>

        <div className="flex-1 flex flex-col pb-32 pt-6 lg:px-64 px-0">
          <img
            src={resource}
            alt={'resource'}
            className="w-[100%] h-[100%] relative"
          />
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1
            className={`${styles.heading2} flex justify-center text-dimBlack`}
          >
            Volunteers
          </h1>
        </div>

        <div className="flex-1 flex flex-col pb-32 pt-6 lg:px-64 px-0">
          <img
            src={volunteers}
            alt={'volunteers'}
            className="w-[100%] h-[100%] relative"
          />
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1
            className={`${styles.heading2} flex justify-center text-dimBlack`}
          >
            Contact
          </h1>
        </div>

        <div className="flex-1 flex flex-col pb-32 pt-6 lg:px-64 px-0">
          <img
            src={contactus}
            alt={'contactus'}
            className="w-[100%] h-[100%] relative"
          />
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1
            className={`${styles.heading2} flex justify-center text-dimBlack`}
          >
            Donate
          </h1>
        </div>

        <div className="flex-1 flex flex-col pb-32 pt-6 lg:px-64 px-0">
          <img
            src={donate}
            alt={'donate'}
            className="w-[100%] h-[100%] relative"
          />
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`${styles.heading1} flex-1 text-malibu-300`}>
            Reflection
          </h1>
        </div>

        <p className={`${styles.paragraph} mb-24 w-full`}>
          Despite losing contact with my team and stakeholder, this was still an
          amazing learning experience as my first time going through the design
          process on an actual project. I learned important techniques in
          empathizing with users like making user journey maps and working with
          user personas for the first time, as well as how to work with other
          designers in a remote setting. Ideally I would have liked to finish up
          the project with the stakeholder, but the project was still a valuable
          experience regardless.
        </p>
      </div>
    </section>
  )
};

export default UlineHero2;
