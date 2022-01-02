import { Meta, Story } from '@storybook/react'
import Head from './index'

export default {
  title: 'Head',
  component: Head
} as Meta

export const Basic: Story = (args) => <Head {...args} />
