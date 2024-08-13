import classNames from 'classnames'
import React from 'react'

interface PageSectionProps {
  children: React.ReactNode
  fullWidth?: boolean
  className?: string
  style?: React.CSSProperties
  id?: string
}

export default function PageSection({
  children,
  className,
  style,
  fullWidth,
  ...props
}: PageSectionProps) {
  const section = (
    <section
      className={classNames(
        fullWidth ? 'w-screen' : 'max-w-screen-lg',
        className,
      )}
      {...props}
      style={{
        // scrollMarginTop: 'var(--navbar-height)',
        ...style,
      }}
    >
      {children}
    </section>
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
