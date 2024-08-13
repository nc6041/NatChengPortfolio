import classNames from 'classnames'
import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { buttonClasses } from '@/components/Button'

interface NavLinkProps {
  title: string
  href: string
  styleButton?: boolean
  nativeAnchor?: boolean
  setActive: (title: string | null) => void
}

const NavLink = ({ title, href, styleButton, nativeAnchor }: NavLinkProps) => {
  const isActive = window.location.pathname.substring(1) === href
  const classes = classNames(
    'block font-normal cursor-pointer hover:text-malibu-300 py-2 px-4',
    isActive && 'text-malibu-300',
    styleButton ? buttonClasses : 'text-xl md:px-0',
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

export default NavLink
