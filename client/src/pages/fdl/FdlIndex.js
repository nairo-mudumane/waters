import React from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import Head from '../../components/data/Head';
import styles from './FdlIndex.module.css';
import Welcome from './Welcome';
import Footage from './Footage';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Error from '../data/Error';
import Debt from './Debt';

export default function FdlIndex() {
  const user = useParams();

  React.useEffect(() => <Head title={user.id} />, [user]);

  return (
    <>
      <Header />
      <SideBar />
      <div className={`${styles.contentWrapper} animeLeft`}>
        <Routes>
          <Route path="" element={<Welcome />} end />
          <Route path="footage/*" element={<Footage />} />
          <Route path="debt/*" element={<Debt />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </>
  );
}
