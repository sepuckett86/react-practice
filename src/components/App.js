import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import WaterDisplay from './WaterDisplay';
import WaterInput from './WaterInput';
import './App.css';

export default class App extends Component {
  state = {
    water: 0,
    input: ''
  }

  updateWater = (event) => {
    event.preventDefault();
    if(parseInt(this.state.input)) {
      this.setState(state => {
        return {
          water: state.water + parseInt(state.input),
          input: ''
        };
      });
    }
  }

  updateInput = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  }

  render() {
    return (
      <>
      <Header/>
      <WaterInput 
        updateWater={this.updateWater} 
        updateInput={this.updateInput}
        input={this.state.input} />
      <WaterDisplay water={this.state.water}/>
      <Footer/>
      </>
    );
  }
}
