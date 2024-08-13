import classNames from 'classnames'
import React from 'react'

type ListProps = {
  items: React.ReactNode[]
  accent?: boolean
  className?: string
} & ({ numbered: true } | { bulleted: true })

/**
 * This is a flexible component for ordered and unordered lists. Use this instead of <ol> or <ul>
 * because it implements the preferred styles.
 */
export default function List({
  items,
  className,
  accent = false,
  ...props
}: ListProps) {
  const Component = 'numbered' in props ? 'ol' : 'ul'

  return (
    <Component
      className={classNames(
        Component == 'ol' ? 'list-decimal' : 'list-disc',
        accent && 'text-malibu-300',
        // Left padding for the bullets/numbers
        'pl-8',
        'flex flex-col gap-2',
        className,
      )}
    >
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </Component>
  )
}
