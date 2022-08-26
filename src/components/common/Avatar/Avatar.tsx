import React, { ReactElement } from 'react';
import { AvatarProps } from './Avatar.types';
import styles from './Avatar.module.css';
/**
 * @commonComponent
 * @param {AvatarProps} props props of the Avatar component
 * @returns {ReactElement} Avatar component
 */
const Avatar = (props: AvatarProps): ReactElement => (
    <div className={styles.container}>
        <img
            className={styles['avatar-img']}
            src={props.img}
        />
        <h2>{props.name}</h2>
        <h4>{props.text}</h4>
    </div>
);

export default Avatar;
