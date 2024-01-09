import styles from "../style";

const UlineWhy = () => {
  return (
    <section className={`flex lg:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexColumns} flex-col xl:px-0 sm:px-16 px-6 xl:mr-96 mr-0`}>
          <div className="flex flex-row justify-between items-center w-full">
            <h1 className={`${styles.heading2} flex-1 text-dimBlack`}>
              The Problem
            </h1>
          </div>
          <p className={`${styles.paragraph} w-full`}>
            PureGreen is a popular national smoothie and health food chain with a website, but no mobile application. 
            How might we create an app for PureGreen that makes on-the-go ordering easier for users and aligns with the current brand's identity?
          </p>
        </div>

        <div className={`flex-1 ${styles.flexColumns} flex-col xl:px-0 sm:px-16 px-6`}>
          <div className="flex flex-row justify-between items-center w-full">
            <h1 className={`${styles.heading2} flex-1 text-dimBlack`}>
              But Why?
            </h1>
          </div>
          <p className={`${styles.paragraph} w-full`}>
            Many PureGreens are located in populous towns and are bound to attract health-conscious busybodies.
            Being able to order ahead of time is important for the audience that PureGreen is marketed towards and having an app would also help
            maintain customer loyalty through a highly competitive landscape of food and drink options. 
          </p>
        </div>

    </section>
  );
};

export default UlineWhy;