import React from 'react';
import PropTypes from 'prop-types';
import styles from './answers.less';
import Stats from "./stats/StatsComponent";

const Answer = props => {
  const {answer, handleAnswer, percent, checked, positionAnswer} = props;
  if (checked) {
    return (
      <React.Fragment>
        <label className={styles.answers__item}><input
          className={styles.input}
          type='radio'
          value={answer}
          name='answers'
          onClick={handleAnswer}
          disabled={true}
          checked={positionAnswer}
        />{answer}</label>
        <Stats percent={percent}/>
      </React.Fragment>
    )
  }
  return (
    <React.Fragment>
      <label className={styles.answers__item}><input
        className={styles.input}
        type='radio'
        value={answer}
        name='answers'
        onClick={handleAnswer}
      />{answer}</label>
    </React.Fragment>
  )
};

Answer.propTypes = {
  answer: PropTypes.string.isRequired,
  handleAnswer: PropTypes.func.isRequired,
  percent: PropTypes.number.isRequired,
};

export default Answer;
