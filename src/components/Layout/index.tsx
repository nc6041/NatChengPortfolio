import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode
  mainClassName?: string
}

/**
 * The site layout, which is used on every page and includes a navbar and footer.
 */
export default function Layout({ children, mainClassName }: LayoutProps) {
  return (
    <div style={{ scrollPaddingTop: 'var(--navbar-height)' }}>
      <Navbar />
      <main id="main" className={mainClassName}>
        {children}
      </main>
      <Footer />
    </div>
  )
}
