export const getQuotes = (count) => {
  return fetch(`https://futuramaapi.herokuapp.com/api/quotes/${count}`)
    .then(res => {
      if(!res.ok) throw 'Unable to fetch quotes';
      return res.json();
    });
};
