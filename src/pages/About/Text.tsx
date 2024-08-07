import classNames from 'classnames'
import React from 'react'

interface TextProps {
  children: React.ReactNode
  withoutMargin?: boolean
}

export default function Text({
  children,
  withoutMargin: withoutMargin = false,
}: TextProps) {
  return <p className={classNames(!withoutMargin && 'mb-4')}>{children}</p>
}
