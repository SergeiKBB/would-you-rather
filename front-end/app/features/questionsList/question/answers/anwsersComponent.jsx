import React from 'react';
import styles from './answers.less';

const Answer = props => {
  const {answer, handleAnswer} = props;
  return (
    <label className={styles.answers__item}><input
      className={styles.input}
      type='radio'
      value={answer}
      name='answers'
      onClick={handleAnswer}
    />{answer}</label>
  )
};


export default Answer;
