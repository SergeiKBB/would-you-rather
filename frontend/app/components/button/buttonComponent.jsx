import React from 'react';
import styles from './button.less';

const ButtonComponent = props => {
    const { text, type = 'button' } = props;
    return <button className={`${styles.btn} btn btn-primary`} type={type}>{text}</button>
};

export default ButtonComponent;
