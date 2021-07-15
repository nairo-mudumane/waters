import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styles from './Login.module.css';
import Head from '../components/data/Head';
import LoginForm from '../components/LoginForm';
import PasswordReset from './data/PasswordReset';

export default function Login() {
  React.useEffect(() => {
    <Head title="Login" />;
  }, []);

  return (
    <>
      <div className={`${styles.container} animeLeft`}>
        <Routes>
          <Route path="" element={<LoginForm />} />
          <Route path="passwordreset" element={<PasswordReset />} />
        </Routes>
      </div>
    </>
  );
}
