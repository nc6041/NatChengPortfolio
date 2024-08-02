import styles from '../style'
import { arrowUp, uline, arrowSide } from '../assets'

const roundedMinSize = 'lg'
const roundedSuffix = '[20px]'

const CaseCard = ({ id, title, description, whatFor, imgSrc, href = id }) => (
  <section
    id={id}
    className={`bg-neutral-100 flex lg:flex-row flex-col lg:rounded-3xl xl:mb-5 mb-0`}
  >
    <div className="justify-between flex-1 flex flex-col px-16 py-12">
      <div className="flex flex-col gap-6 items-start">
        <h3>{title}</h3>
        <p>{description}</p>

        <a href={href} className={styles.button}>
          View Study
        </a>
      </div>

      <h4>{whatFor}</h4>
    </div>

    <a href={href} className="flex flex-1 flex-col lg:px-0 px-16 lg:pb-0 pb-16">
      <img
        src={imgSrc}
        alt={id}
        className={`w-[100%] h-[100%] relative lg:rounded-r-3xl`}
      />
    </a>
  </section>
)

export default CaseCard
