import React, { useEffect, useState } from 'react';
import styles from './Question.module.css';
import Button from 'react-bootstrap/Button';
import { roadmapApiUrl } from '../../environment';
import axios from 'axios';
import Form from 'react-bootstrap/Form';

const Question = () => {
  const [data, setData] = useState({});
  const [chekedCheckboxes, setChekedCheckboxes] = useState([]);
  const [nextButtonDisabled, setNextButtonDisabled] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const result = await axios(`${roadmapApiUrl}/firstSkill/front`);

      const chekBoxArr = result.data.childrenSkills.map((skill) => {
        return {
          _id: skill._id,
          isChecked: false,
          title: skill.title,
        };
      });

      setChekedCheckboxes(chekBoxArr);

      setData(result.data);
    }

    fetchData();
  }, [data.childrenSkills]);

  const fetchNextQuestion = () => {
    async function fetchData() {
      const result = await axios(`${roadmapApiUrl}/skill/front/${data.nextId}`);

      setData(result.data);
    }

    fetchData();
  };

  const handleChecked = (e) => {
    if (e.target.checked) {
      setChekedCheckboxes(
        chekedCheckboxes.map((checkbox) =>
          checkbox._id === e.target.id ? { isChecked: true } : checkbox
        )
      );
    }

    handleButtonDisabled();
  };

  const handleButtonDisabled = () => {
    if (!chekedCheckboxes.some((el) => el.isChecked === false)) {
      setNextButtonDisabled(true);
    }
  };

  return (
    <div className={styles.container}>
      <p className={styles.question}>Do you know - {data.title}?</p>
      <p>Check technologies:</p>
      <Form className={styles.form}>
        {data.childrenSkills &&
          data.childrenSkills.map((skill) => (
            <div key={skill.title} className={styles['checkbox-container']}>
              <Form.Check
                inline
                label={skill.title}
                type={'checkbox'}
                id={skill._id}
                className={styles.checkbox}
                onChange={handleChecked}
              />
            </div>
          ))}
      </Form>
      <div>
        <Button variant="secondary" className={styles.button}>
          Previous
        </Button>
        <Button
          variant="success"
          className={styles.button}
          onClick={fetchNextQuestion}
          disabled={nextButtonDisabled}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Question;
