import React from 'react';
import { Avatar, QnA } from '@components/common';
import { SectionHeader } from './components';
import styles from './Incubator.module.css';
import { avatars, questions } from './Incubator.data';

const Incubator = () => (
    <div>
        <SectionHeader />

        <br />
        <br />

        <div className={styles['padding-container']}>
            <h1>mentors</h1>
            <div className={styles.container}>
                {avatars.map((avatar) => (
                    <Avatar
                        name={avatar.name}
                        text={avatar.text}
                        img={avatar.img}
                    />
                ))}
            </div>

            <br />
            <br />
            <br />
            <br />

            <div>
                <h2>supported tracks</h2>
                <p>
                    Game Hub is designed solely for the development of digital
                    games in one of the following tracks:
                </p>
                <div className={styles['supported-tracks']}>
                    <div className={styles['track-item']}>
                        <h2>dwf</h2>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Distinctio illo eveniet id, hic explicabo esse
                            quidem veniam placeat natus minus blanditiis tenetur
                            sequi facere? Iure vero quidem adipisci
                            necessitatibus expedita!
                        </p>
                    </div>

                    <div className={styles['track-item']}>
                        <h2>dwf</h2>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Distinctio illo eveniet id, hic explicabo esse
                            quidem veniam placeat natus minus blanditiis tenetur
                            sequi facere? Iure vero quidem adipisci
                            necessitatibus expedita!
                        </p>
                    </div>

                    <div className={styles['track-item']}>
                        <h2>dwf</h2>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Distinctio illo eveniet id, hic explicabo esse
                            quidem veniam placeat natus minus blanditiis tenetur
                            sequi facere? Iure vero quidem adipisci
                            necessitatibus expedita!
                        </p>
                    </div>

                    <div className={styles['track-item']}>
                        <h2>dwf</h2>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Distinctio illo eveniet id, hic explicabo esse
                            quidem veniam placeat natus minus blanditiis tenetur
                            sequi facere? Iure vero quidem adipisci
                            necessitatibus expedita!
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className={styles['QnA-container']}>
            <div>
                <h1>
                    Q&A
                    {questions.map((qna) => (
                        <QnA
                            question={qna.question}
                            answer={qna.answer}
                        />
                    ))}
                </h1>
            </div>
        </div>
    </div>
);

export default Incubator;
