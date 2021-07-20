import React from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import Head from '../../components/data/Head';
import styles from './FdlIndex.module.css';
import Welcome from './Welcome';
import Footage from './Footage';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Error from '../data/Error';

export default function FdlIndex() {
  const user = useParams();

  return (
    <>
      <Head title={user.id} />
      <Header />
      <SideBar />
      <div className={`${styles.contentWrapper} animeLeft`}>
        <Routes>
          <Route path="" element={<Welcome />} />
          <Route path="footage/*" element={<Footage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </>
  );
}
