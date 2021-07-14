import React from 'react';
import Logo from './Logo';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo width="6rem" height="5rem" /* width="20px" height="30px" */ />
      <h1 style={{ paddingRight: '.6rem' }}>Fontenaria</h1>
    </header>
  );
}
