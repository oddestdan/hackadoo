import React, { useState, useEffect, useContext } from 'react';
import Question from '../Question/Question';
import styles from './Survey.module.css';
import { beApiUrl, roadmapApiUrl } from '../../environment';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import { AuthContext } from '../../authContext/AuthContext';
import { useHistory } from 'react-router-dom';

const Survey = ({ chosenPath, progress, saveProgressToStore }) => {
  const [question, setQuestion] = useState({});
  const [questionId, setQuestionId] = useState(null);
  const [isLastQuestion, setIsLastQuestion] = useState(false);
  const { user } = useContext(AuthContext);
  const history = useHistory();

  const fetchSkill = (chosenPath, id = null) => {
    let fetchUrl = `${roadmapApiUrl}/firstSkill/${chosenPath}`;
    if (id) {
      fetchUrl = `${roadmapApiUrl}/skill/${chosenPath}/${id}`;
    }

    fetch(fetchUrl)
      .then((res) => res.json())
      .then((question) => {
        const modifyQuestion = (question) => {
          question.areCheckedAll = false;
          question.childrenSkills.forEach((child) => {
            child.isChecked = false;
          });
        };

        modifyQuestion(question);
        setQuestion(question);
      });
  };

  //localhost:5000/api/user/cv/5f46047854f58795f9ce38b4
  const postProgress = async (url = '', data = {}) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  };

  useEffect(() => {
    fetchSkill(chosenPath, questionId);
  }, [chosenPath, questionId]);

  useEffect(() => {
    setIsLastQuestion(!question.nextId);
  }, [question]);

  const handleNextQuestion = () => {
    if (question.nextId) {
      saveProgressToStore(question);
      setQuestionId(question.nextId);
    } else {
      stopSurvey();
    }
  };

  const handleUpChange = (e) => {
    console.log('Hadling up change');
    if (e.target.checked) {
      question.childrenSkills.forEach((checkbox) => {
        if (checkbox._id === e.target.id) {
          checkbox.isChecked = true;
        }
      });
    }

    question.areCheckedAll = question.childrenSkills.every(
      (skill) => skill.isChecked
    );
  };

  const stopSurvey = () => {
    alert('Finishing survey');
    sendProgressToBackend();
  };

  const sendProgressToBackend = () => {
    const userId = user._id;
    const fetchUrl = `${beApiUrl}/user/cv/${userId}`;

    postProgress(fetchUrl, { progress }).then((data) => {
      // receive CV link
      alert('Here is the link...');

      // redirect to roadmap
      history.push('/roadmap');
    });
  };

  return (
    <div className={styles.container}>
      <Carousel controls={false} indicators={false} interval={null}>
        <Carousel.Item key={question.id}>
          <Question question={question} handleUpChange={handleUpChange} />
        </Carousel.Item>
      </Carousel>
      <Row className={styles.buttonContainer}>
        {!isLastQuestion && (
          <Button
            variant="success"
            onClick={handleNextQuestion}
            className={styles.button}
          >
            Next
          </Button>
        )}
        <Button
          variant="primary"
          onClick={stopSurvey}
          className={styles.button}
        >
          Finish
        </Button>
      </Row>
    </div>
  );
};

export default Survey;
