import React from 'react';
import { ComponentMeta } from '@storybook/react';
import Partners from './Partners';

export default {
    title: 'partners-and-contributors',
    component: Partners,
} as ComponentMeta<typeof Partners>;

export const Primary = () => <Partners />;
