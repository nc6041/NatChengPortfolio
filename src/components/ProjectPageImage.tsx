import React from 'react'

interface ProjectPageImageProps {
  src: string
  alt: string
}

/**
 * Use this component for any full-page images on the case study pages. Implemements the prefered
 * spacing etc.
 */
export default function ProjectPageImage(props: ProjectPageImageProps) {
  return <img {...props} className="pb-10 lg:px-20 pt-4 mb-16" />
}
