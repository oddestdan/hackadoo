import React from 'react';
import styles from './CVProgressCard.module.css';

export default function CVProgressCard({ data }) {
  return (
    <div className={styles.progressCard} key={data.title}>
      <h3 className={styles.title}>{data.title}</h3>
      <br />
      <ul className={styles.list}>
        {data.childrenSkills.map((skill) => (
          <li className={styles.item} key={skill._id}>
            <p className={styles['skill-name']}>{skill.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
