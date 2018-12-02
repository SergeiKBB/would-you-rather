import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './button.less';

const ButtonComponent = props => {
    const { text, type = 'button' } = props;
    return <Button className={styles.btn} variant='primary' type={type}>{text}</Button>
}

export default ButtonComponent;
