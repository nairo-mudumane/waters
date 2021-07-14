import React from 'react';
import icon from '../assets/img/icon-error.png';
import styles from './AlertImg.module.css';

export default function AlertImg() {
  return (
    <div className={`${styles.alertImg} animeLeft`}>
      <img src={icon} alt="" />
    </div>
  );
}
