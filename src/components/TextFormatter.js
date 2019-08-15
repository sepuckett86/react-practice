import React, { Component } from 'react';
import styles from './TextFormatter.css';
import figlet from 'figlet';

class TextFormatter extends Component {
  state = {
    text: '',
    font: 'Ghost',
    formattedText: '',
    color: 'black'
  };

  changeTextHandler = ({ target }) => {
    let formattedText = '';
    figlet.text(target.value, {
      font: this.state.font,
      horizontalLayout: 'default',
      verticalLayout: 'default'
    }, function(err, data) {
      if(err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
      }
      console.log(data);
      formattedText = data;
    });
    this.setState({
      text: target.value,
      formattedText
    });
  };

  changeHandler = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  }

  render() {
    const textColor = {
      color: this.state.color
    };

    return (
      <section className={styles.TextFormatter}>
        <form>
          <input name="text" type="text" onChange={this.changeTextHandler} value={this.state.text}></input>
          <input name="color" type="color" onChange={this.changeHandler} value={this.state.color}></input>
          <pre style={textColor}>
            {this.state.formattedText}
          </pre>
        </form>
      </section>
    );
  }
}

export default TextFormatter;
