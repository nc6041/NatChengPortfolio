import classNames from 'classnames'
import Link from '@/components/Link'
import Text from '@/components/Text'
import Title from '@/components/Title'

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
        <Title style="homepage">{title}</Title>
        <Text>{description}</Text>

        <Link href={href} style="button">
          View Study
        </Link>
      </div>

      <Title style="homepage">{whatFor}</Title>
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
