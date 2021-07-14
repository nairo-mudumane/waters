import React from 'react';
import styles from './PasswordReset.module.css';

export default function PasswordReset() {
  /* const [load, setLoad] = React.useState(false); */
  const [idUser, setIdUser] = React.useState('');
  const [btn, setBtn] = React.useState(true);

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleChange({ target }) {
    setIdUser(target.value);
  }

  function handleChangeUp() {
    console.log(idUser);
    if (idUser !== '' || idUser !== null) {
      setBtn(false);
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.formContainer}>
          <form method="POST" onSubmit={handleSubmit}>
            {/* {load ? (
              <span className={`loader loader-btn ${styles.loadSpan}`} />
            ) : null} */}
            <div
              id="hint"
              className={`${styles.hint} ${styles.step} animeLeft slideTop`}
            >
              <h4>Forgot password?</h4>
              <p>
                Don't worry. Resetting your password is easy, just enter your
                ID.
                <br />
                Please, follow the steps!
              </p>
              <br />
              <br />
              <p className={styles.notice}>
                Notice: If you have forgot your ID, contact the admin!
              </p>
              <div className={`${styles.flexRight} animeRight`}>
                <button
                  type="button"
                  className="btn btn-flex"
                  onClick={() => {
                    document.querySelector('#hint').style.display = 'none';
                    document.querySelector('#step1').style.display = 'flex';
                  }}
                >
                  Start
                </button>
              </div>
            </div>

            {/* step 1 */}
            <div
              id="step1"
              className={`${styles.stepOne} ${styles.step} animeRight slideTop`}
            >
              <h4>Step 1</h4>

              <div className={styles.flex}>
                <p>Enter your ID</p>
                <input
                  type="text"
                  placeholder="Enter your ID here"
                  autoComplete="off"
                  required
                  value={idUser}
                  onChange={handleChange}
                  onKeyUp={handleChangeUp}
                />
              </div>

              <div className={`${styles.flexRight} animeRight`}>
                <button
                  type="button"
                  className={`btn btn-flex ${btn ? 'btn-disabled' : null}`}
                  onClick={() => {
                    document.querySelector('#step1').style.display = 'none';
                    document.querySelector('#step3').style.display = 'flex';
                  }}
                >
                  Next
                </button>
              </div>
            </div>

            {/* step 2 */}
            <div
              id="step3"
              className={`${styles.stepTwo} ${styles.step} animeLeft slideTop`}
            >
              <h4>Step 2</h4>
              <p>Confirm your ID</p>
              <div className={styles.flex}>
                <p>
                  <span># {idUser}</span>
                  <br />
                  Is this your id?
                </p>
              </div>

              <div className={`${styles.flexRight} animeRight`}>
                <button
                  type="submit"
                  className={`btn btn-flex ${styles.yes}`}
                  onClick={() => {
                    document.querySelector('#step3').style.display = 'none';
                    document.querySelector('#step4').style.display = 'flex';
                  }}
                >
                  Yes
                </button>
                <button
                  type="button"
                  className={`btn btn-flex ${styles.no}`}
                  onClick={() => {
                    document.querySelector('#step3').style.display = 'none';
                    document.querySelector('#step1').style.display = 'flex';
                  }}
                >
                  No
                </button>
              </div>
            </div>

            {/* final step */}
            <div
              id="step4"
              className={`${styles.stepThree} ${styles.step} animeRight slideTop`}
            >
              <h4>Great !</h4>
              <p>It's all done.</p>
              <br />
              <br />
              <p>
                We sent a password request to your admin.
                <br />
                It may take several hours, if necessary contact your admin.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
