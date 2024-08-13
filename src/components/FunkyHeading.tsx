import classNames from 'classnames'
import React from 'react'

interface FunkyHeadingProps {
  children: React.ReactNode
  className?: string
}

export default function FunkyHeading({
  children,
  className,
}: FunkyHeadingProps) {
  return (
    <h2
      className={classNames(
        'text-5xl font-nat font-bold sm:text-6xl md:text-8xl mb-3',
        className,
      )}
    >
      {children}
    </h2>
  )
}
