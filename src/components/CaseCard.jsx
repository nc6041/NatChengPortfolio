import classNames from 'classnames'
import Button from './Button'
import Title from './Title'

const CaseCard = ({
  id,
  title,
  description,
  whatFor,
  imgSrc,
  href = `/${id}`,
}) => (
  <section
    id={id}
    className={classNames(
      'bg-neutral-100 flex flex-col sm:flex-row rounded-md sm:rounded-3xl xl:mb-5 mb-0',
      // For border radius
      'overflow-hidden',
    )}
  >
    <div className="justify-between gap-8 flex-1 flex flex-col px-16 py-12">
      <div className="flex flex-col gap-6 items-start">
        <h3 className="uppercase text-4xl font-medium">{title}</h3>
        <p>{description}</p>

        <Button href={href} component="a">
          View Study
        </Button>
      </div>

      <h4>{whatFor}</h4>
    </div>

    <a href={href} className="flex flex-1 flex-col max-w-xl self-center">
      <img
        src={imgSrc}
        alt={id}
        className={`w-full h-full relative object-cover`}
      />
    </a>
  </section>
)

export default CaseCard
