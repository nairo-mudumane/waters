import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  const user = useParams();
  return (
    <header className={styles.header}>
      <div className={styles.headerTitle}>
        <h2 className={styles.userID}># {user.id}</h2>
      </div>
      <div className={styles.headerLogo}>
        <span>FDL</span>
      </div>
    </header>
  );
}
