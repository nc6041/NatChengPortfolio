import PageSection from '@/components/PageSection'
import FunkyHeading from '@/components/FunkyHeading'

interface DesignsProps {
  id: string
  title: string
  children: React.ReactNode
}

const Designs = ({ id, title, children }: DesignsProps) => {
  return (
    <PageSection id={id}>
      <FunkyHeading>{title}</FunkyHeading>
      <ul className="list-none flex flex-col sm:flex-row items-stretch gap-8 sm:gap-3">
        {children}
      </ul>
    </PageSection>
  )
}

export default Designs
