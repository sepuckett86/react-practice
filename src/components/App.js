import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import AddVideo from '../containers/AddVideo';

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Home />
        <AddVideo />
        <Footer />
      </>
    );
  }
}
