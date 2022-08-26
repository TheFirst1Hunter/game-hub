import React from 'react';
import { ComponentMeta } from '@storybook/react';
import SectionHeader from './Section-header';

export default {
    title: 'Section-header',
    component: SectionHeader,
} as ComponentMeta<typeof SectionHeader>;

export const Primary = () => <SectionHeader />;
