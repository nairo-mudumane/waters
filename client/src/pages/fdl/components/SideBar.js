import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './SideBar.module.css';

export default function SideBar() {
  const [active, setActive] = React.useState(false);
  const handleBar = () => setActive(!active);

  return (
    <>
      <button type="button" className={styles.btnToggleNav} onClick={handleBar}>
        <i className={`fas fa-bars ${styles.ico}`} />
      </button>
      <nav className={styles.nav} style={{ width: active ? '50%' : '0' }}>
        <ul className={styles.navUL}>
          <li className={styles.navLI}>
            <NavLink
              to="footage"
              className={`${styles.navLink} animeLeft`}
              onClick={handleBar}
            >
              Footage
            </NavLink>
          </li>
          <li className={styles.navLI}>
            <NavLink
              to=""
              className={`${styles.navLink} animeLeft`}
              onClick={handleBar}
            >
              Debt
            </NavLink>
          </li>
          <li className={styles.navLI}>
            <NavLink
              to=""
              className={`${styles.navLink} animeLeft`}
              onClick={handleBar}
            >
              Report
            </NavLink>
          </li>
          <li className={styles.navLI}>
            <NavLink
              to=""
              className={`${styles.navLink} animeLeft`}
              onClick={handleBar}
            >
              Dashboard
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
