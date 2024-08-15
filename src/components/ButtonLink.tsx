import React, { AnchorHTMLAttributes } from 'react'
import { HashLink, HashLinkProps } from 'react-router-hash-link'
import { buttonClasses } from './Button'
import classNames from 'classnames'

type ButtonLinkProps = (
  | Omit<HashLinkProps, 'to'>
  | AnchorHTMLAttributes<HTMLAnchorElement>
) & {
  children: React.ReactNode
  href: string
  className?: string
  unstyled?: boolean
}

function isExternal(href: string) {
  return !href.match(/^(#|\.?\/(?!\/))/)
}

export default function ButtonLink({
  children,
  className,
  href,
  unstyled,
  ...props
}: ButtonLinkProps) {
  const classes = classNames(!unstyled && buttonClasses, className)

  if (isExternal(href)) {
    console.log('external: ', children)
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

  // Local link
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
