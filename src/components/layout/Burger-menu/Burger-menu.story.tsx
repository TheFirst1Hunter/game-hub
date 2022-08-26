import React from 'react';
import { ComponentMeta } from '@storybook/react';
import BurgerMenu from './Burger-menu';

export default {
    title: 'Burger-menu',
    component: BurgerMenu,
} as ComponentMeta<typeof BurgerMenu>;

export const Primary = () => <BurgerMenu />;
