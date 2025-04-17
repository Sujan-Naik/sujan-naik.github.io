import type {Meta, StoryObj} from '@storybook/react';

import NavLinks from './nav-links';

const meta = {
    component: NavLinks,
} satisfies Meta<typeof NavLinks>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        projectNames: []
    }
};