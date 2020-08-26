import React from 'react';
import styles from './Question.module.css';
import Form from 'react-bootstrap/Form';

const Question = ({ question, handleUpChange }) => {
  return (
    <div className={styles.container}>
      <p className={styles.question}>Do you know - {question.title}?</p>
      <p>Check what you know:</p>
      <Form className={styles.form}>
        {question.childrenSkills &&
          question.childrenSkills.map((skill) => (
            <div key={skill._id} className={styles['checkbox-container']}>
              <Form.Check
                inline
                label={skill.title}
                type={'checkbox'}
                id={skill._id}
                className={styles.checkbox}
                onChange={handleUpChange}
              />
            </div>
          ))}
      </Form>
    </div>
  );
};

export default Question;
