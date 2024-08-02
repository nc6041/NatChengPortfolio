import { useState } from 'react'

import { close, menu } from '../assets'
import { navLinks } from '../constants'
import { HashLink } from 'react-router-hash-link'
import classNames from 'classnames'
import styles from '../style'

const Navbar = () => {
  const [active, setActive] = useState('')
  // Whether the title link is being hovered over
  const [title, setTitle] = useState(false)
  const [toggle, setToggle] = useState(false)

  return (
    <div className={`px-24 ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <nav className="w-full flex py-6 justify-between items-center navbar">
          <a href={'/'}>
            <div
              className={`cursor-pointer object-contain`}
              onMouseEnter={() => setTitle(true)}
              onMouseLeave={() => setTitle(false)}
            >
              <h1 className="font-nat font-bold text-5xl">
                <span
                  className={classNames(
                    'whitespace-pre',
                    !title && 'text-malibu-300',
                  )}
                >
                  nat{' '}
                </span>
                <span className={classNames(title && 'text-malibu-300')}>
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
            </div>
          </a>

          <ul className="list-none md:flex hidden justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={classNames(
                  'font-normal',
                  'cursor-pointer',
                  (active === nav.title ||
                    window.location.pathname.substring(1) === nav.id) &&
                    'text-malibu-300',
                  index === navLinks.length - 1 ? 'mr-0' : 'mr-10',
                  nav.styleButton ? styles.button : 'text-[20px]',
                )}
                onMouseEnter={() => setActive(nav.title)}
                onMouseLeave={() => setActive('')}
              >
                <HashLink to={`${nav.id}`}>{nav.title}</HashLink>
              </li>
            ))}
          </ul>

          <div className="md:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain"
              onClick={() => setToggle(!toggle)}
            />

            <div
              className={`${
                !toggle ? 'hidden' : 'flex'
              } p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-lg border border-dimBlack`}
            >
              <ul className="list-none flex justify-end items-start flex-1 flex-col">
                {navLinks.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={classNames(
                      'font-nohemi font-medium cursor-pointer text-[16px]',
                      active === nav.title && 'text-malibu-300',
                      index === navLinks.length - 1 ? 'mb-0' : 'mb-4',
                    )}
                    onMouseEnter={() => setActive(nav.title)}
                    onMouseLeave={() => setActive('')}
                  >
                    <a href={`${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
