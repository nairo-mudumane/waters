/* setTimeout(() => {
  // window.location.assign(`fdl/${user}`);
  document.querySelector('#btn').click();
  setLoad(false);
}, 4000); */
/* const url = `https://pokeapi.co/api/v2/pokemon/`; */
/* try {
  fetch(url)
    .then((r) => r.json())
    .then((data) => console.log(data));
} catch (e) {
  console.log('error');
} */

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LoginForm.module.css';

export default function LoginForm() {
  const [user, setUser] = React.useState('');
  const [pass, setPass] = React.useState('');
  const [load, setLoad] = React.useState(false);

  const formField = {
    user: '',
    pass: '',
    error: null,
  };

  // send form
  function handleSubmit(event) {
    event.preventDefault();
    setLoad(true);
    formField.user = user;
    formField.pass = pass;

    // fetch
    /* axios({
      method: 'POST',
    }); */
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
              <div className={styles.form_group}>
                <input
                  type="text"
                  name="user"
                  value={user}
                  placeholder="User"
                  autoComplete="off"
                  required
                  className={`${styles.form_control} animeRight`}
                  onChange={({ target }) => setUser(target.value)}
                />
                <span className={styles.icon}>
                  <i className="fa fa-user" aria-hidden="true" />
                </span>
              </div>

              <div className={styles.form_group}>
                <input
                  type="password"
                  name="password"
                  value={pass}
                  placeholder="Password"
                  autoComplete="off"
                  required
                  className={`${styles.form_control} animeRight`}
                  onChange={({ target }) => setPass(target.value)}
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
              <Link to="passwordreset" target="__blank" className={styles.link}>
                Forgot password?
              </Link>
            </div>
          </div>
        </div>

        {/* <Routes>
        <Route path="passwordreset" element={<PasswordReset />} />
      </Routes> */}
      </div>
    </div>
  );
}
