import React from 'react';
import { Form } from 'react-bootstrap';
import styles from './answers.less';

const Answers = props => {
  const { isOpen, question: { id, firstAnswer, secondAnswer }, addAnswer } = props;
  if(isOpen) {
    return (
      <div className={styles.answers}>
        <label className={styles.answers__item}><input
          className={styles.input}
          type='radio'
          value={firstAnswer}
          name='answers'
          onClick={handleAnswer.bind(null, addAnswer, {
            id,
            firstAnswer: 1,
            secondAnswer: 0
          })}
        />{firstAnswer}</label>
        <label className={styles.answers__item}><input
          className={styles.input}
          type='radio'
          value={secondAnswer}
          name='answers'
          onClick={handleAnswer.bind(null, addAnswer, {
            id,
            firstAnswer: 0,
            secondAnswer: 1
          })}
        />{secondAnswer}</label>
      </div>
    )
  }
  return null;
};

const handleAnswer = (func, answer) => {
  func(answer);
};



export default Answers;
