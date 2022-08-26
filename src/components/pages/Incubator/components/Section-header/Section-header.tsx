import React, { ReactElement } from 'react';
import styles from './Section-header.module.css';
/**
 * @commonComponent
 * @returns {ReactElement} section header
 */
const SectionHeader = (): ReactElement => (
    <div className={styles.container}>
        <div className={styles['container-content']}>
            <h1>Incubator</h1>
            <p style={{ textAlign: 'center' }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quaerat nihil dicta vel deserunt dolore, iste inventore est fuga
                ex quas voluptas explicabo iusto ratione nostrum nulla sequi
                necessitatibus labore velit.
            </p>
        </div>
    </div>
);

export default SectionHeader;
