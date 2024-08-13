import classNames from 'classnames'
import React from 'react'

interface TextProps {
  children: React.ReactNode
  withoutMargin?: boolean
  accent?: boolean
}

/**
 * This is a flexible component for a paragraph of text. Use this instead of <p> for consistency
 * and because of the additional features.
 */
export default function Text({
  children,
  withoutMargin: withoutMargin = false,
  accent = false,
}: TextProps) {
  return (
    <p
      className={classNames(
        !withoutMargin && 'mb-4',
        accent && 'text-malibu-300',
      )}
    >
      {children}
    </p>
  )
}
