import classNames from 'classnames'
import React from 'react'

/**
 * A span that styles its text with the site accent color and optionally bold.
 */
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
