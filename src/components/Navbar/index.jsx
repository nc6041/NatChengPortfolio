import { useState } from 'react'

import { close, menu } from '../../assets'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { NavLink } from './NavLink'

const Navbar = () => {
  // Whether the title link is being hovered over
  const [title, setTitle] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const toggle = () => setMenuOpen(!menuOpen)

  return (
    <>
      <div className="w-screen fixed bg-white border-b border-b-gray-300 z-10">
        <nav
          className="mx-auto flex py-3 md:py-6 px-8 sm:px-16 justify-between items-stretch max-w-screen-xl"
          style={{
            height: 'var(--navbar-height)',
          }}
        >
          <Link
            to="/"
            className={`flex flex-col cursor-pointer object-contain justify-center`}
            onMouseEnter={() => setTitle(true)}
            onMouseLeave={() => setTitle(false)}
          >
            <h1 className="font-nat font-bold text-5xl">
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
            <p>
              <span className={classNames(!title && 'text-malibu-300')}>
                UX{' '}
              </span>
              <span className={classNames(title && 'text-malibu-300')}>
                designer
              </span>
            </p>
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
              <NavLink href="/about" title="ABOUT" />
              <NavLink href="/other" title="OTHER WORK" />
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
