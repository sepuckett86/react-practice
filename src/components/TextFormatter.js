import React, { Component } from 'react';
import styles from './TextFormatter.css';

class TextFormatter extends Component {
  state = {
    text: ''
  };

  changeHandler = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  };

  render() {
    return (
      <section className={styles.TextFormatter}>
        <form>
          <input name="text" type="text" onChange={this.changeHandler} value={this.state.text}></input>
        </form>
      </section>
    );
  }
}

export default TextFormatter;
