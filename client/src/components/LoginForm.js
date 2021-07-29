import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './LoginForm.module.css';

export default function LoginForm() {
  const API_PATH = `http://localhost/fontenaria/fontenaria/server/index.php`;
  const [result, setResult] = React.useState([]);
  const [load, setLoad] = React.useState(null);
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [inputError, setInputError] = React.useState(false);

  // send form
  async function handleSubmit(event) {
    event.preventDefault();
    setLoad(true);
    await axios
      .post(API_PATH)
      .then((response) => {
        if (response.status === 200) {
          setResult(response.data);
          for (const user of result) {
            if (user.id_user === userName && user.password === password) {
              setInputError(false);
              window.location.replace(`fdl/${user.id_user}`);
              break;
            } else {
              setInputError(true);
            }
          }
        }
      })
      .catch((Error) => console.log(Error));
    setLoad(false);
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={`${styles.left} animeLeft`}>
          <h2 className="animeLeft">Welcome Back!</h2>
          <p className="animeLeft">
            Please, enter your username and password to login.
          </p>
        </div>
        <div className={`${styles.right} animeRight`}>
          <div className={`${styles.formContainer} animeRight`}>
            <h2>Login</h2>
            <form
              method="POST"
              onSubmit={handleSubmit}
              id="loginForm"
              className="animeRight"
            >
              {inputError ? (
                <p className={`animeLeft danger ${styles.incorrectPass}`}>
                  Incorrect user or password!
                </p>
              ) : null}
              <div className={styles.form_group}>
                <input
                  type="text"
                  name="userName"
                  value={userName}
                  placeholder="Username"
                  autoComplete="off"
                  required
                  className={`${styles.form_control} animeRight`}
                  onChange={({ target }) => setUserName(target.value)}
                />
                <span className={styles.icon}>
                  <i className="fa fa-user" aria-hidden="true" />
                </span>
              </div>

              <div className={styles.form_group}>
                <input
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Password"
                  autoComplete="off"
                  required
                  className={`${styles.form_control} animeRight`}
                  onChange={({ target }) => setPassword(target.value)}
                />
                <span className={styles.icon}>
                  <i className="fa fa-unlock" aria-hidden="true" />
                </span>
              </div>

              <div className={styles.flexRight}>
                <button
                  type="submit"
                  id="btn-submit"
                  className={`btn btn-flex ${
                    load ? 'btn-disabled' : null
                  } animeRight`}
                >
                  {load ? 'Wait' : 'Login'}{' '}
                  {load ? <div className="loader loader-btn" /> : null}
                </button>
              </div>
            </form>
            <div className={styles.flexRight}>
              {inputError ? (
                <Link
                  to="passwordreset"
                  target="__blank"
                  className={styles.link}
                >
                  Forgot password?
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
