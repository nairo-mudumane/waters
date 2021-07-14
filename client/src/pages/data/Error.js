import React from 'react';
import { Link } from 'react-router-dom';
import Head from '../../components/data/Head';
import styles from './Error.module.css';

export default function Error() {
  const [load, setLoad] = React.useState();
  async function handleClick() {
    setLoad(!load);
  }

  React.useEffect(() => setLoad(false), []);

  return (
    <>
      <Head title="Error 404" />
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.img_wrapper}>
            <p />
          </div>

          <div className={styles.error_msg}>
            <h2>This site can’t be reached</h2>
            <h4>Try running system network diagnostics.</h4>
            <p>Check the domain your entered.</p>
            <p>DNS_PROBE_FINISHED_NXDOMAIN.</p>
          </div>

          <Link
            to="/"
            className={`${styles.btn_link} btn btn-flex`}
            onKeyDown={handleClick}
          >
            {load ? <div className="loader loader-btn" /> : 'Home'}
          </Link>
        </div>
      </div>
    </>
  );
}
