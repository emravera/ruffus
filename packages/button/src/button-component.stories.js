import ButtonComponent from './button-component.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Ruffus/Button',
  component: ButtonComponent,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    text: {
        name: 'text',
        type: { name: 'string', required: false }
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ButtonComponent },
  template: '<button-component v-bind="$props" />',
});

export const ShortText = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
ShortText.args = {
  text: 'Example'
};

export const LongText = Template.bind({});
LongText.args = {
  text: 'Example Example Example Example'
};

export const NoText = Template.bind({});
LongText.args = {
  text: ''
};
