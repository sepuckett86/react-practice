import React from 'react';
import Header from './Header';
import Footer from './Footer';
import AllCharacters from '../containers/AllCharacters';
import './App.css';

export default function App() {
  return (
    <>
    <Header />
    <AllCharacters page={1} />
    <Footer />
    </>
  );
}
