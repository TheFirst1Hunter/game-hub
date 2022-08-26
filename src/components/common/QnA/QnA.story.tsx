import React from 'react';
import { ComponentMeta } from '@storybook/react';
import QnA from './QnA';
import { QnAProps } from './QnA.types';

export default {
    title: 'QnA',
    component: QnA,
} as ComponentMeta<typeof QnA>;

export const Primary = (args: QnAProps) => <QnA {...args} />;
