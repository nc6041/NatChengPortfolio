import React from 'react'

export default function PageSection({ children }) {
  return (
    <div className="sm:px-16 px-6 flex flex-col items-center">
      <div className="w-full max-w-screen-xl">{children}</div>
    </div>
  )
}
