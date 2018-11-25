import React from 'react';
import styles from './question.less';

const Question = (props) => {
    const { question, firstAnswer, secondAnswer } = props;
    return (
        <div>
            <form className={styles.form}>
                <h2 className={styles.question}>{question}</h2>
                <div className={styles.answers}>
                    <button type='submit' className={styles.btn}>{firstAnswer}</button>
                    <button type='submit' className={styles.btn}>{secondAnswer}</button>
                    <input
                        type='radio'
                        value={this.state}
                        />
                </div>
            </form>
        </div>
    )
}

export default Question;