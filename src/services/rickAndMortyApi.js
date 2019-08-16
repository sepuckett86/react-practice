export const getCharacters = (page) => {
  return fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then(res => {
      if(!res.ok) throw 'Unable to fetch quotes';
      return res.json();
    })
    .then(characters => {
      const simplified = characters.results.map(character => {
        return {
          name: character.name,
          status: character.status,
          species: character.species,
          image: character.image
        };
      });

      return simplified;
    });
};
