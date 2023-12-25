// Header.js
import React from 'react';
import styles from './Header.module.css'; // Import the CSS module

const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Your Name</h1>
            <p className={styles.contact}>Email: your.email@example.com</p>
        </header>
    );
}

export default Header;
