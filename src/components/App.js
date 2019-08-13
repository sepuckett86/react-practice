import React from 'react';
import Playground from './Playground';
import Header from './Header';

export default function App() {
  return (
    <>
      <Header />
      <Playground color1="blue" color2="red"/>
    </>
  );
}
