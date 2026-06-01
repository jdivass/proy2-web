import './Display.css'

interface Props {
  value: string
  operator?: string | null
}

function Display ({ value, operator }: Props) {
  const isError = value === 'ERROR'
  return (
    <div className="calc-display" aria-label="calculator display" role="status">
      <span className="calc-display__operator">{operator ?? ''}</span>
      <span className={`calc-display__value${isError ? ' calc-display__value--error' : ''}`}>
        {value}
      </span>
    </div>
  )
}

export default Display
