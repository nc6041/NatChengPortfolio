import classNames from 'classnames'
import ButtonLink from '@/components/ButtonLink'

interface CaseCardProps {
  id: string
  title: string
  description: string
  whatFor: string
  imgSrc: string
  href?: string
}

const CaseCard = ({
  id,
  title,
  description,
  whatFor,
  imgSrc,
  href = `/${id}`,
}: CaseCardProps) => (
  <section
    id={id}
    className={classNames(
      'bg-neutral-100 flex flex-col sm:flex-row rounded-md sm:rounded-3xl xl:mb-5 mb-0',
      // For border radius
      'overflow-hidden',
    )}
  >
    <div className="justify-between gap-8 flex-1 flex flex-col p-6 xs:px-12 sm:px-16 xs:py-12">
      <div className="flex flex-col gap-6 items-start">
        <h3 className="uppercase text-2xl sm:text-4xl font-medium">{title}</h3>
        <p>{description}</p>

        <ButtonLink to={href}>View Study</ButtonLink>
      </div>

      <h4 className="text-xl sm:text-2xl font-medium">{whatFor}</h4>
    </div>

    <a href={href} className="flex flex-1 flex-col max-w-xl self-center">
      <img
        src={imgSrc}
        alt={id}
        className="w-full h-full relative object-cover"
      />
    </a>
  </section>
)

export default CaseCard
