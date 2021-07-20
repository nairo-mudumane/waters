import React from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import Error from '../data/Error';
import Client from './client/Client';
import FootageForm from './components/FootageForm';
import styles from './Footage.module.css';

export default function Footage() {
  const clientID = useParams();
  console.log(clientID);

  return (
    <>
      <div className={styles.footageContainer}>
        <Routes>
          <Route path="" element={<FootageForm />} />
          <Route path={`client/:${clientID}`} element={<Client />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </>
  );
}
