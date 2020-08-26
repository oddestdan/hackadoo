import React from 'react';
import styles from './CVHeading.module.css';

export default function CVHeading({ username, path }) {
  return (
    <div className={styles.headings}>
      <h1 className={styles.heading}>{username},</h1>
      <h3 className={styles.subheading}>Here is your {path} CV</h3>
    </div>
  );
}
