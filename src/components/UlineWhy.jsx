import styles from "../style";

const UlineWhy = () => {
  return (
    <section className={`flex lg:flex-row flex-col mb-28 ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexColumns} flex-col xl:px-0 sm:px-16 px-6 xl:mr-96 mr-0`}>
          <div className="flex flex-row justify-between items-center w-full">
            <h1 className={`${styles.heading2} flex-1 text-dimBlack`}>
              The Problem
            </h1>
          </div>
          <p className={`${styles.paragraph} mb-6 w-full`}>
            Uline was having a difficult time getting customers to continue their
             business with Uline after making their initial purchase. 
          </p>
        </div>

        <div className={`flex-1 ${styles.flexColumns} flex-col xl:px-0 sm:px-16 px-6`}>
          <div className="flex flex-row justify-between items-center w-full">
            <h1 className={`${styles.heading2} flex-1 text-dimBlack`}>
              But Why?
            </h1>
          </div>
          <p className={`${styles.paragraph} mb-6 w-full`}>
            It's cheaper to keep customers than to bring in more. Improving the retention
             rate of new customers would reduce the costs of having to continuously find new customers.
          </p>
        </div>

    </section>
  );
};

export default UlineWhy;