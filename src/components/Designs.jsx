import styles from "../style";
import { designs, posters } from "../constants";

const Designs = () => {
    return (
      <section id="designs" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
  
          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-nohemi font-medium text-start ss:text-[42px] text-[48px] text-dimBlack ss:leading-[150px] leading-[75px]">
              club designs
            </h1>
          </div>
  
          <ul className="list-none sm:flex justify-end items-center flex-1">
            {designs.map((design, index) => (
            <li
                key={design.title}
                className={`hover:scale-105 font-avenir font-bold text-[16px] mx-3`}
            >
                <img src={design.img} alt={design.title} className="w-[100%] h-[100%] relative mb-2 mt-6" />
                {design.title}<br></br>
                <p className="font-normal text-dimGrey">{design.year}</p>
            </li>
            ))}
          </ul>

          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-nohemi font-medium text-start ss:text-[42px] text-[48px] text-dimBlack ss:leading-[150px] leading-[75px]">
              posters
            </h1>
          </div>

          <ul className="list-none sm:flex justify-end items-center flex-1">
            {posters.map((poster, index) => (
            <li
                key={poster.title}
                className={`hover:scale-105 font-avenir font-bold text-[16px] mx-2`}
            >
                <img src={poster.img} alt={poster.title} className="w-[100%] h-[100%] relative mb-2 mt-6" />
                {poster.title}<br></br>
                <p className="font-normal text-dimGrey">{poster.year}</p>
            </li>
            ))}
          </ul>
  
        </div>
  
      </section>
    );
  };

export default Designs;
