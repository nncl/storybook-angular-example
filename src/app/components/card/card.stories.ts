
import type { Meta, StoryObj } from '@storybook/angular';

import { CardComponent } from './card.component';

const meta: Meta<CardComponent> = {
  title: 'Components/Card',
  component: CardComponent,
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
  render: (args: CardComponent) => ({
    props: {
      ...args,
      color: args.color,
    },
    template: '<app-card [color]="color">Hello world</app-card>',
  }),
  argTypes: {
    color: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<CardComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Default: Story = {
  args: {
    color: '#a00'
  },
};
