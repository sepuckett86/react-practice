import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';

export default class App extends Component {
  render() {
    
    return (
      <>
        <Header/>
        <Home/>
        <Footer/>
      </>
    );
  }
}
