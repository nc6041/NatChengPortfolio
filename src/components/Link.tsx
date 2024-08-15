import React, { AnchorHTMLAttributes } from 'react'
import { HashLink, HashLinkProps } from 'react-router-hash-link'
import { buttonClasses } from './Button'
import classNames from 'classnames'

type LinkProps = (
  | Omit<HashLinkProps, 'to'>
  | AnchorHTMLAttributes<HTMLAnchorElement>
) & {
  children: React.ReactNode
  href: string
  className?: string
  style?: 'button' | 'unstyled'
}

/**
 * Tries to guess whether the given href is external (as opposed to local).
 */
function isExternal(href: string) {
  return !href.match(/^(#|\.?\/(?!\/))/)
}

/**
 * A versatile Link component that can handle local links, hash links, and external links and can be
 * styled like a button.
 */
export default function Link({
  children,
  className,
  href,
  style = 'unstyled',
  ...props
}: LinkProps) {
  const classes = classNames(style === 'button' && buttonClasses, className)

  if (isExternal(href)) {
    // External link
    return (
      <a
        className={classes}
        href={href}
        // Open external links in a new tab
        target="_blank"
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    )
  }

  // Local or hash link
  return (
    <HashLink
      className={classes}
      to={href}
      {...(props as Omit<HashLinkProps, 'to'>)}
    >
      {children}
    </HashLink>
  )
}
