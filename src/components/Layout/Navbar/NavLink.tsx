import classNames from 'classnames'
import React from 'react'
import { HashLink } from 'react-router-hash-link'
import ButtonLink from '@/components/ButtonLink'

interface NavLinkProps {
  title: string
  href: string
  /** Style this nav link like a button */
  styleButton?: boolean
}

const NavLink = ({ title, href, styleButton }: NavLinkProps) => {
  const isActive = window.location.pathname.substring(1) === href
  const classes = classNames(
    'block font-normal cursor-pointer hover:text-malibu-300 py-2 px-4',
    isActive && 'text-malibu-300',
    !styleButton && 'text-xl md:px-0',
  )

  return (
    <ButtonLink href={href} className={classes} unstyled={!styleButton}>
      {title}
    </ButtonLink>
  )
}

export default NavLink
