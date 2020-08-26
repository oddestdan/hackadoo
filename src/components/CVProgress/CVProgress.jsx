import React from 'react';
import styles from './CVProgress.module.css';
import CVProgressCard from '../CVProgressCard/CVProgressCard';

export default function CVProgress({ progress }) {
  const progressCards = [
    {
      title: 'Some title 1',
      description: 'Some description 1',
    },
    {
      title: 'Some title 2',
      description: 'Some description 2',
    },
    {
      title: 'Some title 3',
      description: 'Some description 3',
    },
    {
      title: 'Some title 4',
      description: 'Some description 4',
    },
    {
      title: 'Some title 5',
      description: 'Some description 5',
    },
    {
      title: 'Some title 6',
      description: 'Some description 6',
    },
  ];
  return (
    <>
      <div className={styles.progressTitle}>
        <span>This is what your current progress looks like...</span>
      </div>
      <div className={styles.progressContainer}>
        {progressCards.map((card) => {
          return <CVProgressCard data={card} />;
        })}
      </div>
    </>
  );
}
