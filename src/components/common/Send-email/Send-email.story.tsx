import React from 'react';
import { ComponentMeta } from '@storybook/react';
import SendEmail from './Send-email';

export default {
    title: 'Send-email',
    component: SendEmail,
} as ComponentMeta<typeof SendEmail>;

export const Primary = () => <SendEmail />;
