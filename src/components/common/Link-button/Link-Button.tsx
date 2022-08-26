import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { LinkButtonProps } from './Link-Button.types';
import styles from './Link-Button.module.css';

/**
 * @param {LinkButtonProps} props object pass the button text and the link
 * @returns {ReactElement} Link button
 */
const LinkButton = (props: LinkButtonProps): ReactElement => (
    <div
        className={styles.container}
        style={{ width: props.width, height: props.hight }}>
        <Link
            to={props.link}
            onClick={() => {
                props.onClick ? props.onClick() : {};
            }}>
            <p style={{ textAlign: 'center' }}>{props.text}</p>
        </Link>
    </div>
);

export default LinkButton;
