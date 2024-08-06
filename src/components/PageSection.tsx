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
  ...props
}: PageSectionProps) {
  return (
    <div className="sm:px-16 px-6 flex flex-col items-center">
      <section
        className={classNames('w-full max-w-screen-xl', className)}
        {...props}
      >
        {children}
      </section>
    </div>
  )
}
