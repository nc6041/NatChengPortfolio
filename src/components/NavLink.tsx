import classNames from 'classnames'
import React from 'react'
import styles from '../style'
import { HashLink } from 'react-router-hash-link'

interface NavLinkProps {
  title: string
  href: string
  styleButton?: boolean
  nativeAnchor?: boolean
  setActive: (title: string | null) => void
}

export const NavLink = ({
  title,
  href,
  styleButton,
  nativeAnchor,
}: NavLinkProps) => {
  const isActive = window.location.pathname.substring(1) === href
  const classes = classNames(
    'block font-normal cursor-pointer hover:text-malibu-300',
    isActive && 'text-malibu-300',
    styleButton ? styles.button : 'text-xl',
  )

  if (nativeAnchor) {
    return (
      <a href={href} className={classes}>
        {title}
      </a>
    )
  }

  return (
    <HashLink to={href} className={classes}>
      {title}
    </HashLink>
  )
}
