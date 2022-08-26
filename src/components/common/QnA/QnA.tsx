import React, { ReactElement, useState, CSSProperties } from 'react';
import { QnAProps } from './QnA.types';
import styles from './QnA.module.css';
/**
 * @commonComponent
 * @param {QnAProps} props props of the QnA component
 * @returns {ReactElement} QnA component
 */
const QnA = (props: QnAProps): ReactElement => {
    const [isOpened, setIsOpened] = useState<boolean>(false);

    const answerStyle: CSSProperties = {
        display: isOpened ? 'block' : 'none',
        fontSize: '1rem',
    };

    return (
        <div className={styles.container}>
            <h6 onClick={() => setIsOpened(() => !isOpened)}>
                {isOpened ? 'v       ' : '>      '} {props.question}
            </h6>
            <p style={answerStyle}>{props.answer}</p>
        </div>
    );
};

export default QnA;
