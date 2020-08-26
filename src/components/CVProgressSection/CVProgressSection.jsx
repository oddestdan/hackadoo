import React from 'react';
import styles from './CVProgressSection.module.css';
import CVProgress from '../CVProgress/CVProgress';
import CVFooter from '../CVFooter/CVFooter';

export default function CVProgressSection({ data }) {
  return (
    <div className={styles.progressSection}>
      <CVProgress progress={data} />
      <div className={styles.getInTouchContainer}>
        <div className={styles.getInTouch}>
          <span>get in touch</span>
        </div>
      </div>
      <CVFooter />
    </div>
  );
}
