import type { ButtonHTMLAttributes } from 'react'
import './Button.css'

export type ButtonVariant = 'digit' | 'operator' | 'action' | 'equals'
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> { variant?: ButtonVariant; label: string }

function Button ({ variant = 'digit', label, ...rest }: Props) {
  return (
    <button className={`calc-btn calc-btn--${variant}`} aria-label={label} {...rest}>
      {label}
    </button>
  )
}

export default Button
