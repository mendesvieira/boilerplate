import { Meta, Story } from '@storybook/react/types-6-0'

import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Boilerplate',
    description:
      'Feito em NextJS, TypeScript, Storybook, Styled Components e muito mais'
  }
} as Meta

export const Default: Story = (args) => <Main {...args} />
