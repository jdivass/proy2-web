import { useState } from 'react'

const MAX_DIGITS = 9
const MAX_VALUE = 999999999

type Operator = '+' | '-' | '*' | null

const formatResult = (n: number): string => {
  if (!isFinite(n) || n < 0 || n > MAX_VALUE) return 'ERROR'
  const str = String(n)
  if (str.includes('.')) {
    const truncated = parseFloat(n.toFixed(MAX_DIGITS)).toString()
    return truncated.length > MAX_DIGITS ? truncated.slice(0, MAX_DIGITS) : truncated
  }
  return str
}

export function useCalculator () {
  const [display, setDisplay] = useState('0')
  const [stored, setStored] = useState<number | null>(null)
  const [operator, setOperator] = useState<Operator>(null)
  const [waitingForOperand, setWaitingForOperand] = useState(false)

  const handleDigit = (digit: string) => {
    if (display === 'ERROR') return
    const current = waitingForOperand ? '' : display === '0' ? '' : display
    if (current.replace('.', '').replace('-', '').length >= MAX_DIGITS) return
    setDisplay(current + digit)
    setWaitingForOperand(false)
  }

  const handleDecimal = () => {
    if (display === 'ERROR') return
    const current = waitingForOperand ? '0' : display
    if (current.includes('.')) return
    if (current.length >= MAX_DIGITS) return
    setDisplay(current + '.')
    setWaitingForOperand(false)
  }

  const handleOperator = (op: Operator) => {
    if (display === 'ERROR') return
    const current = parseFloat(display)
    if (stored !== null && operator && !waitingForOperand) {
      const result = calculate(stored, current, operator)
      setDisplay(result)
      setStored(result === 'ERROR' ? null : parseFloat(result))
    } else {
      setStored(current)
    }
    setOperator(op)
    setWaitingForOperand(true)
  }

  const calculate = (a: number, b: number, op: Operator): string => {
    if (op === '+') return formatResult(a + b)
    if (op === '-') return formatResult(a - b)
    if (op === '*') return formatResult(a * b)
    return formatResult(b)
  }

  const handleEquals = () => {
    if (display === 'ERROR' || stored === null || operator === null) return
    const result = calculate(stored, parseFloat(display), operator)
    setDisplay(result)
    setStored(null)
    setOperator(null)
    setWaitingForOperand(true)
  }

  const handleClear = () => {
    setDisplay('0')
    setStored(null)
    setOperator(null)
    setWaitingForOperand(false)
  }

  return { display, handleDigit, handleDecimal, handleOperator, handleEquals, handleClear, operator }
}
