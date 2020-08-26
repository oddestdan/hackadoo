import React, { useEffect, useState } from 'react';
import styles from './Question.module.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Question = ({ question, nextQuestion, isLastQuestion }) => {
  const [checkboxes, setCheckboxes] = useState([]);
  const [isButtonNext, setIsButtonNext] = useState(false);
  const [areAllChecked, setAreAllChecked] = useState(false);

  // Handle Checkboxes state
  useEffect(() => {
    if (question.childrenSkills) {
      const checkboxesData = question.childrenSkills.map(({ _id, title }) => ({
        _id,
        title,
        isChecked: false,
      }));
      setCheckboxes(checkboxesData);
    }

    // handleButtonValue();
  }, [question.childrenSkills]);

  // Handle All Checked state
  useEffect(() => {
    setAreAllChecked(checkboxes.every((el) => el.isChecked === true));
  }, [checkboxes]);

  // Handle button value
  useEffect(() => {
    setIsButtonNext(areAllChecked && !isLastQuestion);
  }, [areAllChecked, isLastQuestion]);

  // TODO: if button is !isButtonNext -> need to create logic to send survey data

  const handleCheckboxCheck = (e) => {
    if (e.target.checked) {
      setCheckboxes(
        checkboxes.map((checkbox) =>
          checkbox._id === e.target.id
            ? { ...checkbox, isChecked: true }
            : checkbox
        )
      );
    }
  };

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
                onChange={handleCheckboxCheck}
              />
            </div>
          ))}
      </Form>
      <Button
        variant={isButtonNext ? 'success' : 'primary'}
        onClick={nextQuestion}
        className={styles.button}
      >
        {isButtonNext ? 'Next' : 'Finish'}
      </Button>
    </div>
  );
};

export default Question;
