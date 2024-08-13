import React from 'react'
import Layout from './Layout'
import { arrowUp } from '@/assets'
import PageSection from './PageSection'
import Title from './Title'

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
          <img
            src={arrowUp}
            alt="designs"
            className={`sm:-translate-x-32 -translate-x-12 m-10 rotate-220`}
          />
        </a>

        <Title order={1}>{title}</Title>
        {children}
      </PageSection>
    </Layout>
  )
}
