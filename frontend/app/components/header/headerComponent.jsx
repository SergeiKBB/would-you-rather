import React from 'react';
import styles from './header.less';

const Header = props => {
    const { title, children } = props;
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>{title}</h1>
            {children}
        </header>
    );
}


export default Header;
