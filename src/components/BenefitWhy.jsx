import styles from "../style";

const UlineWhy = () => {
  return (
    <section className={`flex lg:flex-row flex-col ${styles.paddingY}`}>
      <div
        className={`flex-1 ${styles.flexColumns} flex-col xl:px-0 sm:px-16 px-6 xl:mr-96 mr-0`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`flex-1 text-dimBlack`}>The Problem</h1>
        </div>
        <p className={`w-full`}>
          The current website is only one page and does not give visitors any
          action items or details about the organization besides the mission
          statement and contact card.
        </p>
      </div>

      <div
        className={`flex-1 ${styles.flexColumns} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`flex-1 text-dimBlack`}>But Why?</h1>
        </div>
        <p className={`w-full`}>
          As a non-profit, it's important for those who are interested in it to
          understand not only the mission statement, but the people behind it
          and the resources it provides.
        </p>
      </div>
    </section>
  )
}

export default UlineWhy
