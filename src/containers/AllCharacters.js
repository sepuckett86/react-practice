import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Characters from '../components/Characters';
import { getCharacters } from '../services/rickAndMortyApi';

export default class TopQuotes extends Component {
  static propTypes = {
    page: PropTypes.number
  }

  static defaultProps = {
    page: 1
  }

  state = {
    characters: [],
  }
  
  componentDidMount() {
    getCharacters(this.props.page)
      .then(characters => {
        this.setState({ characters });
      });
  }

  render() {
    return (
      <>
        <Characters characters={this.state.characters} />
      </>
    );
  }
}
