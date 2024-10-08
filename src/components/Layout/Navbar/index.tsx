import { useEffect, useState } from 'react'

import close from '@/assets/close.svg'
import menu from '@/assets/menu.svg'
import classNames from 'classnames'
import { HashLink } from 'react-router-hash-link'
import NavLink from './NavLink'
import Text from '@/components/Text'
import Link from '@/components/Link'

/**
 * The page's sticky navbar header, which is shown on every page.
 */
const Navbar = () => {
  // Whether the title link is being hovered over
  const [title, setTitle] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrollPos, setScrollPos] = useState(window.scrollY)

  const toggle = () => setMenuOpen(!menuOpen)

  useEffect(() => {
    window.onscroll = function () {
      setScrollPos(window.scrollY)
    }
  }, [])

  return (
    <>
      <div
        className={classNames(
          'w-screen fixed bg-white z-10',
          // The navbar has a small drop shadow, but when the user has scrolled past the top of the
          // page (by at least 16px)
          scrollPos >= 16 && 'shadow-sm',
        )}
      >
        <nav
          className="mx-auto flex py-3 md:py-6 px-8 sm:px-16 justify-between items-stretch max-w-screen-md"
          style={{
            // padding: '60px',
            height: 'var(--navbar-height)',
          }}
        >
          <Link
            href="/#top"
            className="flex flex-col cursor-pointer object-contain justify-center"
            onMouseEnter={() => setTitle(true)}
            onMouseLeave={() => setTitle(false)}
          >
            <h1 className="font-nat font-bold text-4xl">
              <span
                className={classNames(
                  'whitespace-pre',
                  title && 'text-malibu-300',
                )}
              >
                nat{' '}
              </span>
              <span className={classNames(!title && 'text-malibu-300')}>
                cheng
              </span>
            </h1>
            <Text>
              <span className={classNames(!title && 'text-malibu-300')}>
              {title ? 'PD' : 'UX'}{' '}
              </span>
              <span className={classNames(title && 'text-malibu-300')}>
                designer
              </span>
            </Text>
          </Link>

          <div className="relative self-center flex">
            <button onClick={toggle} aria-hidden>
              <img
                src={menuOpen ? close : menu}
                alt={menuOpen ? 'close' : 'menu'}
                className="md:hidden w-[28px] h-[28px] object-contain"
              />
            </button>

            <div
              className={classNames(
                'items-stretch flex-1 flex-col absolute z-20 top-full mt-4 right-0 w-max p-4 bg-white rounded-lg border border-gray-500',
                menuOpen ? 'flex' : 'hidden',
                // If the screen is big, show the menu regardless of menuOpen
                'md:flex md:gap-8 md:border-0 md:flex-row md:static md:mt-0 md:items-center md:z-auto md:py-0',
              )}
            >
              <NavLink href="/#studies" title="CASE STUDIES" />
              <NavLink href="/about#top" title="ABOUT" />
              <NavLink href="/other#top" title="OTHER WORK" />
              <NavLink
                href="mailto:nataliec6041@gmail.com"
                title="CONTACT"
                styleButton
              />
            </div>
          </div>
        </nav>
      </div>
      <div style={{ height: 'var(--navbar-height)' }} />
    </>
  )
}

export default Navbar
