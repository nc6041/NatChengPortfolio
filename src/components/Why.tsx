import React from 'react'
import Title from '@/components/Title'
import Text from '@/components/Text'

interface WhyProps {
  theProblem: string
  butWhy: string
}

const columnClassName = 'flex-1'

/**
 * The "The Problem"/"But Why?" section on each case study page.
 */
export default function Why({ theProblem, butWhy }: WhyProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-16 sm:gap-48 xl:gap-128 w-full my-16">
      <section className={columnClassName}>
        <Title style="projectPage" order={3}>
          The Problem
        </Title>
        <Text>{theProblem}</Text>
      </section>
      <section className={columnClassName}>
        <Title style="projectPage" order={3}>
          But Why?
        </Title>
        <Text>{butWhy}</Text>
      </section>
    </div>
  )
}
