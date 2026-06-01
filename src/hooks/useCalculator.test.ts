import { renderHook, act } from '@testing-library/react'
import { useCalculator } from './useCalculator'

type HookResult = ReturnType<typeof renderHook<ReturnType<typeof useCalculator>, unknown>>['result']

const pressDigits = (result: HookResult, digits: string) => {
  for (const d of digits.split('')) {
    act(() => { result.current.handleDigit(d) })
  }
}

describe('useCalculator', () => {
  it('concatena dígitos al presionarlos en secuencia', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => { result.current.handleDigit('4') })
    act(() => { result.current.handleDigit('2') })
    expect(result.current.display).toBe('42')
  })

  it('ignora el décimo dígito — límite es 9 caracteres', () => {
    const { result } = renderHook(() => useCalculator())
    pressDigits(result, '123456789')
    act(() => { result.current.handleDigit('0') })
    expect(result.current.display).toBe('123456789')
    expect(result.current.display.length).toBe(9)
  })

  it('muestra ERROR cuando el resultado de una resta es negativo', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => { result.current.handleDigit('3') })
    act(() => { result.current.handleOperator('-') })
    act(() => { result.current.handleDigit('9') })
    act(() => { result.current.handleEquals() })
    expect(result.current.display).toBe('ERROR')
  })

  it('muestra ERROR cuando el resultado supera 999999999', () => {
    const { result } = renderHook(() => useCalculator())
    pressDigits(result, '999999999')
    act(() => { result.current.handleOperator('+') })
    act(() => { result.current.handleDigit('1') })
    act(() => { result.current.handleEquals() })
    expect(result.current.display).toBe('ERROR')
  })

  it('calcula el resultado acumulado al encadenar operaciones', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => { result.current.handleDigit('5') })
    act(() => { result.current.handleOperator('+') })
    act(() => { result.current.handleDigit('3') })
    act(() => { result.current.handleOperator('+') })
    expect(result.current.display).toBe('8')
    act(() => { result.current.handleDigit('2') })
    act(() => { result.current.handleEquals() })
    expect(result.current.display).toBe('10')
  })
}) 