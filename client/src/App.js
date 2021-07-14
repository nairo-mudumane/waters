import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Error from './pages/data/Error';
import Footer from './components/Footer';
import Home from './pages/Home';
import FdlIndex from './pages/fdl/FdlIndex';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} end />
            <Route path="pages/login/*" element={<Login />} />
            <Route path="pages/fdl/*" element={<FdlIndex />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}
