import classNames from 'classnames'
import React, { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'

type ButtonProps<T extends 'button' | 'a'> = {
  children: React.ReactNode
  component: T
  className?: string
} & (T extends 'button'
  ? ButtonHTMLAttributes<HTMLButtonElement>
  : AnchorHTMLAttributes<HTMLAnchorElement>)

export const buttonClasses = `rounded border-2 border-malibu-300 px-5 py-2 uppercase text-[16px] text-malibu-300 hover:text-white hover:bg-malibu-300 transition-colors`

const Button = <T extends 'button' | 'a'>({
  children,
  component,
  className,
  ...props
}: ButtonProps<T>) => {
  if (component === 'button') {
    const additionalProps = props as ButtonHTMLAttributes<HTMLButtonElement>
    return (
      <button
        type="button"
        className={classNames(buttonClasses, className)}
        {...additionalProps}
      >
        {children}
      </button>
    )
  } else if (component === 'a') {
    const additionalProps = props as AnchorHTMLAttributes<HTMLAnchorElement>

    return (
      <a className={classNames(buttonClasses, className)} {...additionalProps}>
        {children}
      </a>
    )
  }
}

export default Button
