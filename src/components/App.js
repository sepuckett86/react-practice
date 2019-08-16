import React from 'react';
import Header from './Header';
import Footer from './Footer';
import TopQuotes from '../containers/TopQuotes';
import './App.css';

export default function App() {
  return (
    <>
    <Header />
    <TopQuotes count={10} />
    <Footer />
    </>
  );
}
