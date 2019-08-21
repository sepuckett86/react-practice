import React, { Component } from 'react';
import Characters from '../components/Characters';
import { getCharacters, getPages } from '../services/rickAndMortyApi';

export default class TopQuotes extends Component {
  state = {
    characters: [{
      name: 'Toxic Rick',
      status: 'Dead',
      species: 'Humanoid',
      image: 'https://rickandmortyapi.com/api/character/avatar/361.jpeg'
    }],
    page: 1,
    totalPages: 0
  }
  
  componentDidMount() {
    getPages()
      .then(pages => {
        this.setState({ totalPages: pages });
      })
      .then(() => getCharacters(this.state.page))
      .then(characters => {
        this.setState({ characters });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.page !== this.state.page) {
      console.log(prevState.page, this.state.page);
      getCharacters(this.state.page)
        .then(characters => {
          this.setState({ characters });
        });
    }
  }

  onClick = ({ target }) => {
    if(target.name === 'next') {
      this.setState(state => {
        return {
          page: state.page + 1
        };
      });
    }
    if(target.name === 'previous') {
      this.setState(state => {
        return {
          page: state.page - 1
        };
      });
    }
  }

  render() {
    return (
      <>
        {this.state.page > 1 ? <button name="previous" onClick={this.onClick}>Previous Page</button> : null}
        {this.state.page < this.state.totalPages ? <button name="next" onClick={this.onClick}>Next Page</button> : null}
        <Characters characters={this.state.characters} />
      </>
    );
  }
}
