import classNames from 'classnames'
import React from 'react'

type ListProps = {
  items: React.ReactNode[]
  className?: string
} & ({ numbered: true } | { bulleted: true })

/**
 * This is a flexible component for ordered and unordered lists. Use this instead of <ol> or <ul>
 * because it implements the preferred styles.
 */
export default function List({ items, className, ...props }: ListProps) {
  const Component = 'numbered' in props ? 'ol' : 'ul'

  return (
    <Component
      className={classNames(
        Component == 'ol' ? 'list-decimal' : 'list-disc',
        // Left padding for the bullets/numbers
        'pl-8',
        'flex flex-col gap-2',
        className,
      )}
    >
      {items.map((item) => (
        <li>{item}</li>
      ))}
    </Component>
  )
}
