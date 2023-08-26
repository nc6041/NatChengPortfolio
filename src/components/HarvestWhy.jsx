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
            Members of the community primarily rely on word of mouth and service attendance to get information about events and other news, which is unreliable and can be difficult to obtain.
          </p>
        </div>

        <div className={`flex-1 ${styles.flexColumns} flex-col xl:px-0 sm:px-16 px-6`}>
          <div className="flex flex-row justify-between items-center w-full">
            <h1 className={`${styles.heading2} flex-1 text-dimBlack`}>
              But Why?
            </h1>
          </div>
          <p className={`${styles.paragraph} w-full`}>
            Having a consolidated space for all information provides a reliable means of access to said information which can enhance communication and connectivity among the community.
          </p>
        </div>

    </section>
  );
};

export default UlineWhy;