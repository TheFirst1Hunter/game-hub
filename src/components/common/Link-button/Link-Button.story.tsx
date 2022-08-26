import React from 'react';
import { ComponentMeta } from '@storybook/react';
import Button from './Link-Button';
import { LinkButtonProps } from './Link-Button.types';
import styles from './Link-Button.module.css';

export default {
    title: 'Link-Button',
    component: Button,
} as ComponentMeta<typeof Button>;

export const Primary = (args: LinkButtonProps) => (
    <div className={styles.container}>
        <Button {...args} />
    </div>
);
