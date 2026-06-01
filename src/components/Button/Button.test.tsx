import { render, screen } from '@testing-library/react'
import Button from './Button'

describe('Button', () => {
  it('renderiza el label correctamente', () => {
    render(<Button label="7" onClick={() => undefined} />)
    expect(screen.getByText('7')).toBeTruthy()
  })
})