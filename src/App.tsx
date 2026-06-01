import { useCalculator } from './hooks/useCalculator'
import Display from './components/Display/Display'
import Keyboard from './components/Keyboard/Keyboard'
import { KEY_CONFIG } from './config/keys'
import { buildKeys } from './config/buildKeys'
import './App.css'

function App () {
  const calc = useCalculator()
  return (
    <main className="casio-calculator" aria-label="CASIO calculator">
      <div className="casio-brand">CASIO</div>
      <Display value={calc.display} operator={calc.operator} />
      <Keyboard keys={buildKeys(KEY_CONFIG, calc)} />
    </main>
  )
}

export default App
