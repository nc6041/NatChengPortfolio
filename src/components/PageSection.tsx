import classNames from 'classnames'
import React from 'react'

interface PageSectionProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  id?: string
}

export default function PageSection({
  children,
  className,
  style,
  ...props
}: PageSectionProps) {
  return (
    <div className="px-6 xs:px-10 sm:px-16 flex flex-col items-center">
      <section
        className={classNames('max-w-screen-lg', className)}
        {...props}
        style={{
          scrollMarginTop: 'var(--navbar-height)',
          ...style,
        }}
      >
        {children}
      </section>
    </div>
  )
}
