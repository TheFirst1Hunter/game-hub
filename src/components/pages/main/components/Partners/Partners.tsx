import React, { ReactElement } from 'react';
import styles from './Partners.module.css';
/**
 * @commonComponent
 * @returns {ReactElement} partners and contributors
 */
const Partners = (): ReactElement => (
    <div>
        <p>partners and contributors</p>
        <div className={styles.container}>
            <img
                src={'https://dummyimage.com/500x500/fff/aaa'}
                style={{ width: '30%', height: '30%' }}
            />
            <img
                src={'https://dummyimage.com/500x500/fff/aaa'}
                style={{ width: '30%', height: '30%' }}
            />
            <img
                src={'https://dummyimage.com/500x500/fff/aaa'}
                style={{ width: '30%', height: '30%' }}
            />
            <img
                src={'https://dummyimage.com/500x500/fff/aaa'}
                style={{ width: '30%', height: '30%' }}
            />
        </div>
    </div>
);

export default Partners;
