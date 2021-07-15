import React from 'react';
import styles from './Welcome.module.css';

export default function Welcome() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.bannerContainer}>
          <h2 className={styles.bannerTitle}>Waters</h2>
        </div>
      </div>
    </>
  );
}
