import React from 'react';
import styles from './preloader.less';

const Preloader = props => {
  return (
    <div className={styles.preloader_wrapper}>
      <div id={styles.fountainG}>
        <div id={styles.fountainG_1} className={styles.fountainG}></div>
        <div id={styles.fountainG_2} className={styles.fountainG}></div>
        <div id={styles.fountainG_3} className={styles.fountainG}></div>
        <div id={styles.fountainG_4} className={styles.fountainG}></div>
        <div id={styles.fountainG_5} className={styles.fountainG}></div>
        <div id={styles.fountainG_6} className={styles.fountainG}></div>
        <div id={styles.fountainG_7} className={styles.fountainG}></div>
        <div id={styles.fountainG_8} className={styles.fountainG}></div>
      </div>
    </div>
  )
};

export default Preloader;

