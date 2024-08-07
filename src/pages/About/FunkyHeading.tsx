import React from 'react'

interface FunkyHeadingProps {
  children: React.ReactNode
}

export default function FunkyHeading({ children }: FunkyHeadingProps) {
  return (
    <h2 className="text-5xl font-nat font-bold sm:text-6xl md:text-8xl">
      {children}
    </h2>
  )
}
