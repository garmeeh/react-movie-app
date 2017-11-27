const API_KEY = '981f13a0';
const MOVIE_API_BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

const getMovies = searchTerm => {
  return fetch(`${MOVIE_API_BASE_URL}&s=${searchTerm}`)
    .then(response => response.json())
    .catch(error => error);
};

const getMovie = id => {
  return fetch(`${MOVIE_API_BASE_URL}&i=${id}`)
    .then(response => response.json())
    .catch(error => error);
};

export { getMovies, getMovie };
