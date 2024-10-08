import React from 'react'
import Text from '@/components/Text'
import classNames from 'classnames'

interface ThingsILoveItemProps {
  symbol: string
  description: string
  accent?: boolean
}

export default function ThingsILoveItem({
  symbol,
  description,
  accent,
}: ThingsILoveItemProps) {
  return (
    <div className="flex flex-col items-center">
      <Text
        aria-hidden
        className={classNames(
          'font-nat-symbol text-9xl',
          accent && 'text-malibu-300',
        )}
      >
        {symbol}
      </Text>
      <Text className="font-nat text-4xl">{description}</Text>
    </div>
  )
}
