import React from 'react';
import { Link } from 'react-router-dom';
import Head from '../components/data/Head';
import styles from './Home.module.css';

export default function Home() {
  React.useEffect(() => {
    <Head title="waters" />;
    window.addEventListener('load', () => {
      /* check localstorage */
      setTimeout(() => {
        const tokenName = localStorage.getItem('username');
        console.log(tokenName);
        document.querySelector('#link').click();
      }, 4000);
    });
  }, []);

  return (
    <div className={`${styles.container} animeRight`}>
      <div className={styles.content}>
        <h2>
          Welcome to <span>Waters</span>
        </h2>

        <p className={styles.subtitle}>
          A system for controlling and managing payments at large and small
          fountains
        </p>

        <Link
          to="pages/login"
          id="link"
          className={`btn ${styles.link}`}
          style={{ display: 'none' }}
        >
          Click to enter
        </Link>

        <div className={styles.loaderWrapper}>
          <div className={`loader ${styles.load}`} />
          <p>Just a secound...</p>
        </div>
      </div>
    </div>
  );
}
