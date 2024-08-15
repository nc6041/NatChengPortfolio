import React from 'react'
import Layout from '@/components/Layout'
import PageSection from '@/components/PageSection'
import Title from '@/components/Title'
import Arrow from './Arrow'
import { HashLink } from 'react-router-hash-link'
import { topId } from '../Hero'

interface ProjectPageProps {
  title: string
  children?: React.ReactNode
}

/**
 * Template component for the various case study pages. Includes a back button to the home page and
 * a title.
 */
export default function ProjectPage({ title, children }: ProjectPageProps) {
  return (
    <Layout>
      <PageSection id={topId}>
        {/* An arrow button to take them back to the main page */}
        <HashLink to="/#studies">
          <Arrow
            className="sm:-translate-x-32 -translate-x-12 m-10 text-malibu-300"
            size={36}
          />
        </HashLink>

        <Title order={1}>{title}</Title>
        {children}
      </PageSection>
    </Layout>
  )
}
