import React from 'react';
import styles from './answers.less';

const Answers = props => {
  const { isOpen, firstAnswer, secondAnswer, answers } = props;
  console.log(answers)
  if(isOpen) {
    return (
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
    )
  }
  return null;
};


export default Answers;
