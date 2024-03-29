// Button.stories.js|jsx

import React from 'react';

import Button from './Button';

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Workshop/Button',
    component: Button,
    argTypes: {
      backgroundColor: { control: 'color' }
    },
    args: {
      label: 'Button',
      primary: true,
    }
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Button {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
}

export const Secondary = Template.bind({});
Secondary.args = {
    primary: false,
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};

export const PrimaryLongName = Template.bind({});
PrimaryLongName.args = {
  label: 'Primary with a really long name',
};
