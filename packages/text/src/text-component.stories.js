import TextComponent from './text-component.vue';

export default {
  title: 'Ruffus/Text',
  component: TextComponent,
  argTypes: {
    text: {
        name: 'text',
        type: { name: 'string', required: false },
        defaultValue: 'Hello World',
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TextComponent },
  template:
    '<text-component v-bind="$props"" />',
});

export const LongText = Template.bind({});
LongText.args = {
    text: 'Example Example Example Example'
};

export const ShortText = Template.bind({});
ShortText.args = {
    text: 'Example'
};
