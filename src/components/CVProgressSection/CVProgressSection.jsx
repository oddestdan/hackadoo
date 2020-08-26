import React from 'react';
import styles from './CVProgressSection.module.css';
import CVProgress from '../CVProgress/CVProgress';
import CVFooter from '../CVFooter/CVFooter';

export default function CVProgressSection({ progress }) {
  return (
    <div className={styles.progressSection}>
      <CVProgress progress={progress} />
      <div className={styles.getInTouchContainer}>
        <div className={styles.getInTouch}>
          <span>get in touch</span>
        </div>
      </div>
      <CVFooter />
    </div>
  );
}
