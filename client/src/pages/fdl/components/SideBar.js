import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './SideBar.module.css';

export default function SideBar() {
  const [active, setActive] = React.useState(false);
  const handleBar = () => setActive(!active);
  console.log(document.querySelector(styles.nav));

  return (
    <>
      <button type="button" className={styles.btnToggleNav} onClick={handleBar}>
        btn
      </button>
      <nav className={styles.nav} style={{ width: active ? '50%' : '0' }}>
        <ul className={styles.navUL}>
          <li className={styles.navLI}>
            <NavLink to="" className={styles.navLink}>
              Footage
            </NavLink>
          </li>
          <li className={styles.navLI}>
            <NavLink to="" className={styles.navLink}>
              Debt
            </NavLink>
          </li>
          <li className={styles.navLI}>
            <NavLink to="" className={styles.navLink}>
              Report
            </NavLink>
          </li>
          <li className={styles.navLI}>
            <NavLink to="" className={styles.navLink}>
              Dashboard
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
