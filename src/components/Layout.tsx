import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div
      className="max-w-screen max-h-screen overflow-auto"
      style={{ scrollPaddingTop: 'var(--navbar-height)' }}
    >
      <Navbar />
      <main id="main">{children}</main>
      <Footer />
    </div>
  )
}
