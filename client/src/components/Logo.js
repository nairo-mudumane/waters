import React from 'react';
import logoImg from '../assets/img/logo.png';
import styles from './Logo.module.css';

export default function Logo(props) {
  React.useEffect(() => {
    document.querySelector('img').style.width = props.width;
    document.querySelector('img').style.height = props.height;
  }, [props]);

  return (
    <div className={styles.logo}>
      <img src={logoImg} alt="" />
    </div>
  );
}
