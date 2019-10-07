import React, { Component } from 'react';
import styles from './TextFormatter.css';
import figlet from 'figlet';

class TextFormatter extends Component {
  state = {
    text: '',
    font: 'Ghost',
    formattedText: '',
    color: '#000000',
    fonts: ['Ghost']
  };

  componentDidMount() {
    fetch('./src/fonts.txt')
      .then(res => {
        if(res.status !== 404) {
          return res.text();
        } else {
          console.log('status 404 fonts not found');
        }
      })
      .then(res => {
        const fonts = res.split(',');
        const formattedDefault = this.formatText('Text Here', 'Ghost');
        this.setState({ 
          fonts,
          text: 'Text Here',
          formattedText: formattedDefault
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  formatText = (text, font) => {
    figlet.text(text, {
      font: font,
      horizontalLayout: 'default',
      verticalLayout: 'default'
    }, (err, data) => {
      if(err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
      }
      this.setState({
        formattedText: data
      });
    });
  }

  changeTextHandler = ({ target }) => {
    this.formatText(target.value, this.state.font);
    this.setState({
      text: target.value
    });
  };

  changeHandler = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  }

  changeFontHandler = ({ target }) => {
    this.formatText(this.state.text, target.value);
    this.setState({
      font: target.value
    });
  }

  render() {
    const textColor = {
      color: this.state.color
    };
  
    const fontList = this.state.fonts.map(font =>{
      return <option key={font} value={font}>{font}</option>;
    });

    return (
      <section className={styles.TextFormatter}>
        <form>
          <select onChange={this.changeFontHandler}>
            {fontList}
          </select>
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
