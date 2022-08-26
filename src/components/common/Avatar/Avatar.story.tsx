import React from 'react';
import { ComponentMeta } from '@storybook/react';
import Avatar from './Avatar';
import { AvatarProps } from './Avatar.types';

export default {
    title: 'Avatar',
    component: Avatar,
} as ComponentMeta<typeof Avatar>;

export const Primary = (args: AvatarProps) => <Avatar {...args} />;
