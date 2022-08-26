import React, { ReactElement, useState, CSSProperties } from 'react';
import { LinkButton } from '@components/common';
import { reactLogo } from '@assets';
import styles from './Burger-menu.module.css';
/**
 * @layoutComponent
 * @returns {ReactElement} Header layout component
 */
const Header = (): ReactElement => {
    const [activated, setActivated] = useState<boolean>(false);

    const container: CSSProperties = {
        display: activated ? 'block' : 'none',
        backgroundColor: 'wheat',
        position: 'fixed',
        width: '100%',
        height: '25vh',
        top: '49px',
    };

    const onClick = () => {
        setActivated(!activated);
        console.log(activated);
    };

    return (
        <div className={styles.container}>
            <button onClick={() => setActivated(!activated)}>
                <img src={reactLogo} />
            </button>
            <div style={container}>
                <div className={styles['flex-container']}>
                    <LinkButton
                        text='home'
                        link='/'
                        width='100%'
                        hight='50px'
                        onClick={onClick}
                    />
                    <LinkButton
                        text='about us'
                        link='/about-us'
                        width='100%'
                        hight='50px'
                        onClick={onClick}
                    />
                    <LinkButton
                        text='incubator'
                        link='/incubator'
                        width='100%'
                        hight='50px'
                        onClick={onClick}
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;
