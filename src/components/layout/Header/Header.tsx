import React, { ReactElement } from 'react';
import { LinkButton } from '@components/common';
import { reactLogo } from '@assets';
import styles from './Header.module.css';

/**
 * @layoutComponent
 * @returns {ReactElement} Header layout component
 */
const Header = (): ReactElement => (
    <div className={styles.container}>
        <img
            className={styles['flex-grow']}
            src={reactLogo}
        />
        <span className={styles['flex-grow']}></span>

        <span className={styles['flex-grow']}>
            <LinkButton
                text='home'
                link='/'
                width=''
                hight=''
            />
        </span>

        <span className={styles['flex-grow']}></span>

        <span className={styles['flex-grow']}>
            <LinkButton
                text='about us'
                link='/about-us'
                width=''
                hight=''
            />
        </span>

        <span className={styles['flex-grow']}></span>

        <span className={styles['flex-grow']}>
            <LinkButton
                text='incubator'
                link='/incubator'
                width=''
                hight=''
            />
        </span>
    </div>
);

export default Header;
