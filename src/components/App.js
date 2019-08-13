import React from 'react';
import Playground from './Playground';
import Header from './Header';

export default function App() {
  return (
    <>
      <Header />
      <Playground color1="red" color2="blue"/>
    </>
  );
}
