import React, { ReactElement } from 'react';
import { CapsuleButton, SendEmail } from '@components/common';
import { SectionHeader, Partners } from './components';

import styles from './Main.module.css';

/**
 * @pagesComponent
 * @return  {ReactElement} returns the main page
 */
const Main = (): ReactElement => (
    <div>
        <SectionHeader />
        <br />
        <br />
        <div className={styles['who-we-are']}>
            <b>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Explicabo similique debitis quam vitae deserunt. Quia quos
                voluptates harum, velit saepe accusantium consequatur
                exercitationem sequi nihil ad fugit. Praesentium, atque veniam?
            </b>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                quae quasi reprehenderit error sit iste, sequi natus corporis
                fugit velit doloremque architecto aliquid cum impedit harum
                beatae, rerum blanditiis aliquam.
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
                excepturi optio commodi maxime tenetur! Atque illum magni
                tempore vitae enim. Enim debitis dolorem praesentium error saepe
                quasi vel delectus a!
            </p>
        </div>
        <Partners />
        <div className={styles['first-cycle']}>
            <p style={{ color: 'wheat' }}>first iraqi game dev cycle</p>

            <CapsuleButton text='see our games' />
        </div>
        <br />
        <br />
        <br />
        <div className={styles['send-email']}>
            <p>send us an email to make you subscribe to our service!</p>
            <SendEmail />
        </div>
        <div>
            <h2>about the location</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                eum pariatur at voluptates dolore, optio aspernatur repudiandae
                cumque. Modi iste ab nisi necessitatibus totam, quidem excepturi
                neque temporibus cupiditate possimus!
            </p>
        </div>
        <br />
        <br />

        {/* Location images*/}
        <div className={styles['flex-warp-container']}>
            <img
                style={{ width: '300px', height: '300px' }}
                src='https://dummyimage.com/640x360/fff/aaa'
                alt='iraqi game hub map'
            />
            <img
                style={{ width: '300px', height: '300px' }}
                src='https://dummyimage.com/640x360/fff/aaa'
                alt='iraqi game hub map'
            />
            <img
                style={{ width: '300px', height: '300px' }}
                src='https://dummyimage.com/640x360/fff/aaa'
                alt='iraqi game hub map'
            />
            <img
                style={{ width: '300px', height: '300px' }}
                src='https://dummyimage.com/640x360/fff/aaa'
                alt='iraqi game hub map'
            />
            <img
                style={{ width: '300px', height: '300px' }}
                src='https://dummyimage.com/640x360/fff/aaa'
                alt='iraqi game hub map'
            />
        </div>

        {/* Map location*/}
        <div>
            <p>our location</p>
            <img
                style={{ width: '50%', height: '50%' }}
                src='https://dummyimage.com/640x360/fff/aaa'
                alt='iraqi game hub map'
            />
        </div>
    </div>
);

export default Main;
