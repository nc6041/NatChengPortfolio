import classNames from 'classnames'
import React from 'react'

type Style = 'normal' | 'projectPage' | 'funky'
interface TitleProps {
  children?: React.ReactNode
  order?: 1 | 2 | 3 | 4 | 5 | 6
  className?: string
  accent?: boolean
  style?: Style
  center?: boolean
}

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
type StyleRecord = Record<Style, Partial<Record<HeadingTag, string>>>

const styles: StyleRecord = {
  normal: {
    h1: 'text-6xl font-bold mb-8',
    h2: 'text-5xl font-semibold mb-6',
    h3: 'text-3xl font-normal mb-4',
    h4: 'text-2xl mb-2',
  },
  projectPage: {
    h2: 'text-5xl font-semibold text-malibu-300 mt-32 mb-10',
    h3: 'text-4xl font-semibold mb-4',
    h4: 'text-3xl font-light text-malibu-300 mb-2',
  },
  funky: {
    h2: 'text-5xl font-nat font-bold sm:text-6xl md:text-8xl mb-3',
  },
}

export default function Title({
  children,
  order = 2,
  className,
  accent = false,
  style = 'normal',
  center = false,
}: TitleProps) {
  const Component: HeadingTag = `h${order}`

  return (
    <Component
      className={classNames(
        accent && 'text-malibu-300',
        center && 'text-center',
        styles[style][Component],
        className,
      )}
    >
      {children}
    </Component>
  )
}
