import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import surveyData from '../../assets/json/surveyData.json';
import Question from '../Question/Question';

const Survey = () => {
  const [index, setIndex] = useState(0);

  const handleNextQuestion = () => {
    setIndex(index + 1);
    if (index === surveyData.length - 1) {
      setIndex(0);
    }
  };

  const handlePreviosQuestion = () => {
    if (index > 0) {
      setIndex(index - 1);
    }

    if (index === 0) {
      setIndex(surveyData.length - 1);
    }
  };

  return (
    <>
      <Carousel
        activeIndex={index}
        controls={false}
        indicators={false}
        interval={null}
      >
        {surveyData.map((surveyItem) => (
          <Carousel.Item key={surveyItem.category}>
            <Question
              question={surveyItem}
              nextQuestion={handleNextQuestion}
              previousQuestion={handlePreviosQuestion}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default Survey;
