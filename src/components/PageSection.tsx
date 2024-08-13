import classNames from 'classnames'
import React from 'react'

interface PageSectionProps {
  children: React.ReactNode
  component?: 'section' | 'div'
  fullWidth?: boolean
  className?: string
  style?: React.CSSProperties
  id?: string
}

export default function PageSection({
  children,
  className,
  component: Component = 'section',
  style,
  fullWidth,
  ...props
}: PageSectionProps) {
  const section = (
    <Component
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
