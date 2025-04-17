import type {Meta, StoryObj} from '@storybook/react';

import ContactMe from './contact-me';

const meta = {
    component: ContactMe,
} satisfies Meta<typeof ContactMe>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {}
};