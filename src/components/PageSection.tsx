import classNames from 'classnames'
import React from 'react'

interface PageSectionProps {
  children: React.ReactNode
  as?: 'section' | 'div'
  fullWidth?: boolean
  className?: string
  style?: React.CSSProperties
  id?: string
}

/**
 * A section of a page, which is a container for content. By default, it is centered with a max
 * width, but it can be full width if specified.
 */
export default function PageSection({
  children,
  className,
  as: Component = 'section',
  style,
  fullWidth = false,
  ...props
}: PageSectionProps) {
  const section = (
    <Component
      className={classNames(
        fullWidth ? 'w-full' : 'max-w-screen-md',
        className,
      )}
      {...props}
      style={{
        // scrollMarginTop: 'var(--navbar-height)',
        ...style,
      }}
    >
      {children}
    </Component>
  )

  if (fullWidth) {
    return section
  }

  return (
    <div
      className={classNames(
        fullWidth ? '' : 'px-6 xs:px-10 sm:px-16 flex flex-col items-center',
      )}
    >
      {section}
    </div>
  )
}
