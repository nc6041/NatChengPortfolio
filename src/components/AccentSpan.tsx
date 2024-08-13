import classNames from 'classnames'
import React from 'react'

export default function AccentSpan({
  children,
  bold = false,
}: {
  children: React.ReactNode
  bold?: boolean
}) {
  return (
    <span className={classNames(bold && 'font-bold', 'text-malibu-300')}>
      {children}
    </span>
  )
}
