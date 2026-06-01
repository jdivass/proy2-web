import type { Meta, StoryObj } from '@storybook/react-vite'
import Keyboard from './Keyboard'
import type { KeyDef } from './Keyboard'

const meta: Meta<typeof Keyboard> = {
  title: 'Calculator/Keyboard',
  component: Keyboard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark' }
  },
  decorators: [
    (Story) => (
      <div style={{ width: '204px', padding: '12px', background: '#a8a8a8', borderRadius: '8px' }}>
        <Story />
      </div>
    )
  ]
}

export default meta
type Story = StoryObj<typeof Keyboard>

const makeKeys = (labels: string[]): KeyDef[] => labels.map((label) => ({
  label,
  variant: ['C'].includes(label) ? 'action' : ['+', '-', '*'].includes(label) ? 'operator'
    : label === '=' ? 'equals' : 'digit',
  action: () => undefined
}))

export const Full: Story = {
  args: {
    keys: makeKeys(['C', '+', '-', '*', '7', '8', '9', '4', '5', '6', '1', '2', '3', '.', '0', '='])
  }
}

export const OperatorsOnly: Story = {
  args: {
    keys: makeKeys(['+', '-', '*', '='])
  }
}
