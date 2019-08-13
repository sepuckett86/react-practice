import React from 'react';
import Dog from './Dog';
import Header from './Header';

export default function App() {
  return (
    <>
      <Header />
      <Dog name="Highway" age={6} weight="10 lbs"/>
    </>
  );
}
