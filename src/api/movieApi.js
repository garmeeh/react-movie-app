const API_KEY = '981f13a0';

const getMovies = searchTerm => {
  const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`;
  return fetch(API_URL)
    .then(response => response.json())
    .catch(error => error);
};

const getMovie = id => {
  const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`;
  return fetch(API_URL)
    .then(response => response.json())
    .catch(error => error);
};

export { getMovies, getMovie };
