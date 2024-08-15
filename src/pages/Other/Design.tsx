import React from 'react'
import Text from '@/components/Text'

interface DesignProps {
  img: string
  title: string
  year: number
}

export default function Design({ img, title, year }: DesignProps) {
  return (
    <li className="hover:scale-105 flex flex-col gap-2 text-2xl">
      <img src={img} alt={title} />
      <Text className="text-black font-medium">{title}</Text>
      <Text className="font-normal text-zinc-400">{year}</Text>
    </li>
  )
}
