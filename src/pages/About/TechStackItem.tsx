import React from 'react'
import Text from './Text'

interface TechStackItemProps {
  label: string
  children: React.ReactNode
}

export default function TechStackItem({ label, children }: TechStackItemProps) {
  return (
    <Text>
      <strong className="font-medium">{label}:</strong> {children}
    </Text>
  )
}
