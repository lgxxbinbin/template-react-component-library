import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import NVTooltip from './NVTooltip'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ReactComponentLibrary/NVTooltip',
  component: NVTooltip,
} as ComponentMeta<typeof NVTooltip>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NVTooltip> = (args) => (
  <NVTooltip {...args}></NVTooltip>
)

export const BasicTooltip = Template.bind({})
BasicTooltip.args = {
  title: 'Custom Tooltip Delete',
}
