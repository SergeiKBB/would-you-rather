import React from 'react';
import styles from './question.less';

const Question = (props) => {
  const {question, firstAnswer, secondAnswer} = props.question;
  const finalQuestion = question[question.length - 1] === '?' ? question : question + '?';
  return (
    <div>
      <form className={styles.form}>
        <h2 className={styles.question}>{finalQuestion}</h2>
        <div className={styles.answers}>
          <label className={styles.answers__item}><input
            className={styles.input}
            type='radio'
            value={firstAnswer}
            name='answers'
          />{firstAnswer}</label>
          <label className={styles.answers__item}><input
            className={styles.input}
            type='radio'
            value={secondAnswer}
            name='answers'
          />{secondAnswer}</label>
        </div>
      </form>
    </div>
  )
}

export default Question;
