import React, { ReactElement } from 'react';
import { SendEmail } from '@components/common';

import styles from './Footer.module.css';

/**
 * @layoutComponent
 * @returns {ReactElement} Footer layout component
 */
const Footer = (): ReactElement => (
    <div>
        <hr />
        <div className={styles.container}>
            <img
                src={'https://dummyimage.com/500x500/fff/aaa'}
                style={{ width: '10%', height: '10%' }}
            />

            <b>The space for indie game developers in Iraq</b>

            <div>
                <h6>contact us</h6>
                <br />
                <p>----------------</p>
                <p>info@game-hub.com</p>
            </div>

            <SendEmail />
        </div>
    </div>
);

export default Footer;
