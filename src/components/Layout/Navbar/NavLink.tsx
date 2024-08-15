import classNames from 'classnames'
import React from 'react'
import ButtonLink from '@/components/ButtonLink'
import { Location, useLocation } from 'react-router-dom'
import { topId } from '@/components/Hero'

interface NavLinkProps {
  title: string
  href: string
  /** Style this nav link like a button */
  styleButton?: boolean
}

function isActive(location: Location, href: string) {
  const { pathname, hash } = location
  const [hrefPathname, hrefHash] = href.split('#')

  console.log('running isActive')

  return (
    pathname === hrefPathname && (hrefHash == topId || hash === `#${hrefHash}`)
  )
}

const NavLink = ({ title, href, styleButton }: NavLinkProps) => {
  const location = useLocation()
  const classes = classNames(
    'block font-normal cursor-pointer hover:text-malibu-300 py-2 px-4',
    isActive(location, href) && 'text-malibu-300',
    !styleButton && 'text-xl md:px-0',
  )

  return (
    <ButtonLink href={href} className={classes} unstyled={!styleButton}>
      {title}
    </ButtonLink>
  )
}

export default NavLink
