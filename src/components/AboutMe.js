// AboutMe.js
import React from 'react';
import styles from './AboutMe.module.css'; // Import the CSS module

const AboutMe = () => {
    return (
        <section className={styles.aboutMe}>
            <h2>About Me</h2>
            <p>
                Brief introduction about yourself. Highlight your interests, what you are passionate about, and your professional approach or philosophy.
            </p>
        </section>
    );
}

export default AboutMe;
