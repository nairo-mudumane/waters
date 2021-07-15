import React from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import Head from '../../components/data/Head';
import styles from './FdlIndex.module.css';
import Welcome from './Welcome';
import ReadForm from './ReadForm';
import Client from './client/Client';
import Header from './components/Header';
import SideBar from './components/SideBar';

export default function FdlIndex() {
  const user = useParams();
  console.log(user);

  return (
    <>
      <Head title={user.id} />
      <Header />
      <SideBar />
      <div className={`${styles.contentWrapper} animeLeft`}>
        <Routes>
          <Route path="" element={<Welcome />} />
          <Route path="readform" element={<ReadForm />} />
          <Route path="client/:clientName/*" element={<Client />} />
        </Routes>
      </div>
    </>
  );
}
