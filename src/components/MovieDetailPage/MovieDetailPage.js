import React from 'react';

const MovieRatings = ({ ratings = [], votes }) => (
  <div>
    {ratings.map((rating, index) => (
      <p key={`rating-${index}`}>
        {rating.Source}: {rating.Value}
      </p>
    ))}
  </div>
);

const MovieDetailPage = ({
  Title,
  Year,
  Poster,
  Plot,
  Ratings,
  Writer,
  Actors,
  Director,
  BoxOffice,
  Awards,
  Rated,
  Genre,
  Runtime,
  imdbID,
  imdbVotes
}) => (
  <div>
    <h1>
      {Title} ({Year})
    </h1>
    <p>
      {Rated}, {Runtime}, {Genre}
    </p>
    <div>
      <div>
        <img src={Poster} alt={`Movie Poster for ${Title}`} />
      </div>
      <div>
        <p>{Plot}</p>
        <p>Actors: {Actors}</p>
        <p>Writers: {Writer}</p>
        <p>Director: {Director}</p>
        <p>Box Office: {BoxOffice}</p>
        <p>Awards: {Awards}</p>
        <MovieRatings ratings={Ratings} votes={imdbVotes} />
        <a href={`http://www.imdb.com/title/${imdbID}/`} target="_blank">
          View on IMDb
        </a>
      </div>
    </div>
  </div>
);

export default MovieDetailPage;
