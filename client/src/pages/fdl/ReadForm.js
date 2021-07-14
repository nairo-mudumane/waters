import React from 'react';
import styles from './ReadForm.module.css';

export default function ReadForm() {
  const [idUser, setIdUser] = React.useState('');
  const [load, setLoad] = React.useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setLoad(true);

    setTimeout(() => {
      console.log(idUser);
      setLoad(false);
    }, 400);
  }

  return (
    <>
      <form
        method="POST"
        onSubmit={handleSubmit}
        className={`${styles.formContainer} animeLeft`}
      >
        <p className="animeLeft">Digite o codigo do usuario</p>
        <div className={styles.formGroup}>
          <input
            type="text"
            name="idUser"
            value={idUser}
            onChange={({ target }) => setIdUser(target.value)}
          />
        </div>

        <div className="animeLeft">
          <button type="submit" className="btn btn-flex animeLeft">
            {load ? <div className="loader loader-btn" /> : 'Check'}
          </button>
        </div>
      </form>
    </>
  );
}
