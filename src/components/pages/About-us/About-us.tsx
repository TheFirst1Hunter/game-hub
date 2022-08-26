import React from 'react';
import { Avatar } from '@components/common';
import styles from './About-us.module.css';

const Incubator = () => (
    <div>
        <div className={styles['text-container']}>
            <h1 className={styles['text-width']}>
                Game Hub is a community space and the first incubator for
                independent game developers in Israel.
            </h1>
            <p className={styles['text-width']}>
                The Game Hub was founded in 2022 to promote indie game
                developers in Israel. Games are the largest and most profitable
                entertainment sector in the world, and yet it was not until
                recent years that the field received recognition and
                governmental support similar to the assistance granted to other
                art and entertainment sectors. The goal of the Game Hub is the
                development of indie games in Israel, encouraging small teams to
                create computer games with cultural and artistic value, directed
                at extremely small and specific audiences. We provide financial
                support with mentors and consulting from leading professionals,
                taking place in the open plan workspace in the historic former
                Shaare Zedek Hospital building in Jerusalem. We hope that the
                work taking place in the Game Hub will, in the long term, create
                new jobs, workplaces, investment opportunities for local and
                international investors, corporate growth, and the development
                of professional and academic training programs.
            </p>
        </div>

        <hr />

        <div className={styles['team-container']}>
            <Avatar
                name='person1'
                text='game dev'
                img=''
                twitter=''
                linkedIn=''
            />

            <Avatar
                name='person2'
                text='game designer'
                img=''
                twitter=''
                linkedIn=''
            />
        </div>
    </div>
);

export default Incubator;
