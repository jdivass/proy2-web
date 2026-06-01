import Button from '../Button/Button'
import type { ButtonVariant } from '../Button/Button'
import './Keyboard.css'

export interface KeyDef { label: string; variant: ButtonVariant; action: () => void }

function Keyboard ({ keys }: { keys: KeyDef[] }) {
  return (
    <div className="calc-keyboard" role="group" aria-label="calculator keys">
      {keys.map((k) => (
        <Button key={k.label} label={k.label} variant={k.variant} onClick={k.action} />
      ))}
    </div>
  )
}

export default Keyboard
