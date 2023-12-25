// Skills.js
import React from 'react';
import styles from './Skills.module.css';

const Skills = () => {
    const skills = ['JavaScript', 'React', 'Node.js', 'CSS', 'HTML', 'Git', 'Other Skills'];

    return (
        <section className={styles.skills}>
            <h2>Skills</h2>
            <ul>
                {skills.map(skill => <li key={skill}>{skill}</li>)}
            </ul>
        </section>
    );
}

export default Skills;
