import React, { ReactElement } from 'react';
import styles from './Section-header.module.css';
/**
 * @commonComponent
 * @returns {ReactElement} section header
 */
const SectionHeader = (): ReactElement => (
    <div className={styles.container}>
        <h1>the space of iraqi indie devs</h1>
        <div>
            <p>keep in touch</p>
            <div></div>
        </div>
    </div>
);

export default SectionHeader;
