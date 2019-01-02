import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.less';

const ButtonComponent = props => {
    const { text, type = 'button', className = '' } = props;
    return <button className={`${styles.btn} btn btn-primary ${className}`} type={type}>{text}</button>
};

ButtonComponent.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string
};

export default ButtonComponent;
