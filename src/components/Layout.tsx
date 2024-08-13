import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode
  mainClassName?: string
}

export default function Layout({ children, mainClassName }: LayoutProps) {
  return (
    <div
      className="max-w-screen max-h-screen overflow-auto"
      style={{ scrollPaddingTop: 'var(--navbar-height)' }}
    >
      <Navbar />
      <main id="main" className={mainClassName}>
        {children}
      </main>
      <Footer />
    </div>
  )
}
