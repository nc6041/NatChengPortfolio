import PageSection from '@/components/PageSection'
import Title from '@/components/Title'

interface DesignsProps {
  id: string
  title: string
  children: React.ReactNode
}

const Designs = ({ id, title, children }: DesignsProps) => {
  return (
    <PageSection id={id} className="px-12">
      <Title style="funky">{title}</Title>
      <ul className="list-none flex flex-col sm:flex-row items-stretch gap-8 sm:gap-3">
        {children}
      </ul>
    </PageSection>
  )
}

export default Designs
