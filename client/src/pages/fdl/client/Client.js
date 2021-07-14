import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';

export default function Client() {
  const client = useParams();
  return (
    <>
      <Header title={`- ${client.clientName}`} />
      <p>pagina do client</p>
    </>
  );
}
