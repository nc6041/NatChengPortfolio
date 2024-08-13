import React from 'react'
import Layout from '@/components/Layout'
import PageSection from '@/components/PageSection'
import Title from '@/components/Title'
import Arrow from './Arrow'

interface ProjectPageProps {
  title: string
  children?: React.ReactNode
}

export default function ProjectPage({ title, children }: ProjectPageProps) {
  return (
    <Layout>
      <PageSection>
        {/* An arrow button to take them back to the main page */}
        <a href={`${'/#studies'}`}>
          <Arrow
            className="sm:-translate-x-32 -translate-x-12 m-10 text-malibu-300"
            size={36}
          />
        </a>

        <Title order={1}>{title}</Title>
        {children}
      </PageSection>
    </Layout>
  )
}
