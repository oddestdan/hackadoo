import React from 'react';
import styles from './Question.module.css';
import Button from 'react-bootstrap/Button';

const Question = () => (
  <div className={styles.container}>
    <p className={styles.question}>Do you know - ...?</p>
    <p>Check technologies:</p>
    <div>
      <Button variant="secondary" className={styles.button}>
        Previous
      </Button>
      <Button variant="success" className={styles.button}>
        Next
      </Button>
    </div>
  </div>
);

export default Question;

//  {/* <Form className={styles.form}>
//       {question.skills.map((skill) => (
//         <div key={skill.skillName} className={styles['checkbox-container']}>
//           <Form.Check
//             inline
//             label={skill.skillName}
//             type={'checkbox'}
//             id={skill.skillName}
//             className={styles.checkbox}
//           />
//         </div>
//       ))}
// </Form> */}
