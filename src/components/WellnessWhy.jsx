import styles from "../style";

const UlineWhy = () => {
  return (
    <section className={`flex lg:flex-row flex-col ${styles.paddingY}`}>
      <div
        className={`flex-1 ${styles.flexColumns} flex-col xl:px-0 sm:px-16 px-6 xl:mr-96 mr-0`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`flex-1 `}>The Problem</h1>
        </div>
        <p className={`w-full`}>
          How might we provide education and resources to help people implement
          and understand the significance of effective health and wellness
          practices in their daily lives?
        </p>
      </div>

      <div
        className={`flex-1 ${styles.flexColumns} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`flex-1 `}>But Why?</h1>
        </div>
        <p className={`w-full`}>
          Taking care of ourselves is important! Especially with a society that
          is moving towards a “no time for rest” mindset, it is very easy to
          burnout which takes a toll on mental and physical health.
        </p>
      </div>
    </section>
  )
}

export default UlineWhy
