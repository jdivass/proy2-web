import type { Meta, StoryObj } from '@storybook/react-vite'
import Display from './Display'

const meta: Meta<typeof Display> = {
  title: 'Calculator/Display',
  component: Display,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark' }
  },
  decorators: [
    (Story) => (
      <div style={{ width: '204px' }}>
        <Story />
      </div>
    )
  ]
}

export default meta
type Story = StoryObj<typeof Display>

export const Default: Story = {
  args: { value: '0', operator: null }
}

export const WithOperator: Story = {
  args: { value: '123', operator: '+' }
}

export const LongNumber: Story = {
  args: { value: '999999999', operator: null }
}

export const ErrorState: Story = {
  args: { value: 'ERROR', operator: null }
}
