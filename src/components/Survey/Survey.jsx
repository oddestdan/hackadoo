import React from 'react';
import Question from '../Question/Question';
import styles from './Survey.module.css';

const Survey = () => {
  return (
    <div className={styles.container}>
      <Question />
    </div>
  );
};

export default Survey;
