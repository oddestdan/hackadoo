import React from 'react';
import styles from './CVIntroSection.module.css';
import CVHeading from '../CVHeading/CVHeading';
import CVDivider from '../CVDivider/CVDivider';
import puterUrl from '../../assets/puter.png';

export default function CVIntroSection({ username }) {
  return (
    <div className={styles.introSection}>
      <CVHeading username={username} />
      <div className={styles.description}>
        <span>
          We've gathered your Front-End progress and organized it into a nice CV
          that you can use basically anywere
        </span>
      </div>
      <div className={styles.scroll}>
        <span>Scroll to discover</span>
      </div>
      <CVDivider />
      <div className={styles.separator}>
        <img src={puterUrl} className={styles.separatorImage} alt="separator" />
      </div>
    </div>
  );
}
