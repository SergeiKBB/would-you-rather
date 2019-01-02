import React from 'react';
import PropTypes from 'prop-types';
import styles from './header.less';

const Header = props => {
    const { title, children } = props;
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>{title}</h1>
          <div className={styles.buttons_wrapper}>
            {children}
          </div>
        </header>
    );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object
};


export default Header;
