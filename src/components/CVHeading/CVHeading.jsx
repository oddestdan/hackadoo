import React from 'react';
import styles from './CVHeading.module.css';

export default function CVHeading({ username }) {
  return (
    <div className={styles.headings}>
      <h1 className={styles.heading}>{username},</h1>
      <h3 className={styles.subheading}>Here is your CV</h3>
    </div>
  );
}
