import styles from "../style";
import {  beach, building, firework, leaves, mayer, train, secondfloor } from "../assets";

const Photography = () => {
    return (
      <section
        id="designs"
        className={`flex md:flex-row flex-col ${styles.paddingY}`}
      >
        <div
          className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
        >
          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-nohemi font-medium text-start ss:text-[42px] text-[42px] ss:leading-[150px] leading-[75px]">
              photography
            </h1>
          </div>

          <ul className="list-none sm:flex justify-end items-center flex-1">
            <li className="sm:mr-2 mr-0">
              <img src={beach} alt={'beach'} className="mb-2" />
            </li>
            <li>
              <img src={building} alt={'building'} className="mb-2" />
            </li>
          </ul>

          <ul className="list-none sm:flex justify-end items-center flex-1">
            <li className="sm:mr-2 mr-0">
              <img
                src={mayer}
                alt={'mayer'}
                className="w-[100%] h-[100%] relative z-[5] mb-2"
              />
            </li>
            <li className="sm:mr-2 mr-0">
              <img
                src={train}
                alt={'train'}
                className="w-[100%] h-[100%] relative mb-2"
              />
            </li>
            <li>
              <img
                src={secondfloor}
                alt={'secondfloor'}
                className="w-[100%] h-[100%] relative z-[5] mb-2"
              />
            </li>
          </ul>

          <ul className="list-none sm:flex justify-end items-center flex-1">
            <li className="sm:mr-2 mr-0">
              <img
                src={leaves}
                alt={'leaves'}
                className="w-[100%] h-[100%] relative z-[5] mb-2"
              />
            </li>
            <li>
              <img
                src={firework}
                alt={'firework'}
                className="w-[100%] h-[100%] relative z-[5] mb-2"
              />
            </li>
          </ul>

          <p className={`${styles.subtext}`}>Shot on iPhone 14 Pro</p>
        </div>
      </section>
    )
  };

export default Photography;
