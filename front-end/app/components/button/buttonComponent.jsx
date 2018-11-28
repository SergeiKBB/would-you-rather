import React from 'react';
import styles from './button.less';

const Button = props => {
    const { text, type = 'button' } = props;
    return <button className={styles.btn} type={type}>{text}</button>
}

export default Button;
