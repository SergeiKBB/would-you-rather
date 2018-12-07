import React from 'react';
import styles from './answers.less';
import Stats from "../stats/statsComponent";

const Answer = props => {
  const {answer, handleAnswer, percent} = props;
  return (
    <React.Fragment>
      <label className={styles.answers__item}><input
        className={styles.input}
        type='radio'
        value={answer}
        name='answers'
        onClick={handleAnswer}
      />{answer}</label>
      <Stats percent={percent}/>
    </React.Fragment>
  )
};

export default Answer;
