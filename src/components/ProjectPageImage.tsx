import React from 'react'

interface ProjectPageImageProps {
  src: string
  alt: string
  caption?: string
}

/**
 * Use this component for any full-page images on the case study pages. Implemements the prefered
 * spacing etc.
 */
export default function ProjectPageImage({
  caption,
  ...props
}: ProjectPageImageProps) {
  return (
    <div className="pb-10 lg:px-20 pt-4">
      <img {...props} />
      {caption && <p className="text-zinc-400">{caption}</p>}
    </div>
  )
}
