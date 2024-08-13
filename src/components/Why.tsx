import React from 'react'
import Title from './Title'

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
    <div className="flex flex-row gap-48 xl:gap-96 w-full my-16">
      <section className={columnClassName}>
        <Title style="projectPage" order={3}>
          The Problem
        </Title>
        <p>{theProblem}</p>
      </section>
      <section className={columnClassName}>
        <Title style="projectPage" order={3}>
          But Why?
        </Title>
        <p>{butWhy}</p>
      </section>
    </div>
  )
}
