import React from 'react';
import { Link } from 'react-router-dom';
import Head from '../components/data/Head';
import styles from './Home.module.css';

export default function Home() {
  const [load, setLoad] = React.useState(false);
  React.useEffect(() => {
    <Head title="waters" />;
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 8000);
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

        {load ? (
          <div className={styles.loaderWrapper}>
            <div className={`loader ${styles.load}`} />
            <p>Just a secound...</p>
          </div>
        ) : (
          <Link
            to="pages/login"
            id="link"
            className={`btn ${styles.link} animeRight`}
          >
            Click to enter
          </Link>
        )}
      </div>
    </div>
  );
}
