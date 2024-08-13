import React from 'react'

interface DesignProps {
  img: string
  title: string
  year: number
}

export default function Design({ img, title, year }: DesignProps) {
  return (
    <li className="hover:scale-105 flex flex-col gap-2 text-2xl">
      <img src={img} alt={title} />
      <p className="text-black font-medium">{title}</p>
      <p className="font-normal text-zinc-400">{year}</p>
    </li>
  )
}
