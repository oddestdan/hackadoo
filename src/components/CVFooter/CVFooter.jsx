import React from 'react';
import styles from './CVFooter.module.css';

export default function CVFooter() {
  return (
    <footer className={styles.footer}>
      <span className={styles.footerText}>
        © Team Hackadoo 2020, All rights reserved.
      </span>
    </footer>
  );
}
