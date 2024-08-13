import React from 'react'
import { HashLink, HashLinkProps } from 'react-router-hash-link'
import { buttonClasses } from './Button'
import classNames from 'classnames'

interface ButtonLinkProps extends HashLinkProps {
  children: React.ReactNode
  className?: string
}

export default function ButtonLink({
  children,
  className,
  ...props
}: ButtonLinkProps) {
  return (
    <HashLink className={classNames(buttonClasses, className)} {...props}>
      {children}
    </HashLink>
  )
}
