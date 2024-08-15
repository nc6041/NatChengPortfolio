import classNames from 'classnames'
import React from 'react'
import Link from '@/components/Link'
import { Location, useLocation } from 'react-router-dom'
import { topId } from '@/components/Hero'

interface NavLinkProps {
  title: string
  href: string
  /** Style this nav link like a button */
  styleButton?: boolean
}

/**
 * Determines whether this NavLink should be styled as active.
 *
 * @param location The current window.location object.
 * @param href The href of this navbar item.
 * @returns true if it's active, false otherwise.
 */
function isActive(location: Location, href: string) {
  const { pathname, hash } = location
  const [hrefPathname, hrefHash] = href.split('#')

  console.log('running isActive')

  return (
    pathname === hrefPathname && (hrefHash == topId || hash === `#${hrefHash}`)
  )
}

/**
 * A styled link to be used in the Navbar.
 */
const NavLink = ({ title, href, styleButton }: NavLinkProps) => {
  const location = useLocation()
  const classes = classNames(
    'block font-normal cursor-pointer hover:text-malibu-300 py-2 px-4',
    isActive(location, href) && 'text-malibu-300',
    !styleButton && 'text-xl md:px-0',
  )

  return (
    <Link
      href={href}
      className={classes}
      style={styleButton ? 'button' : 'unstyled'}
    >
      {title}
    </Link>
  )
}

export default NavLink
