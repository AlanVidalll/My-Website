import { Meta, Story } from '@storybook/react'
import Heading, { HeadingProps } from './index'

export default {
  title: 'Heading',
  component: Heading,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Basic: Story<HeadingProps> = (args) => (
  <Heading {...args}>Heading</Heading>
)
