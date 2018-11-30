import React from 'react';
import styles from './stats.less';

const Stats = (props) => {
  const { isOpen, stats: { firstAnswer, secondAnswer} } = props;
  const statsComponent = isOpen
    ? <div className={styles.stats__wrapper}>
        <span className={styles.stats__item}>{calcPercent( firstAnswer, secondAnswer, true )}%</span>
        <span className={styles.stats__item}>{calcPercent( firstAnswer, secondAnswer)}%</span>
      </div>
    : null;
  return statsComponent;
};

const calcPercent = (firstAnswer, secondAnswer, which) => {
  const sum = Number(firstAnswer) + Number(secondAnswer);
  if(which) {
    return Math.round(firstAnswer/sum*100);
  }

  return Math.round(secondAnswer/sum*100);
};

export default Stats;
