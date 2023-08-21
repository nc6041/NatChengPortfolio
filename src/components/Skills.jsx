import styles from "../style";
import { skills, hobbies } from "../constants";
import { natcheng } from "../assets"

const Skills = () => {
  return (
    <section className={`flex lg:flex-row flex-col mb-28 ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexColumns} flex-col xl:px-0 sm:pl-16 pl-6 pb-10`}>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[70px] text-dimBlack ss:leading-[100.8px] leading-[75px]">
            skills
          </h1>
        </div>
        
        <ul className={`list-none ${styles.paragraphSkills}`}>
        {skills.map((skill, index) => (
          <li key={skill.id}>
            {skill.title}
          </li>
        ))}
        </ul>
      </div>

      <div className={`flex-1 ${styles.flexColumns} flex-col xl:px-0 sm:pl-16 pl-6 pb-10`}>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[70px] text-dimBlack ss:leading-[100.8px] leading-[75px]">
            hobbies
          </h1>
        </div>
        
        <ul className={`list-none ${styles.paragraphSkills}`}>
        {hobbies.map((hobby, index) => (
          <li key={hobby.id}>
            {hobby.title}
          </li>
        ))}
        </ul>
      </div>

      <div className={`flex-1 ${styles.flexColumns} flex-col xl:px-0 md:${styles.flexCenter} sm:px-16 px-6`}>
        <img src={natcheng} alt="natcheng"/>
      </div>

    </section>
  );
};

export default Skills;