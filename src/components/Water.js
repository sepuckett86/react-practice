import React, { Component } from 'react';
import './Water.css';

class Water extends Component {
  state = {
    input: '',
    waterAmount: 0
  }

  submitHandler = (event) => {
    event.preventDefault();
    if(parseInt(this.state.input)) {
      this.setState(state => {
        return {
          waterAmount: state.waterAmount + parseInt(state.input),
          input: ''
        };
      });
    }
  }

  inputChangeHandler = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  }

  render() {
    return (
      <>
      <form onSubmit={this.submitHandler}>
        <label>
          Water to Add in Ounces: {' '}
          <input onChange={this.inputChangeHandler} name="input" type="text" value={this.state.input}></input>
        </label>
        <button>Submit</button>
      </form>
      <p>Water Amount in Ounces: {this.state.waterAmount}/64</p>
      <p>
        <progress value={this.state.waterAmount} max="64"></progress>
      </p>
      </>
    );
  }
}

export default Water;
