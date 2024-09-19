import React from 'react'
import Layout from '@/components/Layout'
import PageSection from '@/components/PageSection'
import Title from '@/components/Title'
import Link from '@/components/Link'
import { topId } from '@/components/Hero'
import Arrow from './Arrow'

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
      <div className="w-full px-24">
      <PageSection id={topId}>
        {/* An arrow button to take them back to the main page */}
        <Link href="/#studies">
          <Arrow
            className="sm:-translate-x-12 -translate-x-12 m-10 text-malibu-300"
            size={36}
          />
        </Link>

        <Title order={1}>{title}</Title>
        {children}
      </PageSection>
      </div>
    </Layout>
  )
}
