// Experience.js
import React from 'react';
import styles from './Experience.module.css'; // Import the CSS module

const Experience = () => {
    const experiences = [
        // ... your experience data
    ];

    return (
        <section className={styles.experience}>
            <h2>Experience</h2>
            {experiences.map(exp => (
                <div key={exp.id} className={styles.job}>
                    <h3>{exp.title} - {exp.company}</h3>
                    <p className={styles.year}>{exp.year}</p>
                    <p>{exp.description}</p>
                </div>
            ))}
        </section>
    );
}

export default Experience;
