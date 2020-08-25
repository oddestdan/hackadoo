import React from 'react';
import styles from './Question.module.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Question = ({ question, nextQuestion, previousQuestion }) => (
  <div className={styles.container}>
    <p className={styles.question}>Do you know - {question.category}?</p>
    <p>Check technologies:</p>
    <Form className={styles.form}>
      {question.skills.map((skill) => (
        <div key={skill.skillName} className={styles['checkbox-container']}>
          <Form.Check
            inline
            label={skill.skillName}
            type={'checkbox'}
            id={skill.skillName}
            className={styles.checkbox}
          />
        </div>
      ))}
    </Form>
    <div>
      <Button
        variant="secondary"
        onClick={() => previousQuestion()}
        className={styles.button}
      >
        Previos
      </Button>
      <Button
        variant="success"
        onClick={() => nextQuestion()}
        className={styles.button}
      >
        Next
      </Button>
    </div>
  </div>
);

export default Question;
