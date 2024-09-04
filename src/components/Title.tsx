import classNames from 'classnames'
import React from 'react'

type Style = 'normal' | 'projectPage' | 'funky' | 'homepage'
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

// Different parts of the site style headings completely differently. This object contains all the
// various styles. It isn't the best solution (ideally the headings would just be consistent), but
// it works for now. Also, a few components--Hero, Footer, and Navbar--don't use this.
const styles: StyleRecord = {
  normal: {
    h1: 'text-5xl xs:text-6xl font-bold mb-8',
    h2: 'text-4xl xs:text-5xl font-semibold mb-6',
    h3: 'text-3xl font-normal mb-4',
    h4: 'text-2xl mb-2',
  },
  homepage: {
    h2: 'text-3xl xs:text-4xl font-medium  mb-20',
    h3: 'text-2xl sm:text-4xl font-medium ',
    h4: 'text-xl sm:text-2xl font-medium',
  },
  projectPage: {
    h2: 'text-4xl xs:text-5xl font-semibold text-malibu-300 mt-16 mb-10',
    h3: 'text-4xl font-semibold mb-8 mt-12',
    h4: 'text-3xl font-light text-malibu-300 mb-2',
    h5: 'text-2xl font-semibold mb-4'
  },
  funky: {
    h2: 'text-4xl font-nat font-bold sm:text-6xl md:text-6xl mb-3',
    h3: 'text-2xl font-nat font-regular sm:text-6xl md:text-6xl mb-3',
  },
}

/**
 * A flexible component for headings. Use this instead of h1-h6 when possible for consistency.
 */
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
