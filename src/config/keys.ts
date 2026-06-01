import type { ButtonVariant } from '../components/Button/Button'

export interface KeyConfig { label: string; variant: ButtonVariant; type: string }

export const KEY_CONFIG: KeyConfig[] = [
  { label: 'C', variant: 'action', type: 'clear' },
  { label: '+', variant: 'operator', type: 'op' },
  { label: '-', variant: 'operator', type: 'op' },
  { label: '*', variant: 'operator', type: 'op' },
  { label: '7', variant: 'digit', type: 'digit' },
  { label: '8', variant: 'digit', type: 'digit' },
  { label: '9', variant: 'digit', type: 'digit' },
  { label: '4', variant: 'digit', type: 'digit' },
  { label: '5', variant: 'digit', type: 'digit' },
  { label: '6', variant: 'digit', type: 'digit' },
  { label: '1', variant: 'digit', type: 'digit' },
  { label: '2', variant: 'digit', type: 'digit' },
  { label: '3', variant: 'digit', type: 'digit' },
  { label: '.', variant: 'digit', type: 'decimal' },
  { label: '0', variant: 'digit', type: 'digit' },
  { label: '=', variant: 'equals', type: 'equals' }
]
