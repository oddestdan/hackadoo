import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Question from '../Question/Question';
// import styles from './Survey.module.css';
import { roadmapApiUrl } from '../../environment';

const Survey = () => {
  // const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState({});
  const [questionId, setQuestionId] = useState(null);
  const [isLastQuestion, setIsLastQuestion] = useState(false);

  const fetchSkill = (id = null) => {
    // TODO: get this value from redux store after clicking on path from Cabinet
    const path = 'back';
    let fetchUrl = `${roadmapApiUrl}/firstSkill/${path}`;
    if (id) {
      fetchUrl = `${roadmapApiUrl}/skill/${path}/${id}`;
    }
    fetch(fetchUrl)
      .then((res) => res.json())
      .then((question) => {
        // TODO: save/add to redux store progress
        setQuestion(question);
      });
  };

  useEffect(() => {
    fetchSkill(questionId);
  }, [questionId]);

  const handleNextQuestion = () => {
    if (question.nextId) {
      setQuestionId(question.nextId);
    } else {
      stopSurvey();
    }
  };

  const stopSurvey = () => {
    setIsLastQuestion(true);
    // TODO: take progress from redux
    // sendProgressToBackend();
  };

  return (
    <>
      <Carousel
        // activeIndex={index}
        controls={false}
        indicators={false}
        interval={null}
      >
        <Carousel.Item key={question.id}>
          <Question
            question={question}
            nextQuestion={handleNextQuestion}
            isLastQuestion={isLastQuestion}
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Survey;
