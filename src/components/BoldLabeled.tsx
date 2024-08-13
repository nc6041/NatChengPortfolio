import React from 'react'
import Text from '@/components/Text'

interface BoldLabeledProps {
  label: string
  children: React.ReactNode
}

/**
 * A simple component for a bold label with a colon followed by some text.
 */
export default function BoldLabeled({ label, children }: BoldLabeledProps) {
  return (
    <Text>
      <strong>{label}:</strong> {children}
    </Text>
  )
}
