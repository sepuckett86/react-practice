import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import './Characters.css';

function Characters({ characters }) {
  const characterList = characters.map(character => (
    <li key={`${character.name}+${character.species}+${character.status}+${character.image}`}>
      <Character character={character} />
    </li>
  ));
  return (
    <ul>
      {characterList}
    </ul>
  );
}

Characters.propTypes = {
  characters: PropTypes.array.isRequired
};

export default Characters;

