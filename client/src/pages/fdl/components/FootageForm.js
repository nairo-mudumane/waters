import React from 'react';
import styles from './FootageForm.module.css';

export default function FootageForm() {
  const [clientID, setClientID] = React.useState('');
  const [load, setLoad] = React.useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    setLoad(true);

    console.log(clientID);
    setTimeout(() => {
      document.location.assign(`client/${clientID}`);
      setLoad(false);
    }, 2000);
    console.log(clientID);
  }
  /* window.location.replace(`fdl/${user.id_user}`); */

  return (
    <form
      method="POST"
      onSubmit={handleSubmit}
      className={`${styles.formContainer} animeLeft`}
    >
      <p className="animeLeft">Enter the client's ID</p>
      <div className={`${styles.formGroup} animeLeft`}>
        <input
          type="text"
          name="clientID"
          required
          autoComplete="off"
          value={clientID}
          onChange={({ target }) => setClientID(target.value)}
        />
      </div>

      <div className="animeLeft">
        <button type="submit" className="btn btn-flex animeLeft">
          {load ? <div className="loader loader-btn" /> : 'Check'}
        </button>
      </div>
    </form>
  );
}
