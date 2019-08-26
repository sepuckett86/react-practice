import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import { connect } from 'react-redux';
import { addDrink, addSandwich, addChips, clearFood } from  '../actions/lunchActions';
import store from '../store';

export default class App extends Component {
  render() {
    
    return (
      <>
        <Header/>
        <Home/>
        <button onClick={() => store.dispatch(addDrink('Sprite'))}>Add Drink</button>
        <button onClick={() => store.dispatch(addChips('Doritos'))}>Add Chips</button>
        <button onClick={() => store.dispatch(addSandwich('Ham'))}>Add Sandwich</button>
        <button onClick={() => store.dispatch(clearFood('drink'))}>Clear Drinks</button>
        <Footer/>
      </>
    );
  }
}
