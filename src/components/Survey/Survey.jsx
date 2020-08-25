import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from './Survey.module.css';
import questionsData from '../../assets/json/surveyData.json';

const Survey = () => {
  const [index, setIndex] = useState(0);

  const handleNextQuestion = (selectedIndex, e) => {
    setIndex(selectedIndex + 1);
  };

  return (
    <Carousel
      activeIndex={index}
      controls={false}
      indicators={false}
      interva={null}
    >
      <Carousel.Item>
        <div className={styles.div}>
          <h2>Slide 1</h2>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={styles.div}>
          <h2>Slide 2</h2>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={styles.div}>
          <h2>Slide 3</h2>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Survey;
