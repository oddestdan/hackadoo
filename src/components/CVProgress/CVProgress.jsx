import React from 'react';
import styles from './CVProgress.module.css';
import CVProgressCard from '../CVProgressCard/CVProgressCard';

export default function CVProgress({ progress }) {
  return (
    <>
      <div className={styles.progressTitle}>
        <span>This is what your current progress looks like...</span>
      </div>
      <div className={styles.progressContainer}>
        {progress.map((card) => {
          return <CVProgressCard data={card} key={card._id} />;
        })}
      </div>
    </>
  );
}
