import type { KeyDef } from '../components/Keyboard/Keyboard'
import type { KeyConfig } from './keys'
import type { useCalculator } from '../hooks/useCalculator'

type CalcAPI = ReturnType<typeof useCalculator>

export function buildKeys (configs: KeyConfig[], calc: CalcAPI): KeyDef[] {
  return configs.map((k) => ({
    label: k.label,
    variant: k.variant,
    action: k.type === 'digit' ? () => calc.handleDigit(k.label)
      : k.type === 'decimal' ? calc.handleDecimal
        : k.type === 'op' ? () => calc.handleOperator(k.label as '+' | '-' | '*')
          : k.type === 'equals' ? calc.handleEquals : calc.handleClear
  }))
}
