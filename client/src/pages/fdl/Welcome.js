import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Welcome.module.css';
import Header from './components/Header';

export default function Welcome() {
  return (
    <>
      <div className={styles.container}>
        <Header />

        <div className={styles.linkWrapper}>
          <p>Clique para fazer leitura</p>
          <Link
            to="readform"
            className={`btn btn-flex ${styles.link} animeLeft`}
          >
            Read
          </Link>
        </div>
      </div>
    </>
  );
}
