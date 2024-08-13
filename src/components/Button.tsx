import classNames from 'classnames'
import React, { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
}

export const buttonClasses = `rounded border-2 border-malibu-300 px-5 py-2 uppercase text-[16px] text-malibu-300 hover:text-white hover:bg-malibu-300 transition-colors`

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      className={classNames(buttonClasses, className)}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
