import type { Meta, StoryObj } from '@storybook/react-vite'
import Button from './Button'

const meta: Meta<typeof Button> = {
  title: 'Calculator/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
}

export default meta
type Story = StoryObj<typeof Button>

export const Digit: Story = {
  args: { label: '7', variant: 'digit' }
}

export const Operator: Story = {
  args: { label: '+', variant: 'operator' }
}

export const Action: Story = {
  args: { label: 'C', variant: 'action' }
}

export const Equals: Story = {
  args: { label: '=', variant: 'equals' }
}
