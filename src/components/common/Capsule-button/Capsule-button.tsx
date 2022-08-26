import React, { ReactElement } from 'react';
import { ButtonProps } from './Capsule-button.types';
import styles from './Capsule-button.module.css';
/**
 * @commonComponent
 * @param {ButtonProps} props props of the button component
 * @returns {ReactElement} Button component
 */
const Button = (props: ButtonProps): ReactElement => (
    <div className={styles['container']}>{props.text}</div>
);

export default Button;
