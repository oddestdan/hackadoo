import React from 'react';
import Question from '../Question/Question';
import styles from './Survey.module.css';

const Survey = () => {
  return (
    <Survey className={styles.container}>
      <Question />
    </Survey>
  );
};

export default Survey;
