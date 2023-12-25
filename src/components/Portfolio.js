// Portfolio.js
import React from 'react';
import styles from './Portfolio.module.css';

const Portfolio = () => {
    const projects = [
        { id: 1, title: 'Project 1', description: 'Short description of the project.', link: '#'},
        // ... Add more projects
    ];

    return (
        <section className={styles.portfolio}>
            <h2>Portfolio</h2>
            <div className={styles.projects}>
                {projects.map(project => (
                    <div key={project.id} className={styles.project}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link}>View Project</a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Portfolio;
