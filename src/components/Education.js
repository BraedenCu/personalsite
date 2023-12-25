// Education.js
import React from 'react';
import styles from './Education.module.css'; // Import the CSS module

const Education = () => {
    const educations = [
        // ... your education data
    ];

    return (
        <section className={styles.education}>
            <h2>Education</h2>
            {educations.map(edu => (
                <div key={edu.id} className={styles.educationEntry}>
                    <h3>{edu.degree}</h3>
                    <p>{edu.institution}, {edu.year}</p>
                </div>
            ))}
        </section>
    );
}

export default Education;
