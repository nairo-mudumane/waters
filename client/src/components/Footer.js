import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={`${styles.footer} animeLeft`}>
      <p>&copy; 2021 Waters, Inc. KBS Technologies.</p>
      <Link to="help" className={styles.link}>
        Privacy and Terms
      </Link>
    </footer>
  );
}
