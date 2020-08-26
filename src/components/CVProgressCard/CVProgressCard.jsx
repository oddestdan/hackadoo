import React from 'react';
import styles from './CVProgressCard.module.css';

export default function CVProgressCard({ data }) {
  return (
    <div className={styles.progressCard} key={data.title}>
      <span>{data.title}</span>
      <br />
      <span>{data.description}</span>
    </div>
  );
}
