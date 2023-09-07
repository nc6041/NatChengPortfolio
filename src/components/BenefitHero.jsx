import styles from "../style";
import { arrowUp, initialfinaldesign } from "../assets";

const BenefitHero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>

      <div className={`flex-1 flex-col xl:px-0 sm:px-16 px-6`}>

        <a href={`${"/"}`}>
          <img src={arrowUp} alt="designs" className={`sm:-translate-x-32 -translate-x-12 sm:mt-0 mt-10 mb-10 w-[130px] h-[38px] rotate-220`} />
        </a>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-nohemi font-bold text-start ss:text-[50px] text-[40px] text-dimBlack ss:leading-[100.8px] leading-[75px]">
            educa11y Website Redesign
          </h1>
        </div>

        <p className={`${styles.paragraph} mb-10 w-full`}>
        Providing non-profits with accessible design resources through the benefit.design volunteer program.
        </p>

        <p className={`${styles.paragraph} mb-6 w-full`}>
          <span className="font-bold ">Team:</span>{" "}
          educa11y Volunteer Web and Brand Design Team (8 members total)
        </p>

        <p className={`${styles.paragraph} mb-6 w-full`}>
          <span className="font-bold ">My Role:</span>{" "}
          Web Design
        </p>

        <p className={`${styles.paragraph} mb-6 w-full`}>
          <span className="font-bold ">Timeline:</span>{" "}
          January 2023 - March 2023
        </p>

        <p className={`${styles.paragraph} mb-6 w-full`}>
          <span className="font-bold ">Tools:</span>{" "}
          Figma, FigJam
        </p>

        <p className={`${styles.paragraph} mb-6 w-full`}>
          In efforts to gain real world experience in design and working in a team, I searched for volunteer design opportunities to develop these skills while also making an impact on the community. I found an organization called benefit.design that assists non-profits with their{" "}
          <span className="font-bold text-dimCyan">creative needs</span>{" "}
          using the help of volunteer designers. The project I joined was a{" "}
          <span className="font-bold text-dimCyan">website redesign</span>{" "}
          for the non-profit educa11y, an organization dedicated to the {" "}
          <span className="font-bold text-dimCyan">advocation and education of digital accessibility</span>
          . Our team was split into web designers and brand designers. Unfortunately, after we made the wireframes, my team ceased all communication, so I was unable to produce any mockups with them, but I will still describe the design process up to where we stopped.
        </p>

      </div>

    </section>
  );
};

export default BenefitHero;
