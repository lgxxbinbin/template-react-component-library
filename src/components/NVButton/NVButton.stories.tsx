import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import NVButton from './NVButton'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ReactComponentLibrary/NVButton',
  component: NVButton,
} as ComponentMeta<typeof NVButton>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NVButton> = (args) => (
  <NVButton {...args}>Nova Outlined</NVButton>
)

export const Outlined = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Outlined.args = {
  variant: 'outlined',
  defaultValue: 30,
}
